"use client";

import React, { useEffect, useState } from "react";
//import DisplayQuadrant from '../../(components)/Sizing/DisplayQuadrant';
import dynamic from 'next/dynamic';

const DisplayQuadrant = dynamic(() => import('../../(components)/Sizing/DisplayQuadrant/canvas'), {
  ssr: false,
});




const SizingPage = () => {
  // State hook for storing the array of quadrants fetched from the API
  const [quadrants, setQuadrants] = useState([]);

  // Retrieve the currentIndex from localStorage or default to 0 if not found
   const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('lastViewedQuadrant');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('lastViewedQuadrant', currentIndex.toString());
  }, [currentIndex]);


  useEffect(() => {
    const fetchQuadrants = async () => {
      
      // Attempt to load qudrants from Local Storage first
      const cachedQuadrants = localStorage.getItem("cachedQuadrants");
      const quadrantsData = cachedQuadrants ? JSON.parse(cachedQuadrants) : null;

      // Check if cache exists and is valid (e.g., less than 24 hours old)
      const cacheIsValid = quadrantsData && new Date().getTime() - quadrantsData.timestamp < 86400000; // 24hours*60*60*1000

      if (cacheIsValid) {
        // Use cached quadrants
        setQuadrants(quadrantsData.data);
      } else { 
        // Fetch from API as cache is missing or outdated
        try {
           
          const response = await fetch("/api/sizing/rockquadrants");
          if (!response.ok) throw new Error("Failed to fetch quadrants");
          const data = await response.json();
         console.log(data, "data");
          // Update state with fetched quadrants
          setQuadrants(data);
        
          // Cache the fetched quadrants along with a timestamp
          localStorage.setItem(
            "cachedQuadrants",
            JSON.stringify({ data, timestamp: new Date().getTime() })
          ); 
          
        } catch (error) {
          console.error("Error:", error);
        }
     }
    };
    
    fetchQuadrants();
  }, []);


  const handleNextQuadrant = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % quadrants.length); // Ensures cycling back to 0 if at the end
  };

console.log(currentIndex, "currentIndex");

return (

  <>
  <h1>Cropping Rock Quadrant Sample</h1>
  <div>
    {/* Your existing code to display the quadrant */}
    {quadrants.length > 0 && (
      <div>
        {/* Assuming Canvas is the component displaying the quadrant */}
        <DisplayQuadrant key={`${quadrants[currentIndex].image.imageURL}-${quadrants[currentIndex].id}`} quadrant={quadrants[currentIndex]} />
        <button onClick={handleNextQuadrant}>Submit</button> {/* The new submit button */}
      </div>
    )}
  </div>
</>
  );
};

export default SizingPage;


/*
 {quadrants.length > 0 && quadrants[currentIndex] ? (
  <DisplayQuadrant quadrant={quadrants[currentIndex]} />
) : (
  <div>Loading or no data available</div>
)}
*/