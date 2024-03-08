'use client'

import Zoom from '@/app/components/Zoom';
import React, { useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const DrawLines = () => {
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const lineRef = useRef();
  const stageRef = useRef();

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setIsDrawing(true);
    // Start drawing a new line
    setLines([...lines, { id: lines.length, points: [{ x, y }] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) {
      return;
    }
    const { x, y } = e.target.getStage().getPointerPosition();
    const updatedLines = lines.slice();
    const lastLine = updatedLines[updatedLines.length - 1];
    lastLine.points = [...lastLine.points, { x, y }];
    setLines(updatedLines);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleExport = () => {
    console.log('Lines:', lines); // Print lines to console when button is clicked
  };

  const imageExport = () => {
    const dataURL = stageRef.current.getStage().toDataURL();
    const link = document.createElement('a');
    link.download = 'stage.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Trace Around the rock</h1>
      <Stage
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
      >
        <Zoom/>
        <Layer>
          {/* Drawn Lines */}
          {lines.map((line) => (
            <Line
              key={line.id}
              points={line.points.reduce((acc, curr) => [...acc, curr.x, curr.y], [])}
              stroke="red"
              strokeWidth={5}
              ref={lineRef}
            />
          ))}
        </Layer>
      </Stage>
      <div>
        <button onClick={handleExport}>Export data</button>
      </div>
      
      <div>
        <button onClick={imageExport}>Export image</button>
      </div>
    </div>
  );
};

export default DrawLines;
