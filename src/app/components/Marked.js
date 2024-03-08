"use client"

import React, { Component } from 'react';
import {Layer, Circle, Image} from "react-konva";
import useImage from 'use-image';

const BackgroundImage = () => {
    const [image] = useImage('https://cdn.discordapp.com/attachments/1209963801856966727/1215448438905241702/Testbed1_Q3_Marked.jpg?ex=65fcc991&is=65ea5491&hm=f2c60a9dfca99cefea83642b6764e5881ee800177bcd5120432cef124fad302d&')
    return <Image image ={image} />
}

const Marked = () =>{
    return(
        <Layer>
            <BackgroundImage/>
        </Layer>
    );
}

export default Marked;