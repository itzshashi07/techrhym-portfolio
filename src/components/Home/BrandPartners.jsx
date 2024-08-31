import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faFacebook,
  faApple,
  faMicrosoft,
  faAmazon,
  faTwitter,
  faSpotify,
  faLinkedin,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const Brandpartners = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-900 p-4 overflow-hidden">
      <div className="text-sm md:text-base lg:text-lg uppercase font-semibold text-gray-500 dark:text-gray-300 mb-4 md:mb-0">
        Trusted by startups
      </div>
      <div className="scroll-container">
        <div className="animate-marquee flex space-x-6">
          <FontAwesomeIcon icon={faGoogle} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faFacebook} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faApple} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faMicrosoft} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faAmazon} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faTwitter} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faSpotify} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faLinkedin} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faInstagram} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
          <FontAwesomeIcon icon={faGithub} className="h-6 md:h-8 lg:h-10 text-gray-600 dark:text-gray-300" />
        </div>
      </div>

      {/* Inline styles for marquee animation */}
      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }
        
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Brandpartners;
