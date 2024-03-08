import Split from './split';
import Crop from './crop';
import Tile from './tile';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Split/> */}
      {/* <Crop/> */}
      <Tile/>
    </main>
  );
}
