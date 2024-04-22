import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Line } from 'react-konva';
import useImage from 'use-image';
import handleSubmit from '@/app/Tasks/Sizing/page';

const DisplayQuadrant = ({ quadrant, labels, setLabels, labels, setLabels }) => {
  const [konvaImage] = useImage(quadrant.image.imageURL);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [dimensions, setDimensions] = useState({ width: quadrant.width, height: quadrant.height });
  const [dimensions, setDimensions] = useState({ width: quadrant.width, height: quadrant.height });

  useEffect(() => {
    const resizeHandler = () => {
      const scale = Math.min(window.innerWidth / quadrant.width, window.innerHeight / quadrant.height);
      setDimensions({ width: quadrant.width * scale - 250, height: quadrant.height * scale - 300});
    };
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => window.removeEventListener('resize', resizeHandler);
  }, [quadrant.width, quadrant.height]);

  const handleMouseDown = (e) => {
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setDrawing(true);
    setPoints([...points, { x: x / dimensions.width * quadrant.width, y: y / dimensions.height * quadrant.height }]);
    setPoints([...points, { x: x / dimensions.width * quadrant.width, y: y / dimensions.height * quadrant.height }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setPoints([...points, { x: x / dimensions.width * quadrant.width, y: y / dimensions.height * quadrant.height }]);
    setPoints([...points, { x: x / dimensions.width * quadrant.width, y: y / dimensions.height * quadrant.height }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);

    // Ensure the polygon is closed by checking if the first and last points are the same
    if (points.length > 0) {
      const firstPoint = points[0];
      const lastPoint = points[points.length - 1];
      if (Math.round(lastPoint.x) !== Math.round(firstPoint.x) || Math.round(lastPoint.y) !== Math.round(firstPoint.y)) {
        points.push({ x: firstPoint.x, y: firstPoint.y });
      }
    }


    // Ensure the polygon is closed by checking if the first and last points are the same
    if (points.length > 0) {
      const firstPoint = points[0];
      const lastPoint = points[points.length - 1];
      if (Math.round(lastPoint.x) !== Math.round(firstPoint.x) || Math.round(lastPoint.y) !== Math.round(firstPoint.y)) {
        points.push({ x: firstPoint.x, y: firstPoint.y });
      }
    }

    setLabels([...labels, points]);
    setHistory([...history, labels]);
    setFuture([]);
    setHistory([...history, labels]);
    setFuture([]);
    setPoints([]);
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
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
              points={label.flatMap(p => [p.x / quadrant.width * dimensions.width, p.y / quadrant.height * dimensions.height])}
              stroke="red"
              strokeWidth={2}
              closed={true}
              fill="rgba(255, 0, 0, 0.5)"
              fill="rgba(255, 0, 0, 0.5)"
            />
          ))}
          {drawing && (
            <Line
              points={points.flatMap(p => [p.x / quadrant.width * dimensions.width, p.y / quadrant.height * dimensions.height])}
              points={points.flatMap(p => [p.x / quadrant.width * dimensions.width, p.y / quadrant.height * dimensions.height])}
              stroke="red"
              strokeWidth={2}
            />
          )}
        </Layer>
        </Stage>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
          <button style={{ margin: "10px", padding: "10px", borderRadius: "10px", background: "#c0c0c0", cursor: "pointer", width: '120px' }} onClick={undo}>Undo</button>
          <button style={{ margin: "10px", padding: "10px", borderRadius: "10px", background: "#c0c0c0", cursor: "pointer", width: '120px' }} onClick={redo}>Redo</button>
          <button style={{ margin: '10px', padding: '10px', borderRadius: '10px', background: '#007bff', color: '#fff', cursor: 'pointer', border: 'none', textDecoration: 'none', width: '120px' }} onClick={handleSubmit}>Submit</button>
        </div>

  </div>
  );
};

export default DisplayQuadrant;
