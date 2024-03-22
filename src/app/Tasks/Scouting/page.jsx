'use client';

import React, { useEffect, useState } from 'react';
import DisplayImage from '../../(components)/Scouting/DisplayImage'; 
import OptionSelector from '../../(components)/Scouting/OptionSelector';


const ScoutingPage = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch('/api/images');
          if (!response.ok) throw new Error('Failed to fetch images');
          const data = await response.json();
          setImages(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchImages();
    }, []);
  
    const handleSubmit = async (selectedOption) => {
      // Ensure we have images and a current index to work with
      if (images.length > 0 && currentIndex < images.length) {
        const currentImageId = images[currentIndex].id; // Access the current image's id

        console.log(currentImageId, selectedOption);
  
        try {
          const response = await fetch('/api/scouting/rockcount', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              imageId: currentImageId, // Use the current image's ID here
              selectedOption: selectedOption,
            }),
          });
  
          if (!response.ok) {
            throw new Error('Failed to submit the option');
          }
  
          const data = await response.json();
          console.log("Response from server:", data);
  
          // Advance to the next image after successful submission
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ flex: 1 }}>
          {images.length > 0 && <DisplayImage image={images[currentIndex]} />}
        </div>
        <div style={{ flex: 1 }}>
          <OptionSelector onSubmit={handleSubmit} />
        </div>
      </div>
    );
  };
  
  export default ScoutingPage;
  