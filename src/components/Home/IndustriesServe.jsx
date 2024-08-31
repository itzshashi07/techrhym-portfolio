import React, { useState } from 'react';
import { FaShoppingCart, FaGraduationCap, FaUniversity, FaHeartbeat, FaPlane, FaLaptopCode, FaFilm, FaVrCardboard, FaBullhorn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const industries = [
  {
    name: 'Ecommerce Virtual Tours',
    icon: <FaShoppingCart />,
    description: 'Provide an immersive virtual shopping experience for your customers with our Ecommerce virtual tours, allowing them to explore your store from the comfort of their homes.',
    image: 'https://www.bonamisoftware.com/images/tabs5.webp',
    details: 'Additional details about the Ecommerce virtual tours and specific projects.'
  },
  {
    name: 'Education & E-Learning Virtual Tours',
    icon: <FaGraduationCap />,
    description: 'Showcase your educational facilities, classrooms, and learning environments with our specialized virtual tours designed for the education and e-learning sector.',
    image: 'https://www.bonamisoftware.com/images/tabs1.png',
    details: 'Additional details about the Education & E-Learning virtual tours and specific projects.'
  },
  {
    name: 'Banking & Finance Virtual Tours',
    icon: <FaUniversity />,
    description: 'Enhance your banking and financial services with virtual tours that allow clients to explore your facilities and services securely online.',
    image: 'https://www.bonamisoftware.com/images/tabs6.png',
    details: 'Additional details about the Banking & Finance virtual tours and specific projects.'
  },
  {
    name: 'Healthcare Virtual Tours',
    icon: <FaHeartbeat />,
    description: 'Offer virtual tours of your healthcare facilities, helping patients familiarize themselves with your environment before visiting.',
    image: 'https://www.bonamisoftware.com/images/tabs7.png',
    details: 'Additional details about the Healthcare virtual tours and specific projects.'
  },
  {
    name: 'Travel & Tourism Virtual Tours',
    icon: <FaPlane />,
    description: 'Bring destinations to life with our travel and tourism virtual tours, offering an immersive experience that inspires travelers to explore and book.',
    image: 'https://www.bonamisoftware.com/images/tabs2.png',
    details: 'Additional details about the Travel & Tourism virtual tours and specific projects.'
  },
  {
    name: 'ISVs & Software Product Companies Virtual Tours',
    icon: <FaLaptopCode />,
    description: 'Showcase your software products and services with interactive virtual tours that engage and educate your audience effectively.',
    image: 'https://www.bonamisoftware.com/images/tabs4.png',
    details: 'Additional details about the ISVs & Software Product Companies virtual tours and specific projects.'
  },
  {
    name: 'Media & Entertainment Virtual Tours',
    icon: <FaFilm />,
    description: 'Offer an immersive behind-the-scenes experience of your media and entertainment projects with our tailored virtual tours.',
    image: 'https://www.bonamisoftware.com/images/tabs3.png',
    details: 'Additional details about the Media & Entertainment virtual tours and specific projects.'
  },
  {
    name: 'Virtual Tour Services',
    icon: <FaVrCardboard />,
    description: 'Explore our wide range of virtual tour services, designed to meet the needs of various industries and deliver exceptional customer experiences.',
    image: 'https://www.bonamisoftware.com/images/virtual-tour.png',
    details: 'Additional details about the Virtual Tour services and specific projects.'
  },
  {
    name: 'Digital Marketing Virtual Tours',
    icon: <FaBullhorn />,
    description: 'Boost your digital marketing efforts with virtual tours that engage your audience and showcase your brand in an innovative way.',
    image: 'https://www.bonamisoftware.com/images/digital-marketing.png',
    details: 'Additional details about the Digital Marketing virtual tours and specific projects.'
  }
];

const IndustriesServe = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/industries'); 
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Virtual Tour Services by Industry</h1>
        <p className="text-lg">We provide specialized virtual tour services for various industries, helping businesses showcase their environments and engage customers like never before. Explore how we can bring your industry to life.</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/3 space-y-4">
          {industries.map((industry) => (
            <button
              key={industry.name}
              onClick={() => {
                setSelectedIndustry(industry);
                setShowDetails(false);
              }}
              className={`flex items-center p-4 border rounded-lg hover:bg-orange-100 ${selectedIndustry.name === industry.name ? 'border-orange-500' : 'border-gray-300'}`}
            >
              <div className="text-2xl mr-4">{industry.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold">{industry.name}</h3>
              </div>
            </button>
          ))}
        </div>
        <div className="md:w-2/3 p-6">
          <img src={selectedIndustry.image} alt={selectedIndustry.name} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-3xl font-bold mb-2">{selectedIndustry.name}</h2>
          <p className="text-lg mb-4">{selectedIndustry.description}</p>
          <button
            onClick={handleLearnMore}
            className="mt-4 bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServe;
