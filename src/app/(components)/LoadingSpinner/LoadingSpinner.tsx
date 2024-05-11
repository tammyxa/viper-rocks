// LoadingSpinner.tsx
import React from "react";
import "./LoadingSpinner.css"; // Import CSS file for styling

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
