import React from "react";

interface BlockTeaserProps {
  children: React.ReactNode;
  header: string;
  phrase: string;
  subheader: string;
}
export const BlockTeaser = ({
  children,
  header,
  phrase,
  subheader,
}: BlockTeaserProps) => {
  return (
    <div
      className="BlockTeaser bg-gray-dark lg:grid lg:grid-cols-10 relative"
      style={{ minHeight: "400px" }}
    >
      <div>
        <img
          className="BaseImage cover-bg object-contain lazyload"
          data-src="https://source.unsplash.com/pZ-XFIrJMtE/540x400"
          data-srcset="https://source.unsplash.com/pZ-XFIrJMtE/540x400"
          alt=""
          width="548"
          height="400"
          loading="lazy"
        />
      </div>
      <div className=" grid lg:col-start-2 lg:col-end-5 px-10 lg:px-0 lg:py-16 py-8">
        <div className="my-auto">
          <h2 className="text-subtitle">{phrase}</h2>
          <h3 className="text-h3 font-semibold tracking-normal lg:mt-2 mt-3">
            {header}
          </h3>
          <p className="text-body-md lg:mt-2 mt-4">{subheader}</p>
          <div className="my-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
