'use client';

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const DisplayQuadrant = dynamic(() => import('../../(components)/Sizing/DisplayQuadrant/canvas'), {
  ssr: false,
});

const SizingPage = () => {
  const [quadrants, setQuadrants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('lastViewedQuadrant');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });
  
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    localStorage.setItem('lastViewedQuadrant', currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    const fetchQuadrants = async () => {
      const response = await fetch("/api/sizing/rockquadrants");
      const data = await response.json();
      setQuadrants(data);
    };
    fetchQuadrants();
  }, []);

  const handleSubmit = async () => {
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
  };

  const handleNextQuadrant = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % quadrants.length);
  };

  return (
    <>
      <h1>Cropping Rock Quadrant Sample</h1>
      <div>
        {quadrants.length > 0 && (
          <DisplayQuadrant
            key={`${quadrants[currentIndex].image.imageURL}-${quadrants[currentIndex].id}`}
            quadrant={quadrants[currentIndex]}
            labels={labels}
            setLabels={setLabels}
          />
        )}
        <button onClick={handleSubmit}>Submit</button>
        
      </div>
    </>
  );
};

export default SizingPage;
