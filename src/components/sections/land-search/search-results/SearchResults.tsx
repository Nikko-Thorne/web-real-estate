import { useContext, useEffect, useRef, useState } from "react";

import type { Land } from "../../../../model/Land";
import Card from "./card/Card";
import Dropdown from "../../../ui/Dropdown";

import type { MapView } from "../../../map/MapView";

import "./SearchResults.sass";
import { FavouritesContext } from "../favourites/FavouritesContext";
import EmptySearch from "./empty-search/EmptySearch";
import SortIcon from "./SortIcon";
import ViewSwitch from "./ViewSwitch";
import FilterIcon from "../search-filters/FilterIcon";

interface Props {
  lands: Land[];
  mapUpdateIteration: number;

  onResetSearch: () => void;
}

const SORT_OPTIONS = [
  "Mới thêm trước",
  "Rẻ nhất trước",
  "Đắt nhất trước",
  "Nhỏ nhất trước",
  "Lớn nhất trước",
];

const sortLands = (lands: Land[], sortOption: number) => {
  if (sortOption <= 0) return lands;

  if (sortOption === 1) return lands.toSorted((a, b) => a.price! - b.price!);

  if (sortOption === 2) return lands.toSorted((a, b) => b.price! - a.price!);

  if (sortOption === 3) return lands.toSorted((a, b) => a.area! - b.area!);

  if (sortOption === 4) return lands.toSorted((a, b) => b.area! - a.area!);

  return lands;
};

const SearchResults: React.FC<Props> = ({
  lands,
  mapUpdateIteration,
  onResetSearch,
}) => {
  const [sortOption, setSortOption] = useState(0); // By default show newly added lands first

  const sortedLands = sortLands(lands, sortOption);

  // Reference to map-view element (used to show search results on map)
  const mapViewRef = useRef<MapView | null>(null);

  // Get reference to map-view element (used to show location markers)
  useEffect(() => {
    mapViewRef.current = document.querySelector("map-view") as MapView;

    // First render of map-view element
    rerenderMapMarkers(sortedLands);

    if (sortedLands.length > 0)
      mapViewRef.current?.focusOnPopupMarker(sortedLands[0].title!);
  }, []);

  const {
    isFavourite: isFavouriteLand,
    registerToggleCallback: registerFavouriteToggleCallback,
  } = useContext(FavouritesContext);

  // Update map each time sort order or sort results change
  const rerenderMapMarkers = (lands: Land[]) => {
    const favourites = sortedLands
      .filter((land) => isFavouriteLand(land.slug!))
      .map((land) => land.title!);

    mapViewRef.current?.renderPopupMarkers(
      lands.filter((land) => land.coords),
      favourites,
    );
  };
  rerenderMapMarkers(sortedLands);

  // Focus map on the first item from the search results
  useEffect(() => {
    if (sortedLands.length > 0)
      mapViewRef.current?.focusOnPopupMarker(sortedLands[0].title!);
  }, [mapUpdateIteration, sortOption]);

  // Show popup marker when a land is added to favourites
  useEffect(() => {
    registerFavouriteToggleCallback(
      (landSlug: string, isFavourite: boolean) => {
        if (isFavourite) {
          const title =
            lands.find((land) => land.slug === landSlug)?.title || "Dat nen";

          mapViewRef.current?.focusOnPopupMarker(title, false);
        }
      },
    );
  }, [mapUpdateIteration]);

  return (
    <div className="relative min-w-[20rem]  flex-1  p-4 pb-10 pr-2 @container/search-results">
      <div className=" mb-3 grid cursor-default grid-cols-2 items-center gap-0.5 text-base font-normal ">
        <div className="hidden">
          Hiện có{" "}
          <strong className="font-semibold">{lands.length} lô đất</strong> bán
        </div>

        <ViewSwitch />

        <div className=" flex select-none items-center place-self-end text-sm">
          <button
            onClick={() => {
              console.log("bo lock open");

              // setIsOpen(!isOpen);
            }}
            className="button-click-animation z-40 inline-flex h-fit w-fit cursor-pointer items-center justify-center gap-x-1.5 place-self-end rounded-lg  border-2 border-solid  px-2 py-1 text-sm font-medium text-[--color-secondary] transition duration-300 ease-in-out hover:border-[--color-secondary] hover:bg-[--color-secondary-transparent-lighter] hover:text-[--color-secondary-darker] md:hidden"
          >
            <span className="text-[--color-text]">Bộ lọc</span>
            <FilterIcon />
          </button>
          <span className="hidden pr-0.5 @2xl/search-results:inline-block">
            Sắp xếp theo:
          </span>
          <Dropdown
            options={SORT_OPTIONS}
            selectedOption={sortOption}
            onUpdateSelection={(option) => setSortOption(option)}
          >
            <SortIcon />
          </Dropdown>
        </div>
      </div>

      <div
        className="pb-10 pr-3   lg:h-full  lg:overflow-y-scroll"
        id="scrollable-lands-container"
        data-lenis-prevent
      >
        {sortedLands.map((land) => (
          <Card key={land.slug} land={land} />
        ))}

        {sortedLands.length === 0 && (
          <EmptySearch onResetSearch={onResetSearch} />
        )}
      </div>
      <div
        className="  absolute right-0 top-0 z-10 mt-14 hidden h-full  w-1.5 cursor-col-resize opacity-50 lg:block "
        id="resize-handle"
      ></div>
    </div>
  );
};

export default SearchResults;
