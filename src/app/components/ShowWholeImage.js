'use client'

import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';

const ImageLoader = ({ src }) => {
  const [image, setImage] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImage(img);
      setImageSize({ width: img.width, height: img.height });
    };
  }, [src]);

  const stageWidth = 500; // Adjust as needed
  const stageHeight = 500; // Adjust as needed
  const scale = Math.min(stageWidth / imageSize.width, stageHeight / imageSize.height);

  return (
    <div>
      <h1>Image Loader</h1>
      <Stage width={stageWidth} height={stageHeight}>
        <Layer>
          {image && (
            <Image
              image={image}
              scaleX={scale}
              scaleY={scale}
              x={(stageWidth - imageSize.width * scale) / 2}
              y={(stageHeight - imageSize.height * scale) / 2}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default ImageLoader;
