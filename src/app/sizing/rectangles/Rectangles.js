'use client'

import Zoom from '@/app/components/Zoom';
import React, { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const CreateRectanglesApp = () => {
  const [rectangles, setRectangles] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setStartPos({ x, y });
    setDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    // Calculate width and height based on current mouse position
    const { x, y } = e.target.getStage().getPointerPosition();
    const newRect = {
      x: Math.min(startPos.x, x),
      y: Math.min(startPos.y, y),
      width: Math.abs(x - startPos.x),
      height: Math.abs(y - startPos.y),
    };
    setRectangles([...rectangles, newRect]); // Append new rectangle to existing rectangles
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  return (
    <div>
      <h1>Rectangles</h1>
      <Stage
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Zoom/>
        <Layer>
          {/* Drawn Rectangles */}
          {rectangles.map((rect, index) => (
            <Rect
              key={index}
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              stroke="red"
              // strokeWidth={1}
              opacity={0.5}
              // fill='red'
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CreateRectanglesApp;
