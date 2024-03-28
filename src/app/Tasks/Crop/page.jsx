'use client'

import React, { useEffect, useState } from 'react';
import CropImage from '../../(components)/Crop/ImageQuad';

const CropExample = () => {
    // State hook for storing the array of images fetched from the API
    const [images, setImages] = useState([]);

    // State hook for tracking the current index of the displayed image in the images array
    const [currentIndex, setCurrentIndex] = useState(0);

    const crop =  {
        x: 375, 
        y: 250, 
        width: 375, 
        height: 250 
    }

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

    return (
        <>
        <h1>Cropping Image Sample</h1>
        <div style={{ flex: 1 }}>
          {images.length > 0 && <CropImage image={images[currentIndex]} crop={crop}/>}
        </div>
        </>
    );
};

export default CropExample;