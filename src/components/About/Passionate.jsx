import React, { useState, useEffect } from 'react';
import '../../App'; // Assuming you have a global CSS file for TailwindCSS

const imageUrls = [
  '/images/gallary2.avif',
  '/images/gallary3.avif',
  '/images/gallary4.avif',
  '/images/gallary5.avif',
  '/images/gallary6.avif',
  '/images/gallary7.avif',
  '/images/gallary8.avif',
  '/images/gallary9.avif',
  '/images/gallary10.avif',
  '/images/gallary11.avif',
  '/images/gallary9.avif',
  '/images/gallary8.avif',
  '/images/gallary2.avif',
];

const Passionate = () => {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const shuffleImages = () => {
      const shuffled = imageUrls.sort(() => 0.5 - Math.random());
      setCurrentImages(shuffled.slice(0, 4));
    };

    shuffleImages();
    const intervalId = setInterval(shuffleImages, 5000); // Change images every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col justify-center space-y-4 lg:w-1/2">
          <h2 className="text-2xl text-center sm: text-center text-3xl md:text-4xl text-center font-bold">A Passionate Leader in Virtual Experiences</h2>
          <p className="text-base md:text-lg">
            At BrandSumo, we specialize in creating immersive virtual experiences that transcend the ordinary. Our services allow businesses to showcase their products and spaces with unmatched clarity and realism, making your audience feel as though they are physically present.
          </p>
          <p className="text-base md:text-lg">
            Leveraging our expertise in virtual 360, high-resolution photography and video, virtual tours, and 3D product photography, we help you capture and present your brand in the most engaging way possible. Our innovative approach ensures that you stand out in the digital landscape, whether you're a startup, an enterprise, or a government entity.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl">👨‍💻</span>
              <p className="text-base md:text-lg">100% own staff, No freelancers</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">💰</span>
              <p className="text-base md:text-lg">Cost-effective</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">📸</span>
              <p className="text-base md:text-lg">High-Resolution Photography & Video</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🌐</span>
              <p className="text-base md:text-lg">Virtual 360 & 3D Product Photography</p>
            </div>
          </div>
          <a href="/industries" className="mt-4 inline-block bg-orange-500 text-white py-2 px-8 rounded-lg hover:bg-orange-600 text-center leading-snug text-lg font-bold" style={{ width: '200px' }}>
            <div>Explore</div>
            <div>More</div>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-0 lg:w-1/2">
          {currentImages.map((url, index) => (
            <div
              key={index}
              className="relative w-full"
              style={{ height: '40vh' }} // Adjust height to fit the screen better
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg transition-opacity duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Passionate;
