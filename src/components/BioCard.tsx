import Image from "next/image";

const BioCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/ryan-fitzgerald.jpg" // Replace with the actual image path
            alt="Ryan Fitzgerald"
            width={300}
            height={300}
            className="rounded-full mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 md:ml-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Ryan Fitzgerald
          </h1>
          <p className="text-gray-600 mt-2">
            Winner of 2018 Realtor Magazine's 30 under 30.
          </p>
          <p className="text-gray-600 mt-2">
            Contributor for *Forbes*, *WRAL*, *US News*, *Realtor.com*, *Realtor.org*, 
            *Inman*, and more.
          </p>
          <p className="text-gray-600 mt-2">
            Owner of Raleigh Realty, Ryan has helped countless clients find their
            dream homes with a customer-first approach.
          </p>

          {/* Contact Information */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>
                <strong>Cell #:</strong> 919-249-8536
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Ryan@RaleighRealtyHomes.com"
                  className="text-blue-500 underline"
                >
                  Ryan@RaleighRealtyHomes.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="http://www.raleighrealtyhomes.com/ryan-fitzgerald.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  RaleighRealtyHomes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Testimonials</h2>
        <p className="text-gray-600 italic mt-2">
          "Ryan Fitzgerald was a huge help in my search for a new home. He was
          always available for showings when it was convenient for me and very
          quick to respond. Being able to see homes as soon as they hit the market
          was crucial for my price range. He was very honest and did not push me
          to buy; he genuinely wanted to help me find the right home. He made the
          process extremely easy and stress-free. I would recommend Ryan and
          Raleigh Realty to anyone!"
        </p>
      </div>
    </div>
  );
};

export default BioCard;
