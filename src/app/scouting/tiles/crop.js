'use client'

import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';

const CroppedImage = () => {
    const imageUrl = 'https://cdn.discordapp.com/attachments/1209963801856966727/1209963887244611624/Testbed1.jpg?ex=65e8d5ae&is=65d660ae&hm=9e280edb7865aabecab1d2cf170575e62bd4a7f3436c864a03f76297cc559513&';
    const [imageObj, setImageObj] = useState(null);

    useEffect(() => {
        const img = new window.Image();
        img.src = imageUrl;
        img.onload = () => {
            setImageObj(img);
        };
    }, [imageUrl]);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {imageObj && (
                    <Image
                        image={imageObj}
                        crop={{
                            x: 100,
                            y: 100,
                            width: 200,
                            height: 150,
                        }}
                        width={200}
                        height={150}
                        x={100}
                        y={100}
                    />
                )}
            </Layer>
        </Stage>
    );
};

export default CroppedImage;
