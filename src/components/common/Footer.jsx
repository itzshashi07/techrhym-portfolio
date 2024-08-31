import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Maps from '../Maps/Maps';

const Footer = () => (
  <footer className="bg-white text-gray-700 border-t border-gray-200">
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Logo and Company Info */}
      <div className="flex flex-col space-y-4">
        <Link to="/">
          <img src="https://techrhym.com/wp-content/uploads/2024/08/cropped-logotechrhym.png" alt="TechRhym Logo" className="h-12" />
        </Link>
        <p className="text-sm">
          At TechRhym, we empower communities by making technology accessible and affordable through innovative solutions in web and app development, SEO, digital marketing, and virtual tours.
        </p>
        <p className="text-sm"><strong>Email:</strong> <a href="mailto:info@techrhym.com" className="text-[#FFAF45]">info@techrhym.com</a></p>
        <p className="text-sm"><strong>Sales:</strong> +91-8078633912</p>
        <p className="text-sm"><strong>Support:</strong> +91-8078633912</p>
      </div>

      {/* Quick Links
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-bold text-[#FFAF45] mb-2">Quick Links</h2>
        <ul className="space-y-1">
          <li><Link to="/services" className="hover:text-[#FFAF45] transition-colors duration-300">Our Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-[#FFAF45] transition-colors duration-300">Portfolio</Link></li>
          <li><Link to="/about" className="hover:text-[#FFAF45] transition-colors duration-300">About Us</Link></li>
          <li><Link to="/careers" className="hover:text-[#FFAF45] transition-colors duration-300">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-[#FFAF45] transition-colors duration-300">Contact Us</Link></li>
        </ul>
      </div> */}

      {/* Social Media Links */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-bold text-[#FFAF45] mb-2">Connect With Us</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FFAF45] transition-colors duration-300">
            <FaFacebook size="24" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FFAF45] transition-colors duration-300">
            <FaTwitter size="24" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FFAF45] transition-colors duration-300">
            <FaInstagram size="24" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FFAF45] transition-colors duration-300">
            <FaLinkedin size="24" />
          </a>
        </div>
      </div>
    </div>

    {/* Map Section */}
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-64">
      <Maps />
    </div>

    {/* Footer Bottom */}
    <div className="text-center py-4 border-t border-gray-200 mt-4 text-sm">
      <p>&copy; {new Date().getFullYear()} TechRhym. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
