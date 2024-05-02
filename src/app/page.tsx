import Image from "next/image";
import { DarkButton } from "./(components)/Button";
import { BlockCardGroup, BlockTeaser } from "./(components)/Blocks";
// import OurTeamData from "@/data/ourTeam.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        id="#"
        className="min-h-screen flex justify-center items-center text-center"
      >
        <div
          className="absolute min-h-screen min-w-full bg-cover bg-center text-center"
          style={{ backgroundImage: "url(/moon-surface.webp)" }}
        ></div>
        <div className="absolute min-h-screen min-w-full bg-center bg-cover bg-no-repeat bg-black z-1 opacity-40"></div>
        <div className="relative text-center flex flex-col p-24">
          <span className="text-h1-alt text-white">VIPER ROCKS</span>
          <span className="text-h3 text-white">
            Citizen Scientists Needed. Sign up to identify moon rocks for Viper
            rover expeditions.
          </span>
          <DarkButton href="/Explore"> Explore </DarkButton>
        </div>
      </div>
      <div id="#about-us">
        <div className="bg-white">
          <div id="our-story" className="p-12 flex">
            <div className="justify-evenly align-center flex flex-col mr-24">
              <div>
                <span className="text-h2 text-black">OUR STORY</span>
                <span className="text-subtitle flex justify-center items-center text-black">
                  At Viper Rocks, we are passionate about exploring the wonders
                  of the universe. Our mission is to bring the excitement of
                  space exploration to everyone. Our Values: Curiosity
                  Innovation Collaboration Education
                </span>
              </div>
              <div>
                <span className="text-h2 text-black">OUR VALUES</span>
                <div className="flex justify-between w-full flex-wrap">
                  <div className="text-subtitle">Curiosity</div>
                  <div className="text-subtitle">Innovation</div>
                  <div className="text-subtitle">Collaboration</div>
                  <div className="text-subtitle">Education</div>
                </div>
              </div>
            </div>
            <div className="">
              <BlockTeaser
                subtitle="Polar Exploration Rover"
                title="NASA's Viper Moon Rover"
                body="VIPER, will map ice on the Moon's South Pole during its 100-day mission, aiding future lunar exploration efforts."
                buttonLabel="Learn More"
                buttonLink="https://science.nasa.gov/mission/viper/"
                image="/viper-rover.webp"
                imageAlt="Viper Rover"
              />
            </div>
          </div>
        </div>
        {/* <div
          className="relative flex flex-col p-24 bg-fixed bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/space.webp)" }}
        >
          <span className="text-h1 mb-10 text-center text-white">
            MEET THE TEAM
          </span>
          <div>
            <BlockCardGroup cards={OurTeamData} />
          </div>
        </div> */}
      </div>
    </main>
  );
}
