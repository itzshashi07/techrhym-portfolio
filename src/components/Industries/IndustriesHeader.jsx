import React from 'react';

const IndustriesHeader = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <img
        src="./images/aboutbanner.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20" // Reduced opacity for better text visibility
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-40 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center"> 
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-[#FFAF45] font-bodoni">
          Virtual Tour Development Services
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12">
          We specialize in creating immersive virtual tours for various industries worldwide. Our services are designed to enhance customer engagement and provide an interactive experience that brings your business closer to your audience.

          Whether you're in real estate, hospitality, education, or any other industry, our virtual tour solutions allow you to showcase your spaces and products in an innovative and captivating way. 

          For the past three years, BrandSumo has been at the forefront of virtual tour technology, offering consulting, development, and maintenance services that meet the highest standards of quality and innovation.
        </p>

        <div className="text-left max-w-4xl w-full mx-auto mb-12">
          {/* Additional content can be placed here */}
        </div>
      </div>
    </div>
  );
};

export default IndustriesHeader;
