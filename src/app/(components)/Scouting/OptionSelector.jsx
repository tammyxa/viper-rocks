import React, { useState } from "react";

const OptionSelector = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { text: "<100", value: "100" },
    { text: "100≥x<200", value: "200" },
    { text: "200≤x<300", value: "300" },
    { text: "300≤x<400", value: "400" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedOption);
    setSelectedOption(""); // Reset selection after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            margin: "10px",
            padding: "10px", // Added padding here
            borderRadius: "10px",
            background: selectedOption === option.value ? "#c0c0c0" : "#e0e0e0",
            cursor: "pointer",
          }}
          onClick={() => setSelectedOption(option.value)}
        >
          {option.text}
        </div>
      ))}
      <button
        type="submit"
        style={{
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
          border: "none",
          textDecoration: "none",
        }}
      >
        Submit
      </button>
      <button
        style={{
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
          border: "none",
          textDecoration: "none",
        }}
        onClick={() => {
          fetch("/api/analysis/scouting")
            .then((response) => response.json())
            .then((data) => {
              console.log("GET request data:", data); // Log the data from GET request

              // Now that we have the data from the GET request, we make the POST request to the same endpoint
              return fetch("/api/analysis/scouting", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                // Assuming 'data' from the GET request is the payload needed for the POST request
                body: JSON.stringify({ acceptedValues: data }),
              });
            })
            .then((postResponse) => postResponse.json())
            .then((postData) => {
              console.log("POST request response data:", postData); // Log the data from POST request

              // After the POST request to /api/analysis/scouting, make a POST request to /api/updateUserReliability
              return fetch("/api/analysis/updateUserReliability", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },

                body: JSON.stringify({
                  acceptedRockCounts: postData.acceptedValues,
                }),
              });
            })

            .then((updateResponse) => updateResponse.json())
            .then((updateData) => {
              console.log(
                "POST request to /api/updateUserReliability response data:",
                updateData
              ); // Log the data from the second POST request
            })

            .catch((error) => {
              console.error("Error during the request chain:", error);
            });
        }}
      >
        Aggregate
      </button>
    </form>
  );
};

export default OptionSelector;
