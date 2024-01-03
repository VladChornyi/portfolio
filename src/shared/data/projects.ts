import { IProject } from "../types";
import saiaIcon from "../icons/react.svg";
import saiaImg from "../images/saia.png";

export const projects: IProject[] = [
  {
    id: "1",
    name: "saia",
    description:
      "SAIA, short for the Swiss Astro Imaging Association, is a dedicated online space community built with Next.js. It's the perfect hub for space enthusiasts and stargazers, allowing them to share their mesmerizing space photos from various locations. SAIA provides a platform for members to showcase their stunning space photos, capturing constellations, planets, and more.",
    link: "https://saia.club",
    images: {
      background: saiaImg,
      screenshots: [saiaImg],
    },
    technologies: [{ id: "1", name: "React", icon: saiaIcon }],
  },
];
