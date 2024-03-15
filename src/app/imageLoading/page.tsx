'use client'
import React from 'react';
import ShowWholeImage from '@/app/components/ShowWholeImage';

export default function About() {

  const imageURL =  'https://cdn.discordapp.com/attachments/1209963801856966727/1209963887244611624/Testbed1.jpg?ex=65e8d5ae&is=65d660ae&hm=9e280edb7865aabecab1d2cf170575e62bd4a7f3436c864a03f76297cc559513&'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShowWholeImage src={imageURL}/>
    </main>
  );
}
