import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Social = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="relative">
                {/* Main Button */}
                <button 
                    onClick={toggleOptions}
                    className="flex items-center bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out dark:bg-green-600 dark:hover:bg-green-500">
                    <FaWhatsapp size={24} className="mr-3" />
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-100 dark:text-gray-200">Need Help?</span>
                        <span className="text-base font-bold text-white dark:text-gray-50">Chat with us</span>
                    </div>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute bottom-full right-0 mb-2 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg  transition-all duration-300 ease-in-out transform dark:text-gray-200">
                        <ul>
                            <li className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
                                <FaWhatsapp size={20} className="text-green-500 mr-2" />
                                <a href="https://wa.me/+918078633912" target="_blank" rel="noopener noreferrer">
                                    Chat with HR
                                </a>
                            </li>
                            <li className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
                                <FaWhatsapp size={20} className="text-green-500 mr-2" />
                                <a href="https://wa.me/+918078633912" target="_blank" rel="noopener noreferrer">
                                    Chat Support
                                </a>
                            </li>
                        </ul>
                        {/* Close Button */}
                        <button
                            onClick={toggleOptions}
                            className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            <IoClose size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Social;
