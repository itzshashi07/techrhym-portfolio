import React from 'react';
import { FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DiscussProject = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/6004285/6004285-hd_1080_1920_30fps.mp4"
      />
      <div className="relative bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 rounded-lg shadow-lg p-6 md:p-10 max-w-2xl w-full z-10">
        <div className="text-center">
          <FaComments className="text-4xl text-[#FFAF45] mx-auto mb-4" />
          {/* <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Let's Discuss Your Project
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get free consultation and let us know your project idea to turn it into an amazing digital product.
          </p>
          <Link to="/contact">
            <button className="bg-[#FFAF45] text-white py-2 px-4 rounded-lg hover:bg-[#e89f3d] transition duration-300 mb-6">
              Talk To Our Experts
            </button>
          </Link> */}
          <h3 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">
            Still You have Doubt Or any Query ?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-justify">
         At TechRhym, we believe in bridging the digital divide by making technology accessible and beneficial for everyone. Whether you're a small business looking to establish a digital presence, a startup aiming for growth, or a community organization wanting to bring tech education to rural areas, our comprehensive services—including web development, app creation, SEO, digital marketing, and virtual tours—are tailored to empower you and foster growth in today's digital age.
</p>

          <Link to="/enquireform">
            <button className="bg-[#FFAF45] text-white py-2 px-4 rounded-lg hover:bg-[#e89f3d] transition duration-300">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscussProject;
