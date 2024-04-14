import Image from "next/image";
import { DarkButton } from "./(components)/Button";
import { BlockCardGroup } from "./(components)/Blocks";
import OurTeamData from "@/data/ourTeam.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        id="#"
        className="min-h-screen flex justify-center items-center text-center"
      >
        <div
          className="absolute min-h-screen min-w-full bg-cover bg-center text-center"
          style={{ backgroundImage: "url(/moon101-the-lunar-surface.jpg)" }}
        ></div>
        <div className="relative text-center flex flex-col p-24">
          <span className="text-h1-alt text-white">VIPER ROCKS</span>
          <span className="text-h3 text-white">
            Citizen Scientists Needed. Sign up to identify moon rocks for Viper
            rover expeditions.
          </span>
          <DarkButton href="/Dashboard"> Explore </DarkButton>
        </div>
      </div>
      <div id="#about-us">
        <div className="absolute min-h-screen min-w-full bg-cover bg-center"></div>
        <div className="relative flex flex-col p-24">
          <span className="text-h1-alt text-center">MEET OUR TEAM</span>
          <BlockCardGroup cards={OurTeamData} />
        </div>
      </div>
    </main>
  );
}
