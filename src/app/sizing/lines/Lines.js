'use client'

import Zoom from '@/app/components/Zoom';
import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const DrawStraightLine = () => {
  const [lines, setLines] = useState([]);
  const [startPos, setStartPos] = useState(null);
  const [endPos, setEndPos] = useState(null);

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setStartPos({ x, y });
    setEndPos(null);
  };

  const handleMouseMove = (e) => {
    if (!startPos) return;

    const { x, y } = e.target.getStage().getPointerPosition();
    setEndPos({ x, y });
  };

  const handleMouseUp = () => {
    if (startPos && endPos) {
      const newLine = { start: startPos, end: endPos };
      setLines([...lines, newLine]);
      setStartPos(null);
      setEndPos(null);
    }
  };

  const calculateDistance = (start, end) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleExport = () => {
    const linesWithDistances = lines.map((line, index) => {
      const distance = calculateDistance(line.start, line.end);
      return { line, distance };
    });
    console.log('Lines with distances:', linesWithDistances);
  };

  return (
    <div>
      <h1>Create Line from Longest </h1>
      <Stage
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Zoom/>
        <Layer>
          {lines.map((line, index) => (
            <Line
              key={index}
              points={[line.start.x, line.start.y, line.end.x, line.end.y]}
              stroke="red"
              strokeWidth={5}
            />
          ))}
          {startPos && endPos && (
            <Line
              points={[startPos.x, startPos.y, endPos.x, endPos.y]}
              stroke="red"
              strokeWidth={5}
              dash={[5, 5]}
            />
          )}
        </Layer>
      </Stage>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default DrawStraightLine;
