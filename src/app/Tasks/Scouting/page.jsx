"use client";

import React, { useEffect, useState } from "react";
import DisplayImage from "../../(components)/Scouting/DisplayImage";
import OptionSelector from "../../(components)/Scouting/OptionSelector";

const ScoutingPage = () => {
  // State hook for storing the array of images fetched from the API
  const [images, setImages] = useState([]);

  // State hook for tracking the current index of the displayed image in the images array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetches images from the '/api/images' endpoint when the page mounts
  useEffect(() => {
    const fetchImages = async () => {
      // Attempt to load images from Local Storage first
      const cachedImages = localStorage.getItem("cachedImages");
      const imagesData = cachedImages ? JSON.parse(cachedImages) : null;

      // Check if cache exists and is valid (e.g., less than 24 hours old)
      const cacheIsValid =
        imagesData && new Date().getTime() - imagesData.timestamp < 86400000; // 24hours*60*60*1000

      if (cacheIsValid) {
        // Use cached images
        setImages(imagesData.data);
      } else {
        // Fetch from API as cache is missing or outdated
        try {
          const response = await fetch("/api/images");
          if (!response.ok) throw new Error("Failed to fetch images");
          const data = await response.json();

          // Update state with fetched images
          setImages(data);

          // Cache the fetched images along with a timestamp
          localStorage.setItem(
            "cachedImages",
            JSON.stringify({ data, timestamp: new Date().getTime() })
          );
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchImages();
  }, []);

  // Function to handle submission of a selected option for the current image to the UserMark table
  const handleSubmit = async (selectedOption) => {
    // Ensure we have images and a current index to work with
    if (images.length > 0 && currentIndex < images.length) {
      // Access the current image's id
      const currentImageId = images[currentIndex].id;

      try {
        // Attempts to submit the selected option to the '/api/scouting/rockcount' endpoint via POST request.
        const response = await fetch("/api/scouting/rockcount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageId: currentImageId,
            selectedOption: parseInt(selectedOption, 10),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit the option");
        }

        // Parses the response data as JSON.
        const data = await response.json();

        // Updates the currentIndex state to display the next image upon successful submission, cycling back to the first image if necessary.
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  // Renders the ScoutingPage component.
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          {images.length > 0 && <DisplayImage image={images[currentIndex]} />}
        </div>
        <div style={{ flex: 1 }}>
          <OptionSelector onSubmit={handleSubmit} />
        </div>

        <button
  onClick={() => {
    fetch("/api/analysis/scouting")
      .then((response) => response.json())
      .then((data) => {
        console.log("GET request data:", data); // Log the data from GET request

        // Now that we have the data from the GET request, we make the POST request
        fetch("/api/analysis/scouting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Assuming 'data' from the GET request is the payload needed for the POST request
          // Adjust the payload as necessary based on your API's expected request body structure
          body: JSON.stringify({ acceptedValues: data }),
        })
          .then((postResponse) => postResponse.json())
          .then((postData) => {
            console.log("POST request response data:", postData); // Log the data from POST request
          })
          .catch((postError) => {
            console.error("Error performing the POST request:", postError);
          });
      })
      .catch((getError) => {
        console.error("Error fetching the GET request data:", getError);
      });
  }}
>
  Aggregate
</button>
      </div>
      <div></div>
    </>
  );
};

export default ScoutingPage;
