import { WithAdditionalClassname } from "@/shared/types";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  children: ReactNode;
} & WithAdditionalClassname;

export default function MainTitle({ children, className }: TitleProps) {
  const rootClasses = twMerge(
    classNames("uppercase text-4xl lg:text-6xl w-4/5 max-w-full	mb-8", className)
  );
  return <h1 className={rootClasses}>{children}</h1>;
}
