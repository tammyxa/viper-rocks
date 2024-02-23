"use client"

import Background from './Background';

import React, { Component, useState } from 'react';
import {Rect, Stage, Layer, Circle} from "react-konva";


const Scouting = () =>{
    const [circles, setCircles] = useState([]);

    const exportPositions = () => {
        console.log(circles.map(circle => ({
            position: circle.position,
        })));
    };
    
    const handleStageClick = (e) => {
        const stage = e.target.getStage();
        const position = stage.getPointerPosition();
        const newCircle = {
            x: position.x,
            y: position.y,
            position: { x: position.x, y: position.y }, // Record initial position
            radius: 20,
            fill: 'red',
            opacity: 0.3,
            stroke: 'black'
        };
        setCircles([...circles, newCircle]);
    };

    const handleDragEnd = (index, e) => {
        const newCircles = [...circles];
        const circle = newCircles[index];
        circle.x = e.target.x();
        circle.y = e.target.y();
        newCircles[index] = circle;
        setCircles(newCircles);
    };

    return (
        <div>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onClick={handleStageClick}
            >
                <Background/>
                <Layer>
                    {circles.map((circle, index) => (
                        <Circle
                            key={index}
                            x={circle.x}
                            y={circle.y}
                            radius={circle.radius}
                            fill={circle.fill}
                            opacity={circle.opacity}
                            stroke={circle.stroke}
                            draggable
                            onDragEnd={(e) => handleDragEnd(index, e)}
                        />
                    ))}
                </Layer>
            </Stage>
            <button onClick={exportPositions}>Export Positions</button>
        </div>
    );
}

export default Scouting;