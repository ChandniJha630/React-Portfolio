import React, { useState } from 'react';

function Buttons() {
  const [popupContent, setPopupContent] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Hides the popup after 3 seconds (3000 milliseconds)
  };

  return (
    <div className="flex justify-between absolute text-white text-xs h-1/3 items-end pl-2 pr-2 pt-5 pb-5 w-1/5 bottom-16 right-48 lg:w-2/3 lg:right-5 lg:justify-around">
      <button
        className="button-67"
        role="button"
        onClick={() => openPopup('Software Development')}
      >
        01
      </button>
      <button
        className="button-67"
        role="button"
        onClick={() => openPopup('Machine Learning')}
      >
        02
      </button>
      <button
        className="button-67"
        role="button"
        onClick={() => openPopup('Full Stack Development - MERN')}
      >
        03
      </button>
      <button
        className="button-67"
        role="button"
        onClick={() => openPopup('UI-UX Designing')}
      >
        04
      </button>

      {isPopupVisible && (
        <div className=" animate-ping-3s top-16 left-20 absolute pl-5 pr-5 pt-5 pb-5">
          <h1 className='text-xl'>{popupContent}</h1>
        </div>
      )}
    </div>
  );
}

export default Buttons;
