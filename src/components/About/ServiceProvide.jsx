import React from 'react';
import { FaCameraRetro, FaImage, FaVrCardboard, FaCube } from 'react-icons/fa'; // Updated icons for new services

const ServiceProvide = () => {
  const services = [
    { Icon: FaVrCardboard, text: 'Virtual 360' },            // Icon for Virtual 360
    { Icon: FaCameraRetro, text: 'High-Resolution Photography' }, // Icon for High-Resolution Photography
    { Icon: FaImage, text: 'The Scenario of Virtual Tour' },  // Icon for The Scenario of Virtual Tour
    { Icon: FaCube, text: '3D Product Photography' }          // Icon for 3D Product Photography
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Brandsumo Provides Services in the Below Areas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {services.map(({ Icon, text }, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Icon className="text-3xl mb-2" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProvide;
