"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import dynamic from 'next/dynamic';
const DisplayMarks = dynamic(() => import('../../../(components)/Admin/Sizing/canvas'), {
  ssr: false,
});

const AdminSizing = () => {
  const [marks, setmarks] = useState([]);

  useEffect(() => {
      const fetchmarks = async () => {
        // Add your fetch logic here
        try {
          const response = await fetch(`/api/users/Admin/Sizing`);
          if (!response.ok) throw new Error("Failed to fetch marks");
          const data = await response.json();
          console.log("data", data[0]);
          setmarks(data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      
      fetchmarks();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div style={{ flex: 1 }}>
          <DisplayMarks userGeometry={marks}/>
          {/* Display the fetched data */}
          {/* {marks.map(mark => (
            <div key={mark.id}>
              <ul>
                <li>ID: {mark.id}</li>
                <li>userId: {mark.userId}</li>
                <li>imageId: {mark.imageId}</li>
                <li>drawing: {mark.drawing}</li>
                <li>imageURL: {mark.imageURL}</li>
              </ul>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default AdminSizing;