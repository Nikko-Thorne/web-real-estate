import React from 'react';
import '../styles/serviceAreas.css';

const serviceAreas = [
  'Addy', 'Airway Heights', 'Bayview', 'Chattaroy', 'Cheney', 'Chewelah', 
  'Clarkston', 'Clayton', 'Coeur D Alene', 'Colbert', 'Colfax', 'Colville', 
  'Creston', 'Curlew', 'Cusick', 'Davenport', 'Deer Meadows', 'Deer Park', 
  'Edwall', 'Elk', 'Endicott', 'Evans', 'Fairfield', 'Ford', 'Fruitland', 
  'Gifford', 'Greenacres', 'Harrington', 'Harrison', 'Hayden', 'Hope', 
  'Hunters', 'Inchelium', 'Ione', 'Kettle Falls', 'Kingston', 'Latah', 
  'Lincoln', 'Mabton', 'Malden', 'Marcus', 'Mead', 'Metaline Falls', 'Mica', 
  'Millwood', 'Newport', 'Nine Mile Falls', 'Nordman', 'Northport', 
  'Oakesdale', 'Odessa', 'Oldtown', 'Otis Orchards', 'Plummer', 'Pomeroy', 
  'Post Falls', 'Priest River', 'Reardan', 'Republic', 'Rice', 'Ritzville', 
  'Rockford', 'Rosalia', 'Sagle', 'Saint Maries', 'Seven Bays', 'Spangle', 
  'Spokane', 'Spokane Valley', 'Sprague', 'Springdale', 'St John', 'Tekoa', 
  'Tumtum', 'Usk', 'Valley', 'Valleyford', 'Veradale', 'Wilbur', 'Worley'
];

const ServiceAreas = () => {
  return (
    <div className="service-areas-container">
      <h1 className="service-areas-title">Areas We Cover</h1>
      <ul className="service-areas-list">
        {serviceAreas.map((area, index) => (
          <li className="service-areas-item" key={area}>
            <i className="fa fa-map-marker service-areas-icon" />
            <a className="service-areas-link" href={`https://ruslanshmidt.exprealty.com/areas/${area.toLowerCase().replace(/ /g, '+')}`}>{area}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceAreas;