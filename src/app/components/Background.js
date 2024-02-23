"use client"

import React, { Component } from 'react';
import {Layer, Circle, Image} from "react-konva";
import useImage from 'use-image';

const BackgroundImage = () => {
    const [image] = useImage('https://cdn.discordapp.com/attachments/1209963801856966727/1209963887244611624/Testbed1.jpg?ex=65e8d5ae&is=65d660ae&hm=9e280edb7865aabecab1d2cf170575e62bd4a7f3436c864a03f76297cc559513&')
    return <Image image ={image} />
}

const Background = () =>{
    return(
        <Layer>
            <BackgroundImage/>
        </Layer>
    );
}

export default Background;