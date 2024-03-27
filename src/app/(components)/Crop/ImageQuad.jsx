'use client'

import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const CroppedImage = ({image, crop}) => {
    const [konvaImage] = useImage(image.imageURL);
    // Calculate the aspect ratio of the cropped image
    const aspectRatio = crop.width / crop.height;

    // Determine the width and height of the image while maintaining the aspect ratio
    let width = crop.width;
    let height = crop.height;

    if (aspectRatio < 1) {
        // If the aspect ratio is less than 1 (image is taller than it is wide), adjust the height
        height = window.innerHeight; // Set the desired height of the displayed image
        width = height * aspectRatio; // Calculate the corresponding width to maintain aspect ratio
    } else {
        // If the aspect ratio is greater than or equal to 1 (image is wider than it is tall), adjust the width
        width = window.innerWidth; // Set the desired width of the displayed image
        height = width / aspectRatio; // Calculate the corresponding height to maintain aspect ratio
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Image
              image={konvaImage}
              crop={crop}
              x={0}
              y={0}
              width={width}
              heigh={height}
              alt="Displayed"
            />
          </Layer>
        </Stage>
      );
};

export default CroppedImage;
