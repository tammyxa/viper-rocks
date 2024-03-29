import React, { useState } from 'react';
import { Stage, Layer, Circle, Text } from 'react-konva';

function Tests(props) {
  const [circles, setCircles] = useState([]);

  const handleStageClick = (e) => {
    const stage = e.target.getStage();
    const position = stage.getPointerPosition();
    const newCircle = {
      x: position.x,
      y: position.y,
      radius: 50,
      fill: 'blue',
    };
    setCircles([...circles, newCircle]);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} onClick={handleStageClick}>
      <Layer>
        <Text
          text="CLICK ON THE SCREEN AND DRAG THE CIRCLES!"
          x={30}
          y={5}
          fontSize={30}
          fontFamily="Comic Sans"
          fill="black"
        />
      </Layer>
      <Layer>
        {circles.map((circle, index) => (
          <Circle
            key={index}
            x={circle.x}
            y={circle.y}
            radius={circle.radius}
            fill={circle.fill}
            draggable={true}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default Tests;
