import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const DisplayImage = ({ image }) => {
  // Load the image using the useImage hook
  const [konvaImage] = useImage(image.imageURL);

  if (!image) return <div>No image to display</div>;
  
  return (
    <Stage width={1500} height={1000}>
      <Layer>
        {/* Use the loaded Konva image object */}
        <Image image={konvaImage} alt="Displayed"/>
      </Layer>
    </Stage>
  );
};

export default DisplayImage;
