import React from 'react';
import { FaCar, FaHotel, FaSchool, FaShoppingCart, FaHospital } from 'react-icons/fa';

const industries = [
  { icon: <FaCar />, name: 'Real Estate', description: 'Showcase properties to potential buyers with immersive tours that allow them to explore every detail before visiting in person.' },
  { icon: <FaHotel />, name: 'Hospitality', description: 'Give guests a preview of your hotel, resort, or restaurant, helping them feel confident in their booking decision.' },
  { icon: <FaSchool />, name: 'Education', description: 'Allow prospective students and parents to tour your campus, classrooms, and facilities from anywhere in the world.' },
  { icon: <FaShoppingCart />, name: 'Retail', description: 'Display your store layout and product offerings, making it easier for customers to browse and shop online.' },
  { icon: <FaHospital />, name: 'Healthcare', description: 'Provide patients with a virtual tour of your medical facility, helping them feel comfortable and familiar before their visit.' }
];

const Industries = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h2 className="text-2xl font-bold text-center text-[#FFAF45] mb-10">Industries We Serve with Virtual Tours</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-[#FFAF45] dark:hover:bg-gray-700 transition-colors duration-300">
            <div className="text-3xl text-gray-800 dark:text-white mb-3">
              <div className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg">{industry.icon}</div>
            </div>
            <p className="text-md text-gray-900 dark:text-gray-300 font-semibold">{industry.name}</p>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 text-center text-justify">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
