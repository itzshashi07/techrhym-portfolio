import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const OnDemand = () => {
  const imageAnimation = {
    opacity: 0,
    transform: "translateX(-20px)",
    animation: "fadeInLeft 1s ease-out forwards",
  };

  const contentAnimation = {
    opacity: 0,
    transform: "translateX(20px)",
    animation: "fadeInRight 1s ease-out forwards",
  };

  const styles = `
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeInRight {
      0% { opacity: 0; transform: translateX(20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
  `;

  return (
    <div className="bg-white py-12">
      <style>{styles}</style>
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
        {/* Left Image Section */}
        <div className="flex-1" style={imageAnimation}>
          <img
            src="https://www.bonamisoftware.com/images/About.webp"
            alt="Team Working Illustration"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-1 lg:pl-12 mt-8 lg:mt-0" style={contentAnimation}>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            On-Demand / Offshore Software Development Team
          </h1>
          <p className="mt-4 text-gray-700 text-base lg:text-lg leading-relaxed">
            At BrandSumo , we offer outsourcing services enabling you to
            extend your development team within three days.
          </p>
          <p className="mt-2 text-gray-700 text-base lg:text-lg leading-relaxed">
            We seamlessly combine cutting edge designs and industry-acclaimed
            software development practices for building high-performing web &
            mobile products. We serve clients across industry and company sizes,
            helping them build business capabilities and foster their business
            growth.
          </p>
          <Link to="/about">
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded shadow hover:bg-orange-600 transition duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnDemand;
