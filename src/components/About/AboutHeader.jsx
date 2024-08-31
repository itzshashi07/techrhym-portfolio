import React from 'react';
import { FaGlobe, FaMapMarkedAlt, FaHeadset, FaRocket, FaCameraRetro, FaSmile, FaStar, FaProjectDiagram, FaBriefcase } from 'react-icons/fa';
import CountUp from 'react-countup';

const AboutHeader = () => (
  <div className="relative min-h-screen bg-gray-800 text-white overflow-hidden">
    <img
      src="./images/virtualimgbg.jpg"  // Replace with an appropriate background image for virtual tours
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-8">
        About Our Virtual Tours
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg max-w-4xl mx-auto mb-6">
        At BrandSumo, we specialize in creating immersive virtual tours that allow your audience to explore and engage with your spaces, products, and services like never before. Whether it's showcasing real estate, retail, or corporate environments, our cutting-edge technology ensures a seamless and captivating virtual experience.
      </p>

      <div className="text-left max-w-4xl w-full mx-auto mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Global Reach</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkedAlt className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Interactive Navigation</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaHeadset className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">24/7 Support</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaRocket className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Fast & Reliable</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaCameraRetro className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">High-Quality Imagery</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <FaSmile className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-blue-500" />
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-semibold">
              <CountUp end={150} duration={2} />+
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaStar className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-blue-500" />
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-semibold">
              <CountUp end={99} duration={2} />%
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Client Satisfaction Rate</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaProjectDiagram className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-blue-500" />
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-semibold">
              <CountUp end={250} duration={2} />+
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Virtual Tours Delivered</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FaBriefcase className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-blue-500" />
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-semibold">
              <CountUp end={120} duration={2} />+
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg">Industry Professionals</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutHeader;
