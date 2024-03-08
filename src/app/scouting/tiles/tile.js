'use client'

import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Rect } from 'react-konva';

const ImageTilesWithBorders = () => {
  const [imageObj, setImageObj] = useState(null);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const imageUrl = '/Testbed1.jpg'; // Replace with your image URL
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageObj(img);
      createTiles(img);
    };
  }, []);

  const createTiles = (image) => {
    const tileWidth = 500;
    const tileHeight = 250;
    const cols = Math.ceil(image.width / tileWidth);
    const rows = Math.ceil(image.height / tileHeight);
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

  return (
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
  );
};

export default ImageTilesWithBorders;
