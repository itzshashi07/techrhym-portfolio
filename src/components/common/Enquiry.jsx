import React, { useContext } from 'react';
import { PopupContext } from '../../contexts/PopupContext';

const Enquiry = () => {
  const { isPopupOpen, openPopup, closePopup } = useContext(PopupContext);

  return (
    <>
      {/* Enquire Now Button */}
      <div
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-[#FFAF45] text-black px-2 rounded-s py-6  flex items-center justify-center"
        style={{ marginTop: '-100px' }} // Adjust the margin as needed to prevent hiding content
        onClick={openPopup}
      >
        <span className="font-bold text-sm tracking-wide text-center"
              style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
          Enquire now
        </span>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-xl font-semibold rounded-lg px-4 py-2 bg-red-600 hover:bg-red-800"
            >
              Close
            </button>
            <iframe
              src="https://resto-virtualtour.vercel.app/enquireform"
              title="Contact Form"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Enquiry;
