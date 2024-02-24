import React from "react";

interface DarkButtonProps {
  children: React.ReactNode;
}

export const DarkButton = ({ children }: DarkButtonProps) => {
  children;
  return (
    <div className="p-5">
      <a href="#" className="BaseButton text-contrast-none inline-block -dark">
        <span className="label block">
          <span className="label-text">{children}</span>
        </span>
      </a>
    </div>
  );
};
