'use client'

import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';

const CroppedImage = () => {
    const imageUrl = 'https://cdn.discordapp.com/attachments/1209963801856966727/1209963887244611624/Testbed1.jpg?ex=65e8d5ae&is=65d660ae&hm=9e280edb7865aabecab1d2cf170575e62bd4a7f3436c864a03f76297cc559513&';
    const [imageObj, setImageObj] = useState(null);
    const [cropInfo, setCropInfo] = useState({ x: 375, y: 250, width: 375, height: 250 });
    const [widthModifier, setWidthModifier] = useState(0);
    const [heightModifier, setHeightModifier] = useState(0);

    useEffect(() => {
        const img = new window.Image();
        img.src = imageUrl;
        img.onload = () => {
            setImageObj(img);
        };
    }, [imageUrl]);

    const handleChange = (event, property) => {
        const value = parseInt(event.target.value);
        setCropInfo({ ...cropInfo, [property]: value });
    };

    const handleWidthModifierChange = (event) => {
        setWidthModifier(parseInt(event.target.value));
    };

    const handleHeightModifierChange = (event) => {
        setHeightModifier(parseInt(event.target.value));
    };

    return (
        <div>
            <label>X: </label>
            <input type="number" value={cropInfo.x} onChange={(e) => handleChange(e, 'x')} />
            <br />
            <label>Y: </label>
            <input type="number" value={cropInfo.y} onChange={(e) => handleChange(e, 'y')} />
            <br />
            <label>Width: </label>
            <input type="number" value={cropInfo.width} onChange={(e) => handleChange(e, 'width')} />
            <input type="number" value={widthModifier} onChange={handleWidthModifierChange} />
            <br />
            <label>Height: </label>
            <input type="number" value={cropInfo.height} onChange={(e) => handleChange(e, 'height')} />
            <input type="number" value={heightModifier} onChange={handleHeightModifierChange} />
            <br />
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {imageObj && (
                        <Image
                            image={imageObj}
                            crop={{
                                x: cropInfo.x,
                                y: cropInfo.y,
                                width: cropInfo.width + widthModifier,
                                height: cropInfo.height + heightModifier,
                            }}
                        />
                    )}
                </Layer>
            </Stage>
        </div>
    );
};

export default CroppedImage;
