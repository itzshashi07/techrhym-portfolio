import React from 'react';
import { FaDollarSign, FaRocket, FaLightbulb, FaUsers, FaClock } from 'react-icons/fa';

const WhyChoose = () => {
  const features = [
    { icon: FaDollarSign, title: 'Affordable Pricing', description: 'Get top-notch services that won’t break the bank. We offer competitive pricing tailored to fit your budget.' },
    { icon: FaRocket, title: 'Trending Tech for Development', description: 'Stay ahead of the curve with cutting-edge technology and solutions that keep your business relevant in today’s fast-paced market.' },
    { icon: FaLightbulb, title: 'Innovative Approach', description: 'Our creative team brings fresh ideas and innovative strategies to every project, ensuring unique and effective outcomes.' },
    { icon: FaUsers, title: 'Client-Focused Service', description: 'Your satisfaction is our priority. We work closely with you to understand your needs and deliver results that exceed expectations.' },
    { icon: FaClock, title: '24/7 Accessibility', description: 'We’re always here for you. Access our services anytime, anywhere, with support that fits your schedule.' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#FFAF45] font-bodoni text-3xl mb-8">Why Choose Techrhym</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 border border-[#FFAF45] rounded-lg shadow-md">
              <feature.icon className="text-4xl text-[#FFAF45] mb-3" />
              <h3 className="text-lg font-semibold text-black dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
