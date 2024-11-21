import React from 'react';
import '../styles/serviceAreas.css';

const serviceAreas = [
 'Airway Heights', 'Chattaroy', 'Cheney', 'Clayton', 'Colbert', 'Deer Park', 
'Edwall', 'Elk', 'Fairfield', 'Greenacres', 'Latah', 'Mead', 'Mica', 
'Millwood', 'Nine Mile Falls', 'Otis Orchards', 'Rockford', 'Spangle', 
'Spokane', 'Spokane Valley', 'Tumtum', 'Valleyford', 'Veradale'
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