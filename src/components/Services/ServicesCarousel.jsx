import React from 'react';

const ServicesCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./images/vrvdo.mp4" // Replace with your video source
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Services</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            AR/VR, 360° Product Photography, 360 Virtual Staging, 360 Animation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
