'use client'

import Zoom from '@/app/components/Zoom';
import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const LabelCreationApp = () => {
  const [labels, setLabels] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setDrawing(true);
    setPoints([{ x, y }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const { x, y } = e.target.getStage().getPointerPosition();
    setPoints([...points, { x, y }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
    setLabels([...labels, points]);
    setPoints([]);
  };

  const handleExport = () => {
    console.log('Exporting labels:', labels);
    // You can further process or save the labels data as needed
  };

  return (
    <div>
      <h1>Label Creation App</h1>
      <Stage
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Zoom/>
        <Layer>
          {/* Drawn Labels */}
          {labels.map((points, index) => (
            <Line
              key={index}
              points={points.flatMap(({ x, y }) => [x, y])}
              stroke="red"
              strokeWidth={0}
              closed={true}
              fill="rgba(255, 0, 0, 0.3)"
            />
          ))}
          {/* Current Drawing Line */}
          {drawing && (
            <Line
              points={points.flatMap(({ x, y }) => [x, y])}
              stroke="red"
              strokeWidth={2}
            />
          )}
        </Layer>
      </Stage>
      <button onClick={handleExport}>Export Data</button>
    </div>
  );
};

export default LabelCreationApp;
