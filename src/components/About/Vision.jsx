import React, { useState } from 'react';
import { FaCompass, FaSpaceShuttle } from 'react-icons/fa';

// Define the background image URL
const backgroundImg = "./images/visionbg.png";

// Define the Vision component
const Vision = () => {
  // State to manage day/night mode
  const [isDayMode, setIsDayMode] = useState(true);

  // Icon styles for spinning animation
  const iconStyle = {
    animation: 'spin 10s linear infinite',
    position: 'relative',
    top: '-25%', // Adjust to ensure only part of the icon is outside
  };

  // Styles for day and night mode
  const dayModeStyles = {
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#FFAF45',
  };

  const nightModeStyles = {
    backgroundColor: '#333',
    color: 'white',
    borderColor: '#FFAF45',
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .day-mode {
            background-color: ${dayModeStyles.backgroundColor};
            color: ${dayModeStyles.color};
          }
          .night-mode {
            background-color: ${nightModeStyles.backgroundColor};
            color: ${nightModeStyles.color};
          }
        `}
      </style>
      <div
        className={`min-h-screen flex items-center justify-center bg-cover bg-center ${isDayMode ? 'day-mode' : 'night-mode'}`}
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0 px-4 py-8">
          <div
            className="bg-opacity-90 p-10 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-100 w-full md:w-2/5 relative"
            style={{ borderColor: isDayMode ? dayModeStyles.borderColor : nightModeStyles.borderColor }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-100 p-5 rounded-full overflow-visible">
                <FaCompass className="w-20 h-20" style={{ ...iconStyle, color: isDayMode ? '#FFAF45' : '#FFAF45' }} />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: isDayMode ? '#FFAF45' : '#FFAF45' }}>Vision</h2>
              <p className="text-center text-md text-justify">
                To empower individuals and communities by making modern technology accessible and affordable for everyone. 
                We aim to promote digitalization, particularly in rural areas, through education and hands-on workshops, 
                ensuring no one is left behind in the digital age.
              </p>
            </div>
          </div>
          <div className="md:w-1.5"></div> {/* Divider with 6px width */}
          <div
            className="bg-opacity-90 p-10 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-100 w-full md:w-2/5 relative"
            style={{ borderColor: isDayMode ? dayModeStyles.borderColor : nightModeStyles.borderColor }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-100 p-5 rounded-full overflow-visible">
                <FaSpaceShuttle className="w-20 h-20" style={{ ...iconStyle, color: isDayMode ? '#FFAF45' : '#FFAF45' }} />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: isDayMode ? '#FFAF45' : '#FFAF45' }}>Mission</h2>
              <p className="text-center text-md text-justify">
                To deliver top-notch development services and innovative solutions that cater to all, regardless of budget. 
                We are committed to driving digital growth, fostering curiosity, and keeping people informed about the latest trends, 
                while making technology more inclusive and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
