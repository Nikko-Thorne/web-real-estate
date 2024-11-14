import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <button
            type="button"
            className="accordion-title"
            onClick={() => handleToggle(index)}
            onKeyUp={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(index); }}
          >
            <h2>{item.title}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
