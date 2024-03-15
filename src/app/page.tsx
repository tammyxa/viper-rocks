import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify">
      <ul aria-label='Image Loading'>
        <li>
          <Link href='/imageLoading'>Sample Image</Link>
        </li>
      </ul>
      <ul aria-label='Scouting'>
        <li>
          <Link href='/scouting/tiles'>Tiles</Link>
        </li>
        <li>
          <Link href='/scouting/customTiles'>Custom Tiles</Link>
        </li>
        <li>
        <Link href='/scouting/crop'>Crop</Link>
        </li>
        <li>
          <Link href='/scouting/circles'>Circles</Link>
        </li>
      </ul>

      <ul aria-label='Sizing'>
        <li>
          <Link href='/sizing/cutout'>Cut Out</Link>
        </li>
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