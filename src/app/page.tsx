import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify">
      <ul aria-label='SCOUTING'>
        <li>
          <Link href='/scouting/tiles'>Tiles</Link>
        </li>
        <li>
          <Link href='/scouting/circles'>Circles</Link>
        </li>
      </ul>

      <ul aria-label='Sizing'>
        <li>
          <Link href='/sizing/freedraw'>Free Draw</Link>
        </li>
        <li>
          <Link href='sizing/lines'>Line</Link>
        </li>
        <li>
          <Link href='sizing/rectangles'>Rectangles</Link>
        </li>
        <li>
          <Link href='sizing/regions'>Highlight Region</Link>
        </li>
      </ul>
    </main>
  );
}