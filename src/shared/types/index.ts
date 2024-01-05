import { StaticImageData } from "next/image";

export type WithAdditionalClassname = {
  className?: string;
};

export interface IImage {
  background: StaticImageData;
  screenshots: StaticImageData[];
}

export interface ITechnology {
  id: string;
  name: string;
  icon: string;
}

export interface IProject {
  id: string;
  name: string;
  slug: string;
  description: string;
  link: string;
  images: IImage;
  technologies: ITechnology[];
}

export interface ISocial {
  id: string;
  name: string;
  link: string;
  icon: StaticImageData;
}
