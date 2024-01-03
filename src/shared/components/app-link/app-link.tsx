"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function AppLink({ children, className, ...props }: AppLinkProps) {
  const pathName = usePathname();
  return (
    <Link className={`ext-3xl font-bold ${className}`} {...props}>
      {children}
    </Link>
  );
}
