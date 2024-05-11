import React, { useEffect, useState } from "react";
import { Stage, Layer, Shape, Image as KonvaImage } from "react-konva";
import useImage from 'use-image';

const DisplayMarks = ({ userGeometry }) => {
  const [users, setUsers] = useState(null);
  const [imageId, setImageId] = useState([]);
  const [geometry, setGeometry] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [image] = useImage(imageURL);
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  // Define an object to store user ID to color mappings
  const [userColors, setUserColors] = useState({});

  function parsePolygon(poly) {
    const polygonDataArray = poly.map(item => {
      const polygonData = item.drawing.substring(9, item.drawing.length - 2);
      return polygonData;
    });
    
    const pointsArray = polygonDataArray.map(polygonData => {
        return polygonData.split(',').map(point => point.split(' '));
    });
    
    const parseWKTPointArray = pointsArray.map(points => {
      return points.map(point => {
          const adjustedX = parseFloat(point[0]) / 1500 * stageWidth;
          const adjustedY = (1000 - parseFloat(point[1])) / 1000 * stageHeight; // Invert Y-coordinate
          return [adjustedX, adjustedY];
        });
    });

    const flattenedPointsArray = parseWKTPointArray.map(points => {
        return points.map(point => [Number(point[0]), Number(point[1])]).flat();
    });

    setGeometry(flattenedPointsArray); // Set the parsed geometry
  }

  const changeImage = (event) => {
    const selectedImageId = Number(event.target.value);
    setImageId(selectedImageId);
  }

  const handleClick = () => {
    const filtered = userGeometry.filter(user => user.imageId == Number(imageId));
    setUsers(filtered);
    setImageURL(filtered[0].imageURL);
    parsePolygon(filtered); // Parse the polygon data

    // Generate user ID to color mappings dynamically
    const uniqueUserIds = Array.from(new Set(filtered.map(user => user.userId)));
    const newColors = {};
    uniqueUserIds.forEach((userId, index) => {
      newColors[userId] = generateColor(index);
    });
    setUserColors(newColors);
  };

  // Function to generate a random color with transparency
  const generateColor = (index) => {
    const hue = (index * 137.508 + 220) % 360; // Generate hue based on index
    return `hsla(${hue}, 80%, 50%, 0.5)`; // Convert hue to HSL color with 50% opacity
  };

  return (
    <div>
      <button onClick={handleClick}>Filter</button>
      <h3>Enter Image Id:</h3>
      <select value={imageId} onChange={changeImage}>
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
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
          {geometry && geometry.map((polygonPoints, index) => {
            // Get the user ID for the current polygon
            const userId = users[index].userId; // Assuming user data is available in users array
            // Get the color for the user ID from the mapping
            const userColor = userColors[userId] || 'black'; // Default to black if no color is found
            return (
              <Shape
                key={index}
                sceneFunc={(context, shape) => {
                  // Draw the polygon
                  context.beginPath();
                  context.moveTo(polygonPoints[0], polygonPoints[1]);
                  for (let i = 2; i < polygonPoints.length; i += 2) {
                    context.lineTo(polygonPoints[i], polygonPoints[i + 1]);
                  }
                  context.closePath();
                  // Set fill color based on user ID
                  context.fillStyle = userColor; // Use the color corresponding to the user ID
                  // Fill the shape
                  context.fill();
                  // Set stroke color
                  context.strokeStyle = 'rgba(0, 0, 0, 0.5)'; // Stroke color with 50% opacity
                  // Konva specific method to fill the shape
                  context.fillStrokeShape(shape);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default DisplayMarks;
