'use client'

import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';

const SplitImage = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const img = new window.Image();
        img.onload = () => {
            setImage(img);
        };
        img.src = '/Testbed1.jpg';
    }, []);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {image && (
                    <>
                        {/* Displaying the left part of the image */}
                        <Image
                            image={image}
                            crop={{
                                x: 0,
                                y: 0,
                                width: window.innerWidth / 2,  // Width of the first part
                                height: window.innerHeight,
                            }}
                            x={0}
                            y={0}
                        />
                        {/* Displaying the right part of the image */}
                        <Image
                            image={image}
                            crop={{
                                x: window.innerWidth / 2,  // Starting x position of the second part
                                y: 0,
                                width: window.innerWidth / 2,  // Width of the second part
                                height: window.innerHeight,
                            }}
                            x={window.innerWidth / 2}  // Starting x position of the second part
                            y={0}
                        />
                    </>
                )}
            </Layer>
        </Stage>
    );
};

export default SplitImage;
