"use client";

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";
import OptionSelector from "../../(components)/Scouting/OptionSelector";

const DisplayRocks = dynamic(() => import('../../(components)/Classifying/DisplayRock/canvas'), {
  ssr: false,
});

const ClassifyingPage = () => {
  const [rocks, setRocks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem('lastViewedImage');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });
/*
  useEffect(() => {
    localStorage.setItem('lastViewedRock', currentIndex.toString());
  }, [currentIndex]);
*/
  useEffect(() => {
    const fetchRocks = async () => {
      //const cachedRocks = localStorage.getItem("cachedRocks");
      //const rocksData = cachedRocks ? JSON.parse(cachedRocks) : null;
      //const cacheIsValid = rocksData && new Date().getTime() - rocksData.timestamp < 86400000;

      //if (cacheIsValid) {
        //setRocks(rocksData.data);
      //} else {
        try {
           
          const response = await fetch("/api/classifying/rocks");
          if (!response.ok) throw new Error("Failed to fetch rocks");
          const data = await response.json();
          console.log("date", data[0]);
          setRocks(data);
          //localStorage.setItem("cachedRocks", JSON.stringify({ data, timestamp: new Date().getTime() }));
        } catch (error) {
          console.error("Error:", error);
        }
      //}
    };
    fetchRocks();
  }, []);

  const handleSubmit = async (/*selectedOption*/) => {/*
    if (rocks.length > 0 && currentIndex < rocks.length) {
      const currentImageId = rocks[currentIndex].id;
      try {
        const response = await fetch("/api/scouting/rockcount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageId: currentImageId,
            selectedOption: selectedOption,
          }),
        });
        if (!response.ok) throw new Error("Failed to submit the option");
        const data = await response.json();*/
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rocks.length);
     /* } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }*/
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
