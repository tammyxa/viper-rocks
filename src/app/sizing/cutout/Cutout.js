'use client'

import React, { useState } from 'react';
import { Stage, Layer, Line, Circle } from 'react-konva';

const CustomPolygon = () => {
  const [points, setPoints] = useState([]);
  const [drawing, setDrawing] = useState(false);

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    if (points.length >= 2 && distance(points[0], { x, y }) < 10) {
      // Stop drawing if clicked near the starting point
      setDrawing(false);
    } else {
      setDrawing(true);
      setPoints([...points, { x, y }]);
    }
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const { x, y } = e.target.getStage().getPointerPosition();
    setPoints([...points.slice(0, -1), { x, y }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const distance = (point1, point2) => {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div>
      <h1>Custom Polygon</h1>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {/* Drawn Polygon */}
          <Line
            points={points.flatMap(({ x, y }) => [x, y])}
            closed
            stroke="black"
            strokeWidth={2}
            fill="rgba(255, 0, 0, 0.3)"
          />
          {/* Current Drawing Line */}
          {drawing && (
            <Line
              points={points.flatMap(({ x, y }) => [x, y])}
              stroke="black"
              strokeWidth={2}
            />
          )}
          {/* Dot at Clicked Position */}
          {points.map((point, index) => (
            <Circle
              key={index}
              x={point.x}
              y={point.y}
              radius={3}
              fill="red"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CustomPolygon;
