import { WithAdditionalClassname } from "@/shared/types";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  children: ReactNode;
} & WithAdditionalClassname;

export default function MainTitle({ children, className }: TitleProps) {
  const rootClasses = twMerge(
    classNames("uppercase text-4xl lg:text-6xl w-4/5 max-w-full", className)
  );
  return (
    <h1 className={rootClasses}>
      <span className="bg-gradient-to-r  bg-clip-text from-green-500 to-violet-700 bg-left transparent-text">
        {children}
      </span>
    </h1>
  );
}
