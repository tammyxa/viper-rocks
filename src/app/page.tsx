import Image from "next/image";
import { DarkButton } from "./(components)/Button";
import {
  BlockAccordion,
  BlockCardGroup,
  BlockTeaser,
} from "./(components)/Blocks";
import { ContactUsForm } from "./(components)/Forms/ContactUsForm";
import FAQ from "@/data/faq.json";
// import OurTeamData from "@/data/ourTeam.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        id="home"
        className="flex justify-center items-center text-center"
        style={{ height: "75vh" }}
      >
        <div
          className="absolute h-full w-full bg-top bg-cover text-center"
          style={{ backgroundImage: "url(/moon-surface.webp)" }}
        ></div>
        <div className="absolute h-full w-full bg-center bg-cover bg-no-repeat bg-black z-1 opacity-40"></div>
        <div className="relative text-center flex flex-col">
          <span className="text-h1-alt text-white">VIPER ROCKS</span>
          <span className="text-h3 text-white">
            Citizen Scientists Needed. Sign up to identify moon rocks for Viper
            rover expeditions.
          </span>
          <DarkButton href="/Explore"> Explore </DarkButton>
        </div>
      </div>

      <div id="about-us" className="bg-black z-10">
        <div id="our-story" className="p-12 flex">
          <div className="justify-evenly align-center flex flex-col mx-24">
            <div>
              <span className="text-h2 text-white">OUR STORY</span>
              <span className="text-body-md flex justify-center items-center text-white">
                At Viper Rocks, we are passionate about exploring the wonders of
                the universe. Our mission is to bring the excitement of space
                exploration to everyone.
              </span>
            </div>
            <div>
              <span className="text-h2 text-white">OUR VALUES</span>
              <div className="flex justify-between w-full flex-wrap text-white">
                <div className="text-body-md">Curiosity</div>
                <div className="text-body-md">Innovation</div>
                <div className="text-body-md">Collaboration</div>
                <div className="text-body-md">Education</div>
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
      <div id="faq" className="px-24 py-12">
        <span className="text-h2 text-black text-center flex justify-center">
          Frequently Asked Questions
        </span>
        {FAQ.map((q, i) => (
          <BlockAccordion key={i} question={q.question} answer={q.answer} />
        ))}
      </div>
      <div id="contact-us" className="py-12 px-48">
        <div>
          <div className="flex justify-center flex-col mb-6">
            <div className="text-h2">Contact Us</div>
            <div className="text-body-sm">
              If you have any questions or need assistance, please don&apos;t
              hesitate to reach out. For the quickest response, fill out the
              form below, and we&apos;ll get back to you as soon as possible. To
              help us serve you better, we recommend using the email associated
              with your account.
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </main>
  );
}
