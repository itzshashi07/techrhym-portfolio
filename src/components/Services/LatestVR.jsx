import React, { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const LatestVR = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupUrl, setPopupUrl] = useState('');
  const carouselRef = useRef(null);

  const tours = [
    { title: "Grandview Resort", imageSrc: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://grandviewresort.handsonweb.in/" },
    { title: "Virtual Tour", imageSrc: "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=400", url: "https://brandsumo-virtual-tour.vercel.app/" },
    { title: "Darklight Sample", imageSrc: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=400", url: "https://darklight-nine.vercel.app/" },
    { title: "VManshi Project 1", imageSrc: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://vmanshifashion.in/" },
    { title: "VManshi Project 2", imageSrc: "https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=400", url: "https://vmanshifashion.com/" },
    { title: "BrandSumo", imageSrc: "https://images.pexels.com/photos/7773735/pexels-photo-7773735.jpeg?auto=compress&cs=tinysrgb&w=400", url: "https://nextechlab.vercel.app/" },
    { title: "Impetus", imageSrc: "https://dentalweb-beta.vercel.app/aboutbanner.jpg", url: "https://impetus.thebrandsumo.com/" },
    { title: "Prince Glass", imageSrc: "https://images.pexels.com/photos/27101948/pexels-photo-27101948/free-photo-of-modern-buildings-in-baku.jpeg?auto=compress&cs=tinysrgb&w=400", url: "https://princetuffglass.in/" },
    { title: "Marble Tiles Wala", imageSrc: "https://images.pexels.com/photos/27023291/pexels-photo-27023291/free-photo-of-a-cat-standing-on-a-marble-countertop.jpeg?auto=compress&cs=tinysrgb&w=400", url: "#" },
    // { title: "Techrhym Blog", imageSrc: "https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&w=600", url: "https://techrhym.com/" },
    { title: "Techrhym Portfolio", imageSrc: "https://techrhym.com/wp-content/uploads/2024/08/cropped-logotechrhym.png", url: "https://techrhym-portfolio.vercel.app/" },
    { title: "Raj Homes", imageSrc: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1725351723~exp=1725355323~hmac=c94a2da7f62bfe6d43e594609665f9cbd42be59222a94cce2d3d4399147123a6&w=740", url: "https://www.google.com/" },
    { title: "Timesmantra", imageSrc: "https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=400", url: "https://timesmantra.com/" }
  ];

  useEffect(() => {
    if (carouselRef.current) {
      const intervalId = setInterval(() => {
        if (!isPaused && carouselRef.current) {
          carouselRef.current.scrollLeft += 2; // Increase this value to make the scroll faster
        }
      }, 20); // Decrease this value to make the interval faster

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

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Our Projects</h2>
      <div className="relative w-full">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-800 p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4 w-full"
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
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestVR;
