import { IProject } from "../types";
import reactIcon from "../icons/react.svg";
import saiaImg from "../images/saia.png";
import loialImg from "../images/loial.png";
import abraajImg from "../images/abraaj.png";
import lmsImg from "../images/goit.png";
import mcluckImg from "../images/mcluck.png";
import pulszImg from "../images/pulsz.png";

export const projects: IProject[] = [
  {
    id: "1",
    name: "SAIA",
    description:
      "SAIA, short for the Swiss Astro Imaging Association, is a dedicated online space community built with Next.js. It's the perfect hub for space enthusiasts and stargazers, allowing them to share their mesmerizing space photos from various locations. SAIA provides a platform for members to showcase their stunning space photos, capturing constellations, planets, and more.",
    link: "https://saia.club",
    images: {
      background: saiaImg,
      screenshots: [saiaImg],
    },
    technologies: [{ id: "1", name: "React", icon: reactIcon }],
  },
  {
    id: "2",
    name: "Loial-Pro",
    description:
      "Loial is a sleek and efficient mobile application designed as a virtual wallet for all your loyalty cards. This Next.js website introduces the Loial app, highlighting its core features.",
    link: "https://loial.pro",
    images: {
      background: loialImg,
      screenshots: [loialImg],
    },
    technologies: [{ id: "1", name: "React", icon: reactIcon }],
  },
  {
    id: "3",
    name: "Abraaj-water(admin)",
    description:
      "The Abraaj Water Delivery App is designed to provide a seamless water delivery experience to customers in Kuwait. With over two decades of dedicated service, Abraaj Water is a trusted name in the industry. Our app ensures convenient access to our quality water products in various sizes suitable for homes, offices, and outdoor activities.",
    link: "https://ein-des-ein.com/projects/abraaj/",
    images: {
      background: abraajImg,
      screenshots: [abraajImg],
    },
    technologies: [{ id: "1", name: "React", icon: reactIcon }],
  },
  {
    id: "4",
    name: "LMS",
    description:
      "LMS is a comprehensive platform designed to facilitate student education. It provides a centralized hub for students, offering a wide range of features and tools to enhance the learning experience. This LMS is tailored to cater to the specific needs of educational institutions, instructors, and students alike.",
    link: " https://www.edu.goit.global",
    images: {
      background: lmsImg,
      screenshots: [lmsImg],
    },
    technologies: [{ id: "1", name: "React", icon: reactIcon }],
  },
  {
    id: "5",
    name: "McLuck",
    description:
      "McLuck.com is a social casino offering free online casino games to players who may live in regions without legalized real money gambling. Currently McLuck.com operates across all states in the US *aside from AL, GA, ID, NV, KY, & WA.",
    link: "https://www.mcluck.com",
    images: {
      background: mcluckImg,
      screenshots: [mcluckImg],
    },
    technologies: [{ id: "1", name: "React", icon: reactIcon }],
  },
  {
    id: "6",
    name: "Pulsz-Bingo",
    description:
      "Pulsz Bingo is viewed as one of the leaders in the social casino industry. This sweepstakes casino is truly an elite online gaming option, offering bingo and slot games from many of the business’ top software providers. ",
    link: "https://www.pulszbingo.com/",
    images: {
      background: pulszImg,
      screenshots: [pulszImg],
    },
    technologies: [{ id: "1", name: "React", icon: reactIcon }],
  },
];
