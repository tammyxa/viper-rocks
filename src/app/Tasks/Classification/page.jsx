'use client';

import React, { useEffect, useState } from 'react';
import OptionSelector from '../../(components)/Classification/OptionSelector';
import dynamic from 'next/dynamic';


const SampleImages = dynamic(() => import('../../(components)/Classification/SampleImages'), {
  ssr: false,
});

const DisplayImage = dynamic(() => import('../../(components)/Scouting/DisplayImage'), {
  ssr: false,
});

const ClassificationPage = () => {
  // State hook for storing the array of images fetched from the API
  const [images, setImages] = useState([]);

  // State hook for tracking the current index of the displayed image in the images array
  const [currentIndex, setCurrentIndex] = useState(0);

  // State hook for managing the visibility of the Sample Images
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);

  // Fetches images from the '/api/images' endpoint when the page mounts
  useEffect(() => {
    const fetchImages = async () => {
      // Attempt to load images from Local Storage first
      const cachedImages = localStorage.getItem('cachedImages');
      const imagesData = cachedImages ? JSON.parse(cachedImages) : null;

      // Check if cache exists and is valid (e.g., less than 24 hours old)
      const cacheIsValid = imagesData && new Date().getTime() - imagesData.timestamp < 86400000; // 24hours*60*60*1000

      if (cacheIsValid) {
        // Use cached images
        setImages(imagesData.data);
      } else {
        // Fetch from API as cache is missing or outdated
        try {
          const response = await fetch('/api/images');
          if (!response.ok) throw new Error('Failed to fetch images');
          const data = await response.json();

          // Update state with fetched images
          setImages(data);

          // Cache the fetched images along with a timestamp
          localStorage.setItem('cachedImages', JSON.stringify({ data, timestamp: new Date().getTime() }));
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchImages();
  }, []);

  // Function to handle submission of a selected option for the current image to the UserMark table
  const handleSubmit = async (selectedOption) => {
    // Ensure we have images and a current index to work with
    if (images.length > 0 && currentIndex < images.length) {
      // Access the current image's id
      const currentImageId = images[currentIndex].id; 
    }
  };

  // Renders the ClassificationPage component.
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        {images.length > 0 && <DisplayImage image={images[currentIndex]} />}
      </div>
      <div style={{ flex: 1 }}>
        <p>
          <h4>Can you identify the shape that best captures the outline of the highlighted rock?</h4>
          <button style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setIsTutorialVisible(true)}> View Samples </button>
        </p>
        <OptionSelector onSubmit={handleSubmit} />
      </div>
      {/* Render the tutorial modal if isVisible state is true */}
      <SampleImages isVisible={isTutorialVisible} onClose={() => setIsTutorialVisible(false)} />
    </div>
  );
};

export default ClassificationPage;
