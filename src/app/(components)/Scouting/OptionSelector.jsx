// OptionSelector.jsx
import React, { useState } from 'react';

const OptionSelector = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { text: "<100", value: "100" },
    { text: "100≥x<200", value: "200" },
    { text: "200≤x<300", value: "300" },
    { text: "300≤x<400", value: "400" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedOption);
    setSelectedOption(''); // Reset selection after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {options.map((option, index) => (
        <div key={index} style={{
          margin: "10px 0",
          padding: "10px",
          borderRadius: "10px",
          background: selectedOption === option.value ? "#c0c0c0" : "#e0e0e0",
          cursor: "pointer",
        }} onClick={() => setSelectedOption(option.value)}>
          {option.text}
        </div>
      ))}
      <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
    </form>
  );
};

export default OptionSelector;
