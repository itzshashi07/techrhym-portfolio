import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
    <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
      404 - Page Not Found
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link to="/" className="px-6 py-3 text-lg font-semibold bg-[#FFAF45] text-white rounded-lg">
      Go Home
    </Link>
  </div>
);

export default NotFound;
