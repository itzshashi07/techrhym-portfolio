import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useDarkMode from '../../hooks/useDarkMode';

const imagePaths = [
  '/images/gallary2.avif',
  '/images/gallary3.avif',
  '/images/gallary4.avif',
  '/images/gallary5.avif',
  '/images/gallary6.avif',
  '/images/gallary7.avif',
  '/images/gallary8.avif',
  '/images/gallary9.avif',
  '/images/gallary10.avif',
  '/images/gallary11.avif',
  '/images/gallary9.avif',
  '/images/gallary8.avif',
  '/images/gallary2.avif',
];

const videoPath = '/videos/sample-video.mp4'; // Adjust video path accordingly

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FFAF45;
    --font-family: 'Bodoni', serif;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
  }

  .light {
    background-color: white;
    color: black;
  }

  .dark {
    background-color: black;
    color: white;
  }
`;

const OurProductsContainer = styled.div`
  text-align: center;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
`;

const Heading = styled.h2`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 2.5em; /* Adjust as needed to match the desired appearance */
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  justify-items: center;
`;

const GalleryImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 2px solid var(--primary-color);
`;

const GalleryVideo = styled.video`
  max-width: 100%;
  height: auto;
  border: 2px solid var(--primary-color);
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid var(--primary-color);
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  margin: auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const OurProducts = () => {
  const [displayedImages, setDisplayedImages] = useState(imagePaths.slice(0, 6));
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [colorTheme] = useDarkMode();

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedImages(shuffleArray(imagePaths).slice(0, 6));
      setIsImageLoading(true); // Set loading to true before loading new images
    }, 4000); // Change images every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = () => {
    setIsImageLoading(false); // Set loading to false when images load
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false); // Set loading to false when video loads
  };

  return (
    <>
      <GlobalStyle />
      <OurProductsContainer className={colorTheme === 'dark' ? 'light' : 'dark'}>
        <Heading>We Have Some Wonderful Projects</Heading>
        <MediaGrid>
          {displayedImages.map((imagePath, index) => (
            <div key={index}>
              {isImageLoading && <Loader />}
              <GalleryImage
                src={imagePath}
                alt={`Gallery ${index}`}
                onLoad={handleImageLoad}
                style={{ display: isImageLoading ? 'none' : 'block' }}
              />
            </div>
          ))}
          <div>
            {isVideoLoading && <Loader />}
            <GalleryVideo
              src={videoPath}
              autoPlay
              loop
              muted
              onLoadedData={handleVideoLoad}
              style={{ display: isVideoLoading ? 'none' : 'block' }}
            />
          </div>
        </MediaGrid>
      </OurProductsContainer>
    </>
  );
};

export default OurProducts;
