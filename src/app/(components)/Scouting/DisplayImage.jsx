import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const DisplayImage = ({ image }) => {
  const [konvaImage, setKonvaImage] = useState(null);

  useEffect(() => {
    // Load the image using the useImage hook
    const img = new window.Image();
    img.src = image.imageURL;
    img.onload = () => {
      setKonvaImage(img);
    };
  }, [image.imageURL]);

  if (!image) return <div>No image to display</div>;

  if (!konvaImage) return <div>Loading...</div>;

  // Calculate the maximum width and height based on the screen size
  const maxWidth = window.innerWidth * 0.8; // Adjust as needed
  const maxHeight = window.innerHeight * 0.8; // Adjust as needed
  const scaleFactor = Math.min(maxWidth / konvaImage.width, maxHeight / konvaImage.height);

  // Calculate scaled dimensions
  const scaledWidth = konvaImage.width * scaleFactor;
  const scaledHeight = konvaImage.height * scaleFactor;

  return (
    <Stage width={scaledWidth} height={scaledHeight}>
      <Layer>
        {/* Use the loaded Konva image object */}
        <Image image={konvaImage} width={scaledWidth} height={scaledHeight} alt="Displayed"/>
      </Layer>
    </Stage>
  );
};

export default DisplayImage;