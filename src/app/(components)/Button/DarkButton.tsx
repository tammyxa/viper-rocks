import React from "react";
import Link from "next/link";

interface DarkButtonProps {
  href: string; // Add href prop to specify the link URL
  children: React.ReactNode;
}

export const DarkButton = ({ href, children }: DarkButtonProps) => {
  return (
    <div className="p-5">
      <Link href={href} className="BaseButton text-contrast-none inline-block -dark">
        <span className="label block">
          <span className="label-text">{children}</span>
        </span>
      </Link>
    </div>
  );
};
