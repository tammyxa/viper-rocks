"use client";

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

const DisplayRocks = dynamic(() => import('../../(components)/Classifying/DisplayRock/canvas'), {
  ssr: false,
});

const ClassifyingPage = () => {
    const { data: session } = useSession();

    // if no session, redirect to api/auth/signin
    if (!session) {
      redirect('/api/auth/signin?callbackUrl=/Tasks/Classifying');
    }

  const [rocks, setRocks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('lastViewedImage');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, rocks.length]); // Include dependencies that are used inside the event handler

  useEffect(() => {
    const fetchRocks = async () => {
      // Add your fetch logic here
      try {
        const response = await fetch("/api/classifying/rocks");
        if (!response.ok) throw new Error("Failed to fetch rocks");
        const data = await response.json();
        console.log("date", data[0]);
        setRocks(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    fetchRocks();
  }, []);

  const handleSubmit = async () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rocks.length);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div style={{ flex: 1 }}>
          {rocks.length > 0 && <DisplayRocks rock={rocks[currentIndex]} />}
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ClassifyingPage;
