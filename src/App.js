import React, { useState } from 'react';
import './LabelWithDescription.css';

const LabelWithDescription = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState(null);

  const descriptions = [
    "How does Parkname separate itself from other domain name parking companies?",
    "Is Parkname Parking actually free?",
    "What you do?",
    "When was Parkname first founded?"
  ];

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleDescription = (description) => {
    setSelectedDescription(selectedDescription === description ? null : description);
  };

  return (
    <div className="container">
      {/* Label */}
      <div onClick={toggleDescriptionVisibility} className={`label1 ${isDescriptionVisible ? 'active' : ''}`}>
        <div className='group'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/456/456283.png"
            alt="react logo"
            className="react-logo"
          />
          <div className='group1'>
            <strong>About Us</strong>
            <p>4 articles in this topic</p>
            
          </div>
          
        </div>
        <div className={`arrow ${isDescriptionVisible ? 'up' : 'down'}`}></div>
      </div>

      {/* Descriptions */}
      {isDescriptionVisible && descriptions.map((description, index) => (
        <div key={index} className="description" onClick={() => toggleDescription(description)}>
          
          <p>{description}
          <div className={`arrow1 ${selectedDescription === description && 'right'}`}></div></p>
          
          {/* Include additional logic for showing/hiding paragraph */}
          {selectedDescription === description && (
            <div className="description-paragraph">
              <p>This is the paragraph for {description}</p>
            </div>
          )}
          
        </div>  
      ))}
    </div>
  );
};

export default LabelWithDescription;
