import { Stage, Layer, Image } from 'react-konva';
import useImage from "use-image";
import React, { useState, useEffect } from 'react';

function DisplayQuadrant({quadrant}) {
  const [konvaImage] = useImage(quadrant.image.imageURL);
  console.log(quadrant, "quadrant");
  // Use state to hold the window dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions on window resize
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

  if (!quadrant) return <div>No image to display</div>;

  return (
    <Stage width={dimensions.width} height={dimensions.height}>
      <Layer>
        <Image
          image={konvaImage}
          // Use the entire stage size for the image, ignoring original aspect ratio
          width={dimensions.width} 
          height={dimensions.height}
          // Specify the crop region from the original image
          crop={{
            x: quadrant.x,
            y: quadrant.y,
            width: quadrant.width,
            height: quadrant.height,
          }}
          alt="Displayed"
        />
      </Layer>
    </Stage>
  );
}

export default DisplayQuadrant;
