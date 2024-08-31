import React, { useState, useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  galleryContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  categoriesContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  categories: {
    display: 'flex',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
    '& button': {
      border: 'none',
      padding: '10px 20px',
      margin: '0 10px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '16px',
      whiteSpace: 'nowrap',
      transition: 'background-color 0.3s, color 0.3s',
      '&.active': {
        backgroundColor: '#f00',
        color: '#fff',
      },
      '&:not(.active)': {
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid #ddd',
      },
    },
  },
  arrowButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '10px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '&:disabled': {
      color: '#ccc',
      cursor: 'default',
    },
  },
  leftArrow: {
    left: '-40px',
  },
  rightArrow: {
    right: '-40px',
  },
  galleryGrid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  galleryItem: {
    perspective: '1000px',
    '&:hover $flipCardInner': {
      transform: 'rotateY(180deg)',
    },
  },
  flipCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 1s ease-in-out',
    transformStyle: 'preserve-3d',
  },
  flipCardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px',
    },
  },
  flipCardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#173B45',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  virtualTourLink: {
    padding: '10px 20px',
    backgroundColor: '#f00',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#c00',
    },
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContent: {
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  iframe: {
    width: '100%',
    height: '400px',
    border: 'none',
    borderRadius: '10px',
  },
});

const images = [
  {
    src: '/images/hotel.png',
    category: 'Resort',
    title: 'Luxury Resort',
    description: 'Beautiful seaside resort',
    virtualTourLink: 'https://virtual-tour.uudoon.in',
  },
  {
    src: '/images/restaurant.jpg',
    category: 'Restaurant',
    title: 'Gourmet Dining',
    description: 'Fine dining restaurant',
    virtualTourLink: 'https://example.com/virtual-tour',
  },
  {
    src: '/images/hotel.jpg',
    category: 'Hotel',
    title: '5-Star Hotel',
    description: 'Luxurious hotel stay',
    virtualTourLink: 'https://example.com/virtual-tour',
  },
  // Add more images here as needed
];

const Gallery = () => {
  const classes = useStyles();
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(images);
  const [showPopup, setShowPopup] = useState(false);
  const [popupLink, setPopupLink] = useState('');
  const categoriesRef = useRef(null);

  useEffect(() => {
    // Debugging to ensure active category is being set and filteredImages are updated
    console.log('Active Category:', activeCategory);

    if (activeCategory === 'All') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(image => image.category === activeCategory);
      console.log('Filtered Images:', filtered); // Debugging Line
      setFilteredImages(filtered);
    }
  }, [activeCategory]);

  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 200;
      categoriesRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const openPopup = (link) => {
    setPopupLink(link);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupLink('');
  };

  return (
    <div className={classes.galleryContainer}>
      <div className={classes.categoriesContainer}>
        <button
          className={`${classes.arrowButton} ${classes.leftArrow}`}
          onClick={() => scrollCategories('left')}
        >
          ◀
        </button>
        <div className={classes.categories} ref={categoriesRef}>
          {['All', 'Resort', 'Restaurant', 'Hotel', 'Tiles', 'Real Estate', 'Hospital', 'College', 'University'].map(
            (category) => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            )
          )}
        </div>
        <button
          className={`${classes.arrowButton} ${classes.rightArrow}`}
          onClick={() => scrollCategories('right')}
        >
          ▶
        </button>
      </div>

      <div className={classes.galleryGrid}>
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className={classes.galleryItem}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img src={image.src} alt={image.title} />
                </div>
                <div className={classes.flipCardBack}>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <button
                    className={classes.virtualTourLink}
                    onClick={() => openPopup(image.virtualTourLink)}
                  >
                    View Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No images available in this category.</p>
        )}
      </div>

      {showPopup && (
        <div className={classes.popupOverlay}>
          <div className={classes.popupContent}>
            <button className={classes.closeButton} onClick={closePopup}>
              &times;
            </button>
            <iframe
              src={popupLink}
              className={classes.iframe}
              title="Virtual Tour"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
