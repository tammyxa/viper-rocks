import React, { useEffect, useState } from 'react';
import { Circle, Line, Rect,  Image as KonvaImage, Stage, Layer } from 'react-konva';
import useImage from 'use-image';

function DisplayRock({ rock }) {
  const [location, setLocation] = useState(null);
  const [longestLine, setLongestLine] = useState(null);
  const [distance, setDistance] = useState(null);
  const [image] = useImage(rock ? rock.imageURL : null, 'Anonymous');
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  useEffect(() => {
    if (rock && rock.location) {
      setLocation(parseWKTPoint(rock.location));
    }
  }, [rock]);

  useEffect(() => {
    if (rock && rock.longest_line) {
      setLongestLine(parseWKTLine(rock.longest_line));
    }
  }, [rock]);

  useEffect(() => {
    if (rock && rock.distance) {
      setDistance(rock.distance);
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

  function parseWKTLine(wktLine) {
    // Remove the 'LINESTRING(' and ')' parts from the string
    const cleanedData = wktLine.match(/\d+\.\d+|\d+/g).map(Number);

    // const points = [];
    // for (let i = 0; i < cleanedData.length; i += 2) {
    //     points.push([cleanedData[i], cleanedData[i + 1]]);
    // }

    const adjustedX1 = parseFloat(cleanedData[0]) / 1500 * stageWidth;
    const adjustedX2 = parseFloat(cleanedData[2]) / 1500 * stageWidth;
    const adjustedY1 = (1000 - parseFloat(cleanedData[1])) / 1000 * stageHeight; // Invert Y-coordinate
    const adjustedY2 = (1000 - parseFloat(cleanedData[3])) / 1000 * stageHeight; // Invert Y-coordinate
    return { x1: adjustedX1, y1: adjustedY1, x2: adjustedX2, y2: adjustedY2 };
  }

  console.log('location', location);
  console.log('longest line', longestLine);
  console.log('distance', distance);

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
            // crop={{
            //   x: 1156 - 56 ,
            //   y: 234 - 56 ,
            //   width: 1156 + 56,
            //   height: 234 + 56,
            // }}
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
        {/*Shows longest line*/}
        {/* {longestLine && (
          <Line
          points={[longestLine.x1, longestLine.y1, longestLine.x2, longestLine.y2]}
          stroke='blue'
          strokeWidth={5}
          />
        )} */}
        {location && distance && (
          <Rect
            x={location.x - distance}
            y={location.y - distance}
            width={distance * 2 }
            height={distance * 2}
            stroke={1}
          />
        )}
      </Layer>
    </Stage>
  );
}

export default DisplayRock;
