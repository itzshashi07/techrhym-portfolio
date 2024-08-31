import React, { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const LatestVR = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupUrl, setPopupUrl] = useState('');
  const carouselRef = useRef(null);

  const tours = [
    { title: "Grandview Resort", imageSrc: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://grandviewresort.handsonweb.in/" },
    { title: "Ocean Breeze Resort", imageSrc: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://grandviewresort.handsonweb.in/" },
    { title: "Sunny Haven Resort", imageSrc: "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://grandviewresort.handsonweb.in/" },
    { title: "Mountain Retreat Resort", imageSrc: "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://grandviewresort.handsonweb.in/" },
    { title: "Tropical Paradise Resort", imageSrc: "https://images.pexels.com/photos/13652239/pexels-photo-13652239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", url: "https://grandviewresort.handsonweb.in/" },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      const intervalId = setInterval(() => {
        if (!isPaused && carouselRef.current) {
          carouselRef.current.scrollLeft += 1;
        }
      }, 30);

      return () => clearInterval(intervalId);
    }
  }, [isPaused]);

  const handleExploreClick = (url) => {
    setPopupUrl(url);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Our Projects </h2>
      <div className="relative w-full">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-hidden space-x-4 w-full"
          style={{ scrollBehavior: 'smooth' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {tours.concat(tours).map((tour, index) => (
            <div
              key={index}
              className="w-2/3 sm:w-1/3 min-w-[66%] sm:min-w-[33%] p-4 flex-shrink-0"
            >
              <img
                src={tour.imageSrc}
                alt={tour.title}
                className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg"
              />
              <p className="text-center mt-2 text-lg sm:text-xl font-semibold">{tour.title}</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button
                  onClick={() => handleExploreClick(tour.url)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </button>
                {/* <button
                  onClick={() => openInNewTab(tour.url)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Open in New Tab
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl p-4">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-semibold rounded-lg px-4 py-2 bg-gray-200 hover:bg-gray-300"
            >
              Close
            </button>
            <iframe
              src={popupUrl}
              title="Virtual Tour"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg"
              frameBorder="0"
              allowFullScreen
              onError={() => console.error('Failed to load the virtual tour.')}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestVR;
