interface SecondaryButtonProps {
  children: string;
  href?: string;
}

export const SecondaryButton = ({ children, href }: SecondaryButtonProps) => {
  return (
    <a
      href={href}
      className="BaseButton text-contrast-none inline-block -secondary"
    >
      <span className="label block">
        <span className="label-text">{children}</span>
      </span>
    </a>
  );
};
