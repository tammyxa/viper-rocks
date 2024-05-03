import Image from "next/image";

interface BlockTeaserProps {
  subtitle: string;
  title: string;
  body: string;
  buttonLabel: string;
  buttonLink: string;
  image: string;
  imageAlt: string;
}

export const BlockTeaser = ({
  subtitle,
  title,
  body,
  buttonLabel,
  buttonLink,
  image,
  imageAlt,
}: BlockTeaserProps) => {
  return (
    <div
      className="BlockTeaser bg-gray-light lg:grid lg:grid-cols-10 relative"
      style={{ minHeight: "400px" }}
    >
      <div>
        <Image
          className="BaseImage cover-bg object-contain lazyload"
          src={image}
          alt={imageAlt}
          width="548"
          height="400"
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className=" grid lg:col-start-2 lg:col-end-5 px-10 lg:px-0 lg:py-16 py-8">
        <div className="my-auto">
          <h2 className="text-subtitle">{subtitle}</h2>
          <h3 className="text-h3 font-semibold tracking-normal lg:mt-2 mt-3">
            {title}
          </h3>
          <p className="text-body-md lg:mt-2 mt-4">{body}</p>

          <a
            href={buttonLink}
            className="BaseButton text-contrast-none inline-block -primary mt-8"
          >
            <span className="label block">
              <span className="label-text">{buttonLabel}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
