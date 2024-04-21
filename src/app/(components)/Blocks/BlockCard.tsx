import Image from "next/image";

interface BlockCardProps {
  title: string;
  name: string;
  text?: string;
  img?: string;
}

export const BlockCard = ({ title, name, text, img }: BlockCardProps) => {
  return (
    <div id="storyRoot" className="max-w-xl">
      <div className="shadow-jpl relative h-full bg-white">
        <div className="h-auto">
          <div>
            <div className="BaseImagePlaceholder dark-theme aspect-ratio-sixteen-nine ">
              <div>
                <Image
                  className="BaseImage object-cover lazyload"
                  src={img || "/astronaut.jpg"}
                  alt={name}
                  width="800"
                  height="400"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="text-jpl-red text-subtitle">{title}</div>
          <hr
            aria-hidden="true"
            className="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
          />
          <h3 className="mt-4 mb-2 text-h5">{name}</h3>
          <p className="text-body-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};
