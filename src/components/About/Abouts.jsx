import React, { useState, useEffect } from 'react';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading delay for demonstration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 bg-white min-h-screen">
      {loading ? (
        <div className="animate-pulse flex flex-col items-center justify-center">
          <div className="h-40 w-40 bg-gray-300 rounded-full"></div>
          <div className="space-y-2 mt-5">
            <div className="h-6 w-48 bg-gray-300"></div>
            <div className="h-4 w-64 bg-gray-300"></div>
            <div className="h-4 w-52 bg-gray-300"></div>
            <div className="h-4 w-40 bg-gray-300"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10">
          <div className="text-center p-5">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
            <p className="text-orange-600 italic">Empowering Insights, Fueling Curiosity.</p>
            <p className="mt-4 text-gray-600 max-w-xl text-justify">
            At Techrhym, we excel in cutting-edge web and app development, SEO, digital marketing, and content writing. From hosting services to software testing, we provide top-notch solutions tailored to your needs. Need content? Our flexible plans offer skilled writers on demand—daily, weekly, monthly, or per article—all at the best affordable rates.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-female-graphic-designer-character-holding-dart-with-target_23-2149501799.jpg?t=st=1724839220~exp=1724842820~hmac=fd112a8962383d0c8d0200cbe31c5f03c917cb7279b5de3d3369420325c7b9ea&w=740"
            alt="BrandSumo Panorama"
            className="w-64 h-64 object-cover rounded-full transform transition-transform duration-500 hover:scale-110"
          />
          <div className="mt-5 md:mt-0 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">About Techrhym</h2>
            <hr className="border-orange-600 w-full" />
            <h3 className="text-xl font-semibold text-gray-700">What We Offer</h3>
            <p className="text-gray-600 text-justify">
              We specialize in web development using trending technologies, app development, SEO, digital marketing, virtual tours, content writing, and hosting services. Our expertise extends to software testing and providing content writers on a daily, weekly, monthly, or per-article basis.
            </p>
            <h3 className="text-xl font-semibold text-gray-700">Why Choose Us?</h3>
            <p className="text-gray-600 text-justify">
              Our innovative approach, cutting-edge technology, and client-focused service make us stand out.
            </p>
            <h3 className="text-xl font-semibold text-gray-700">Our Services</h3>
            <p className="text-gray-600 text-justify">
              UI/UX design, graphic designing, WordPress development, virtual tours, and more. We are dedicated to providing top-notch services tailored to your needs.
            </p>
            <div className="flex justify-center md:justify-start items-center mt-4">
              <span className="text-pink-400 text-2xl mr-2">📞</span>
              <span className="text-gray-800 text-2xl font-bold">+91-8078633912</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
