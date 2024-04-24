// OptionSelector.jsx
import React, { useState } from 'react';

const OptionSelector = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { text: "Angular", value: "Angular" },
    { text: "Sub-Angular", value: "Sub-Angular" },
    { text: "Rounded", value: "Rounded" },
    { text: "Sub-Rounded", value: "Sub-Rounded" },
    { text: "Ambiguous Shape", value: "Ambiguous" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== '') {
      onSubmit(selectedOption);
      setSelectedOption(''); // Reset selection after submission
    }
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
