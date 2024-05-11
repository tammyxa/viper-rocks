'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../(components)/LoadingSpinner/LoadingSpinner";
import dynamic from 'next/dynamic';
import { signIn, useSession } from "next-auth/react";

const DisplayQuadrant = dynamic(() => import('../../(components)/Sizing/DisplayQuadrant/canvas'), { ssr: false });

const SizingPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    // Redirect if not authenticated
    if (status === "unauthenticated") {
      signIn('auth0', { callbackUrl: '/Tasks/Sizing' });
    }
  }, [status]);

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
  
  const [labels, setLabels] = useState(() => {
    // Initialize labels from localStorage
    return JSON.parse(localStorage.getItem('savedLabels')) || [];
  });
  
  const [isLoading, setIsLoading] = useState(true); // Combined loading state

  useEffect(() => {
    localStorage.setItem('lastViewedQuadrant', currentIndex.toString());
    localStorage.setItem('savedLabels', JSON.stringify(labels)); // Save labels to localStorage
  }, [currentIndex, labels]);

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
      localStorage.removeItem('savedLabels'); // Clear saved labels from localStorage on submit
      setLabels([]);
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
     <div style={{ paddingLeft: "25px", paddingTop:"30px", paddingBottom:"10px"}}>
        <Link href="/Explore">Back</Link>
      </div>

      <h1 style={{ paddingLeft: "20px"}}>Sizing</h1>
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
