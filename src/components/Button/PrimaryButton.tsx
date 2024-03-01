interface PrimaryButtonProps {
  children: string;
  href: string;
}

export const PrimaryButton = ({ children, href }: PrimaryButtonProps) => {
  return (
    <a
      href={href}
      className="BaseButton text-contrast-none inline-block -primary"
    >
      <span className="label block">
        <span className="label-text">{children}</span>
      </span>
    </a>
  );
};
