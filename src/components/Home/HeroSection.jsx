import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 h-screen overflow-hidden">
      <style jsx>{`
        @keyframes leftToRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-left-to-right {
          animation: leftToRight 1s ease-out forwards;
        }

        .text-shadow {
          text-shadow: -2px 2px 6px #000;
        }

        .video-bg {
          object-fit: cover;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          opacity: 0.7;
        }
      `}</style>

      {/* Embedded virtual tour video with autoplay, looping, and muted */}
      <video
        className="video-bg"
        src="https://cdn.pixabay.com/video/2024/06/06/215500_tiny.mp4" // Replace with your actual virtual tour video link
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="relative z-20 flex flex-col items-end justify-center h-full bg-black bg-opacity-50 p-5 text-right">
        <h1 className="text-white font-bold animate-left-to-right text-shadow" style={{ fontSize: '32px', lineHeight: '68px', marginBottom: '30px' }}>
          Transforming Visions with Cutting-Edge <br /> Web Development<br /> Engaging Content<br /> SEO<br /> App Solutions<br /> Immersive Virtual Tours.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
