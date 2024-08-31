import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTwitter, FaLinkedinIn, FaDribbble, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';
import logo from '/images/logonew.png';
const Header = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <style>
                {`
                    .animated-text {
                        font-family: 'Poppins', sans-serif;
                        background: linear-gradient(to right, #FFAF45, #000, #FFAF45);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-size: 200% auto;
                        animation: shine 3s linear infinite;
                        text-transform: uppercase;
                        color: #FFD28D;
                    }

                    @keyframes shine {
                        to {
                            background-position: 200% center;
                        }
                    }

                    .tagline {
                        color: #000;
                        font-family: 'Poppins', sans-serif;
                    }
                `}
            </style>
            <header className="sticky top-0 z-50 bg-gray-200 dark:bg-gray-800 shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-8">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img src="https://techrhym.com/wp-content/uploads/2024/08/cropped-logotechrhym.png" alt="Logo" className="h-20 w-40 p-2" />
                    </Link>

                    {/* Centered Navigation Links - Hidden on small screens */}
                    <nav className="hidden md:flex flex-grow items-center justify-center">
                        <div className="flex flex-col items-center px-6 py-2">
                            <span className="animated-text text-lg lg:text-2xl font-bold text-center">
                                Welcome to Techrhym
                            </span>
                            <span className="tagline text-sm lg:text-base font-semibold mt-1">
                            Empowering Insights, Fueling Curiosity
                            </span>
                        </div>
                    </nav>

                    {/* Right Social Links - Hidden on small screens */}
                    <div className="hidden md:flex items-center">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#FFAF45]">
                            <FaLinkedinIn className="text-blue-600 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#FFAF45]">
                            <FaTwitter className="text-blue-400 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#FFAF45]">
                            <FaInstagram className="text-pink-500 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#FFAF45]">
                            <FaWhatsapp className="text-green-500 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-black dark:text-white" aria-label="Toggle menu">
                            {isOpen ? <FaTimes size="24px" /> : <FaBars size="24px" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className={`fixed inset-0 bg-[#fffbf2] dark:bg-[#2b363a] bg-opacity-95 text-black dark:text-white flex flex-col items-center justify-center space-y-6 p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-black dark:text-white z-50" aria-label="Close menu">
                        <FaTimes size="24px" />
                    </button>
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-20 w-40 p-2" />
                    </Link>
                    <span className="animated-text text-lg lg:text-2xl font-bold text-center">
                        Welcome to Techrhym
                    </span>
                    <span className="tagline text-sm lg:text-base font-semibold mt-1">
                    Empowering Insights, Fueling Curiosity
                    </span>
                    <div className="flex flex-col items-center space-y-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFAF45]">
                            <FaLinkedinIn className="text-blue-600 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFAF45]">
                            <FaTwitter className="text-blue-400 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFAF45]">
                            <FaInstagram className="text-pink-500 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFAF45]">
                            <FaWhatsapp className="text-green-500 dark:text-white bg-white dark:bg-[#2b363a] rounded-full p-2" size="32px" />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
