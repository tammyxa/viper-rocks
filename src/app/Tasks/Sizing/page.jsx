'use client';

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import dynamic from 'next/dynamic';

const DisplayQuadrant = dynamic(() => import('../../(components)/Sizing/DisplayQuadrant/canvas'), {
  ssr: false,
});

const SizingPage = () => {
  const [quadrants, setQuadrants] = useState([]);
  
  // Retrieve the currentIndex from localStorage or default to 0 if not found
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (typeof window !== 'undefined'){
      const savedIndex = localStorage.getItem('lastViewedQuadrant');
      return savedIndex ? parseInt(savedIndex, 10) : 0;
    } else {
      return 0;
    }
  });
  
  const [labels, setLabels] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Combined loading state

  useEffect(() => {
    if (typeof window !== 'undefined'){
      localStorage.setItem('lastViewedQuadrant', currentIndex.toString());
    }
  }, [currentIndex]);
  
  useEffect(() => {
    const fetchQuadrants = async () => {
      setIsLoading(true); // Set loading state to true
      const response = await fetch("/api/sizing/rockquadrants");
      const data = await response.json();
      setQuadrants(data);
      setIsLoading(false); // Set loading state to false after data is fetched
    };
    fetchQuadrants();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading state to true
    const geoData = labels.map(label => ({
      type: 'Polygon',
      coordinates: [label.map(point => [point.x, point.y])]
    }));
    console.log('Submitting...', geoData, quadrants[currentIndex]);
    const response = await fetch('/api/sizing/geometry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        geometries: geoData,
        quadrant: quadrants[currentIndex],
      })
    });
    if (response.ok) {
      console.log('Submission successful');
      setLabels([]);  // Clear labels on successful submission
      handleNextQuadrant();
    } else {
      console.error('Submission failed');
    }
    setIsLoading(false); // Set loading state to false after submission
  };

  const handleNextQuadrant = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % quadrants.length);
  };

  return (
    <>
      <h1>Cropping Rock Quadrant Sample</h1>
      <div style={{ margin: '20px' }}> {/* Adjust margin size as needed */}
        {isLoading ? (
          <LoadingSpinner /> 
        ) : (
          quadrants.length > 0 && (
            <DisplayQuadrant
              key={`${quadrants[currentIndex].image.imageURL}-${quadrants[currentIndex].id}`}
              quadrant={quadrants[currentIndex]}
              labels={labels}
              setLabels={setLabels}
            />
          )
        )}
        {!isLoading && (
                <button style={{ margin: '10px', padding: '10px', borderRadius: '10px', background: '#007bff', color: '#fff', cursor: 'pointer', border: 'none', textDecoration: 'none', width: '120px' }} onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </>
  );
  
};

export default SizingPage;
