import React from "react";
import { FaVrCardboard, FaCamera, FaGlobe, FaMapMarkedAlt } from "react-icons/fa";

const Features = ({ mode }) => {
  const isNightMode = mode === 'night';

  const features = [
    { icon: <FaVrCardboard />, title: "Immersive 360° Virtual Tours" },
    { icon: <FaCamera />, title: "High-Resolution Photography" },
    { icon: <FaGlobe />, title: "Global Accessibility" },
    { icon: <FaMapMarkedAlt />, title: "Interactive Maps & Navigation" },
  ];

  return (
    <div className={`py-12 ${isNightMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center shadow-md rounded-lg p-6 m-4 w-full max-w-xs transform hover:scale-105 transition-transform duration-300 ${isNightMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            >
              <div className="text-5xl text-orange-500 mb-4">
                {feature.icon}
              </div>
              <h2 className="text-xl font-semibold text-center">
                {feature.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
