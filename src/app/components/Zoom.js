"use client"

import React, { Component } from 'react';
import {Layer, Circle, Image} from "react-konva";
import useImage from 'use-image';

const BackgroundImage = () => {
    const [image] = useImage('https://cdn.discordapp.com/attachments/1209963801856966727/1215433294511079514/Testbed1_Q3.jpg?ex=65fcbb77&is=65ea4677&hm=118aef4418650efefdb601d64fdaf93b6f241bc3f88d1adb0063b924519eebf7&')
    return <Image image ={image} />
}

const Zoom = () =>{
    return(
        <Layer>
            <BackgroundImage/>
        </Layer>
    );
}

export default Zoom;