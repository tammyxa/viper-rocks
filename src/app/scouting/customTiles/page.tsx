'use client'
import { Stage } from 'react-konva';
import CustomTiles from './customTiles';

export default function About() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomTiles/>
    </main>
  );
}
