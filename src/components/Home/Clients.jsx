import React from 'react';
import CountUp from 'react-countup';
import { FaGlobe, FaMapMarkedAlt, FaUsers, FaCamera } from 'react-icons/fa';

const Clients = () => {
  const stats = [
    {
      value: 6,
      title: 'Years of Expertise',
      icon: <FaGlobe />,
    },
    {
      value: 4,
      title: 'Countries Served',
      icon: <FaMapMarkedAlt />,
    },
    {
      value: 50,
      suffix: '+',
      title: 'Global Clients',
      icon: <FaUsers />,
    },
    {
      value: 100,
      suffix: '+',
      title: 'Virtual Tours',
      icon: <FaCamera />,
    },
    {
      value: 25000,
      suffix: '+',
      title: '360° Photos',
      icon: <FaCamera />,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#FFAF45]">
            Experience a True-to-Life Journey
          </h2>
          <p className="text-xl mt-4 text-black dark:text-white">
            We aim to provide you with an immersive experience that feels as real as being at your desired destination.
          </p>
          <p className="text-2xl mt-2 italic text-[#FFAF45]">
            "Be Here, Be There!"
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-black dark:text-white p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center text-[#FFAF45] mb-4 text-4xl">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-xl font-semibold">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
