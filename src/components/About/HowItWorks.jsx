import React from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaCogs, FaRocket, FaHandshake } from 'react-icons/fa';

const steps = [
  { Icon: FaLightbulb, title: 'Discovery & Planning', description: 'We begin with understanding your vision and goals through detailed consultations. Our team identifies key requirements and crafts a strategic plan tailored to your needs.' },
  { Icon: FaPencilRuler, title: 'Design & Prototyping', description: 'We create visually appealing and user-friendly designs, ensuring a perfect blend of aesthetics and functionality. Prototypes are developed to give you a clear view of the final product.' },
  { Icon: FaCode, title: 'Development', description: 'Our developers bring the design to life using the latest technologies, ensuring clean, efficient, and scalable code. We focus on performance, security, and user experience.' },
  { Icon: FaCogs, title: 'Customization & Integration', description: 'We customize the project to align with your brand, integrating any specific features, APIs, or third-party services needed to enhance functionality.' },
  { Icon: FaRocket, title: 'Testing & Launch', description: 'Before going live, rigorous testing is conducted to ensure the product is bug-free and performs optimally. Once approved, we launch your project and make it accessible to your audience.' },
  { Icon: FaHandshake, title: 'Support & Maintenance', description: 'Our relationship doesn’t end at launch. We provide ongoing support, maintenance, and updates to ensure your project remains up-to-date and continues to meet your goals.' }
];

const HowItWorks = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">How We Build</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg shadow-md transform transition-transform duration-500 ease-in-out hover:scale-105"
              style={{ animation: `fadeInUp 0.3s ease ${index * 0.2}s both` }}
            >
              <div className="p-4 rounded-full bg-white mb-4" style={{ animation: `pulse 1.5s infinite` }}>
                <Icon className="text-black text-4xl" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-sm text-gray-300 text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
