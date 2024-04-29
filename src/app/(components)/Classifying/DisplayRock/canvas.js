import React, { useEffect, useState } from 'react';
import { Circle, Image as KonvaImage, Stage, Layer } from 'react-konva';
import useImage from 'use-image';

function DisplayRock({ rock }) {
  const [location, setLocation] = useState(null);
  const [image] = useImage(rock ? rock.imageURL : null, 'Anonymous');
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  useEffect(() => {
    if (rock && rock.location) {
      setLocation(parseWKTPoint(rock.location));
    }
  }, [rock]);

  function parseWKTPoint(wktPoint) {
    // Remove the 'POINT(' and ')' parts from the string
    const cleanedData = wktPoint.replace('POINT(', '').replace(')', '');
    const [x, y] = cleanedData.split(' ');
    // Convert coordinates to a percentage of the image dimensions (1500x1000)
    const adjustedX = parseFloat(x) / 1500 * stageWidth;
    const adjustedY = (1000 - parseFloat(y)) / 1000 * stageHeight; // Invert Y-coordinate
    return { x: adjustedX, y: adjustedY };
  }

  console.log('location', location);

  return (
    <Stage width={stageWidth} height={stageHeight}>
      <Layer>
        {image && (
          <KonvaImage
            image={image}
            x={0}
            y={0}
            width={stageWidth}
            height={stageHeight}
          />
        )}
        {location && (
          <Circle
            x={location.x}
            y={location.y}
            radius={5} // Adjust the size of the dot as needed
            fill="red"
          />
        )}
      </Layer>
    </Stage>
  );
}

export default DisplayRock;
