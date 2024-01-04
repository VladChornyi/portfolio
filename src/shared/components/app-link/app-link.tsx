"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  activeClass?: string;
};

export function AppLink({
  children,
  className,
  activeClass = "",
  href,
  ...props
}: AppLinkProps) {
  const pathName = usePathname();
  const isActive = pathName.endsWith(href.toLocaleLowerCase());
  const rootClasses = twMerge(
    classNames("text-xl", className, {
      [activeClass]: isActive,
    })
  );

  return (
    <Link className={rootClasses} href={href.toLocaleLowerCase()} {...props}>
      {children}
    </Link>
  );
}
