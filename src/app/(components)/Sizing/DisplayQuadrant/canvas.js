import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image, Line } from 'react-konva';
import useImage from 'use-image';

const DisplayQuadrant = ({ quadrant }) => {
  const [konvaImage] = useImage(quadrant.image.imageURL);
  const [labels, setLabels] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const initialDimensions = useRef({ width: window.innerWidth, height: window.innerHeight });
  const [dimensions, setDimensions] = useState({ ...initialDimensions.current });
  const [imageDimensions, setImageDimensions] = useState({width:quadrant.width, height:quadrant.height,})

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (initialDimensions.current.width === 0 || initialDimensions.current.height === 0) return; // Prevents division by zero

    const scaleWidth = dimensions.width / initialDimensions.current.width;
    const scaleHeight = dimensions.height / initialDimensions.current.height;

    const scaledLabels = labels.map(label =>
      label.map(({ x, y }) => ({
        x: x * scaleWidth,
        y: y * scaleHeight,
      }))
    );

    setLabels(scaledLabels);
    // Rescale ongoing drawing points if the window is resized mid-drawing
    if (drawing) {
      const scaledPoints = points.map(({ x, y }) => ({
        x: x * scaleWidth,
        y: y * scaleHeight,
      }));
      setPoints(scaledPoints);
    }
  }, [dimensions]); // Depend on dimensions to trigger recalculation

  const handleMouseDown = (e) => {
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setDrawing(true);
    setPoints([...points, { x, y }]);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setPoints([...points, { x, y }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
    setLabels([...labels, points]);
    setPoints([]);
  };
  
  const handleExport = () => {
    console.log(imageDimensions);

    const roundedLabels = labels.map(label =>
      label.map(({ x, y }) => ({
        x: Math.round((x / window.innerWidth) * imageDimensions.width),
        y: Math.round((y / window.innerHeight) * imageDimensions.height),
      }))
    );

    console.log('Exporting labels:', roundedLabels);
    // Further process or save the rounded labels data as needed
  };

  if (!quadrant) return <div>No image to display</div>;

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
            alt="Displayed"
          />
          {labels.map((label, i) => (
            <Line
              key={i}
              points={label.flatMap(p => [p.x, p.y])}
              stroke="red"
              strokeWidth={2}
              closed={true}
              fill="rgba(255, 0, 0, 0.3)"
            />
          ))}
          {drawing && (
            <Line
              points={points.flatMap(p => [p.x, p.y])}
              stroke="red"
              strokeWidth={2}
            />
          )}
        </Layer>
      </Stage>
      <button onClick={handleExport}>Export Data</button>
    </>
  );
};

export default DisplayQuadrant;
