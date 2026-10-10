import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export default function Link({
  href,
  children,
  className = "",
  external = false,
  ...rest
}: LinkProps) {
  const base =
    "relative inline-block text-current transition-opacity duration-200 " +
    "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left " +
    "after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out " +
    "hover:after:scale-x-100";

  return (
    <a
      href={href}
      className={`${base} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
