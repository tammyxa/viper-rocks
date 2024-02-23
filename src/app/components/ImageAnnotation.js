// components/ImageAnnotation.js
"use client"

import React, { useState, useRef } from 'react';
import { Stage, Layer, Image, Line } from 'react-konva';

const ImageAnnotation = () => {
    const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);

    const handleImageLoadError = (error) => {
        console.error('Error loading image:', error);
    };

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing.current) return;
        const pos = e.target.getStage().getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([pos.x, pos.y]);
        setLines([...lines.slice(0, -1), lastLine]);
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                
            </Layer>
        </Stage>
    );
};

export default ImageAnnotation;
