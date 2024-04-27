import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Line } from 'react-konva';
import useImage from 'use-image';

const DisplayQuadrant = ({ quadrant, labels, setLabels }) => {
  const [konvaImage] = useImage(quadrant.image.imageURL);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('history')) || []);
  const [future, setFuture] = useState(() => JSON.parse(localStorage.getItem('future')) || []);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [dimensions, setDimensions] = useState({ width: quadrant.width, height: quadrant.height });

  useEffect(() => {
    const resizeHandler = () => {
      const scale = Math.min(window.innerWidth / quadrant.width, window.innerHeight / quadrant.height);
      setDimensions({ width: quadrant.width * scale, height: quadrant.height * scale });
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => window.removeEventListener('resize', resizeHandler);
  }, [quadrant.width, quadrant.height]);

  // Save history and future to localStorage
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.setItem('future', JSON.stringify(future));
  }, [history, future]);

  const handleMouseDown = (e) => {
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setDrawing(true);
    setPoints([...points, { x: x / dimensions.width * quadrant.width, y: y / dimensions.height * quadrant.height }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setPoints([...points, { x: x / dimensions.width * quadrant.width, y: y / dimensions.height * quadrant.height }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
    if (points.length > 0) {
      setLabels([...labels, points]);
      setHistory([...history, labels]);
      setFuture([]);
      setPoints([]);
    }
  };

  const undo = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setFuture([labels, ...future]);
      setLabels(previous);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const next = future[0];
      setFuture(future.slice(1));
      setHistory([...history, labels]);
      setLabels(next);
    }
  };

  return (
    <>
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          <Image
            image={konvaImage}
            width={dimensions.width}
            height={dimensions.height}
            crop={{
              x: quadrant.x,
              y: quadrant.y,
              width: quadrant.width,
              height: quadrant.height,
            }}
          />
          {labels.map((label, i) => (
            <Line
              key={i}
              points={label.flatMap(p => [p.x / quadrant.width * dimensions.width, p.y / quadrant.height * dimensions.height])}
              stroke="red"
              strokeWidth={2}
              closed={true}
              fill="rgba(255, 0, 0, 0.5)"
            />
          ))}
          {drawing && (
            <Line
              points={points.flatMap(p => [p.x / quadrant.width * dimensions.width, p.y / quadrant.height * dimensions.height])}
              stroke="red"
              strokeWidth={2}
            />
          )}
        </Layer>
      </Stage>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </>
  );
};

export default DisplayQuadrant;
