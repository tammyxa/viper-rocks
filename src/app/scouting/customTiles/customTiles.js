'use client'

import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Rect } from 'react-konva';

const ImageTilesWithBorders = () => {
  const [imageObj, setImageObj] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [numTilesX, setNumTilesX] = useState(4); // Default number of tiles in X direction
  const [numTilesY, setNumTilesY] = useState(4); // Default number of tiles in Y direction

  useEffect(() => {
    const imageUrl = '/Testbed1.jpg'; // Replace with your image URL
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageObj(img);
      createTiles(img);
    };
  }, [numTilesX, numTilesY]); // Update tiles when numTilesX or numTilesY changes

  const createTiles = (image) => {
    const cols = numTilesX;
    const rows = numTilesY;
    const tileWidth = image.width / cols;
    const tileHeight = image.height / rows;
    const newTiles = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const tile = {
          x: x * tileWidth,
          y: y * tileHeight,
          width: tileWidth,
          height: tileHeight,
          image: image,
          crop: {
            x: x * tileWidth,
            y: y * tileHeight,
            width: tileWidth,
            height: tileHeight
          }
        };
        newTiles.push(tile);
      }
    }
    setTiles(newTiles);
  };

  const handleNumTilesXChange = (event) => {
    const value = parseInt(event.target.value);
    setNumTilesX(value);
  };

  const handleNumTilesYChange = (event) => {
    const value = parseInt(event.target.value);
    setNumTilesY(value);
  };

  const handleLogTiles = () => {
    console.log(tiles);
  };

  return (
    <div>
      <label>Number of Tiles (X): </label>
      <input type="number" value={numTilesX} onChange={handleNumTilesXChange} />
      <br />
      <label>Number of Tiles (Y): </label>
      <input type="number" value={numTilesY} onChange={handleNumTilesYChange} />
      <br />
      <button onClick={handleLogTiles}>Log Tiles</button> {/* Button to log tiles */}
      <br />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {tiles.map((tile, index) => (
            <React.Fragment key={index}>
              <Image
                x={tile.x}
                y={tile.y}
                width={tile.width}
                height={tile.height}
                image={tile.image}
                crop={tile.crop}
              />
              <Rect
                x={tile.x}
                y={tile.y}
                width={tile.width}
                height={tile.height}
                stroke="red"
                strokeWidth={5}
              />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ImageTilesWithBorders;
