import React from 'react';

const Author = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3">
          <img
            src="/images/harsh.jpg" // Replace with actual image path
            alt="Harsh Upadhyay"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 mt-8 md:mt-0 md:ml-12">
          <h2 className="text-4xl font-bold text-[#FFAF45]">Harsh Upadhyay</h2>
          <h3 className="text-2xl font-semibold text-black dark:text-white mt-2">
            CEO & Founder, BrandSumo
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
            Harsh Upadhyay, the visionary behind BrandSumo, has been a driving force in revolutionizing the way we experience the world through virtual tours. With a rich background in digital innovation and a passion for creating immersive experiences, Harsh has spearheaded projects that allow users to explore and engage with spaces in ways previously unimaginable.
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
            Under his leadership, BrandSumo has grown to become a leader in virtual tour services, helping businesses, educational institutions, and real estate developers showcase their environments to a global audience. Harsh’s dedication to pushing the boundaries of technology ensures that every virtual tour is not just a visual experience but an interactive journey that resonates with users.
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
            Harsh's commitment to excellence has earned BrandSumo recognition across the industry, making it a trusted partner for clients worldwide. His vision continues to shape the future of virtual experiences, ensuring that BrandSumo remains at the forefront of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
