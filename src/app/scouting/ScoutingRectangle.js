'use client'

import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const SelectionMenu = () => {
  const handleButtonClick = (buttonText) => {
    // Handle button click action based on buttonText
    alert(`Button ${buttonText} clicked!`);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* Example buttons */}
        <Rect
          x={50}
          y={50}
          width={100}
          height={50}
          fill="lightblue"
          cornerRadius={10}
          onClick={() => handleButtonClick('Button 1')}
          draggable={true}  // Enable dragging for the button
        />
        <Text
          x={70}
          y={65}
          text="Button 1"
          fontSize={20}
          fill="black"
          draggable={true}  // Enable dragging for the text label
        />

        <Rect
          x={50}
          y={150}
          width={100}
          height={50}
          fill="lightgreen"
          cornerRadius={10}
          onClick={() => handleButtonClick('Button 2')}
          draggable={true}  // Enable dragging for the button
        />
        <Text
          x={70}
          y={165}
          text="Button 2"
          fontSize={20}
          fill="black"
          draggable={true}  // Enable dragging for the text label
        />

        {/* Add more buttons as needed */}
      </Layer>
    </Stage>
  );
};

export default SelectionMenu;
