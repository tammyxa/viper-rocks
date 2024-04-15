import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image, Line } from 'react-konva';
import useImage from 'use-image';

const DisplayQuadrant = ({ quadrant }) => {
  const [konvaImage] = useImage(quadrant.image.imageURL);
  const [labels, setLabels] = useState([]);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
        undo();
      } else if ((event.ctrlKey || event.metaKey) && event.key === 'y') {
        redo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history, future]); // Listen for undo and redo shortcuts

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
    setLabels([...labels, points]);
    setHistory([...history, labels]);
    setFuture([]);
    setPoints([]);
  };

  const handleExport = () => {
    console.log('Exporting labels:', labels);
  };

  const undo = () => {
    if (history.length > 0) {
      const previous = history.pop();
      setFuture([labels, ...future]);
      setLabels(previous);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const next = future.shift();
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
      <button onClick={handleExport}>Export Data</button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </>
  );
};

export default DisplayQuadrant;
