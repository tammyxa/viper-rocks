'use client';

import React, { useEffect, useState } from 'react';
import CropImage from '../../(components)/Crop/ImageQuad';

const CropExample = () => {
    // State hook for storing the array of rockQuadrants fetched from the API or cache
    const [rockQuadrants, setRockQuadrants] = useState([]);

    // State hook for tracking the current index of the displayed quadrant in the rockQuadrants array
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetches rockQuadrants from either the cache or the '/api/sizing/rockquadrants' endpoint when the page mounts
    useEffect(() => {
        const fetchRockQuadrants = async () => {
            // Attempt to load rockQuadrants from Local Storage first
            const cachedRockQuadrants = localStorage.getItem('cachedRockQuadrants');
            const quadrantsData = cachedRockQuadrants ? JSON.parse(cachedRockQuadrants) : null;

            // Check if cache exists and is valid (e.g., less than 24 hours old)
            const cacheIsValid = quadrantsData && new Date().getTime() - quadrantsData.timestamp < 86400000; // 24 hours in milliseconds

            if (cacheIsValid) {
                // Use cached rockQuadrants
                setRockQuadrants(quadrantsData.data);
            } else {
                // Fetch from API as cache is missing or outdated
                try {
                    const response = await fetch('/api/sizing/rockquadrants');
                    if (!response.ok) throw new Error('Failed to fetch rock quadrants');
                    const data = await response.json();

                    // Update state with fetched rockQuadrants
                    setRockQuadrants(data);

                    // Cache the fetched rockQuadrants along with a timestamp
                    localStorage.setItem('cachedRockQuadrants', JSON.stringify({ data, timestamp: new Date().getTime() }));
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        };

        fetchRockQuadrants();
    }, []);

    // Conditional rendering to ensure rockQuadrants[currentIndex] is defined before accessing its properties
    const crop = rockQuadrants.length > 0 ? {
        x: rockQuadrants[currentIndex].x,
        y: rockQuadrants[currentIndex].y,
        width: rockQuadrants[currentIndex].width,
        height: rockQuadrants[currentIndex].height,
    } : null;

    return (
        <>
            <h1>Cropping Rock Quadrant Sample</h1>
            <div style={{ flex: 1 }}>
                {/* Ensure crop and image are only attempted to be rendered when crop is not null */}
                {crop && <CropImage image={rockQuadrants[currentIndex]} crop={crop} />}
            </div>
        </>
    );
};

export default CropExample;
