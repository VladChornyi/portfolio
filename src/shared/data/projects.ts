import { IProject } from "../types";
import reactIcon from "../icons/react.svg";
import nextIcon from "../icons/next.svg";
import antIcon from "../icons/ant.svg";
import strapiIcon from "../icons/strapi.svg";
import swiperIcon from "../icons/swiper.svg";
import sassIcon from "../icons/sass.svg";
import reduxIcon from "../icons/redux.svg";
import googleIcon from "../icons/google.svg";
import tsIcon from "../icons/typescript.svg";
import gsapIcon from "../icons/gsap.svg";
import jsIcon from "../icons/js.svg";

import saiaImg from "../images/saia.jpg";
import loialImg from "../images/loial.jpg";
import abraajImg from "../images/abraaj.jpeg";
import lmsImg from "../images/goit.jpg";
import mcluckImg from "../images/mcluck.jpg";
import pulszImg from "../images/pulsz.jpg";
import smartImg from "../images/smart.jpeg";

export const projects: IProject[] = [
  {
    id: "1",
    name: "SAIA",
    slug: "saia",
    description:
      "SAIA, short for the Swiss Astro Imaging Association, is a dedicated online space community built with Next.js. It's the perfect hub for space enthusiasts and stargazers, allowing them to share their mesmerizing space photos from various locations. SAIA provides a platform for members to showcase their stunning space photos, capturing constellations, planets, and more.",
    link: "https://saia.club",
    images: {
      background: saiaImg,
      screenshots: [saiaImg],
    },
    technologies: [
      { id: "1", name: "Next", icon: nextIcon },
      { id: "3", name: "Strapi", icon: strapiIcon },
      { id: "4", name: "Swiper", icon: swiperIcon },
      { id: "5", name: "Sass", icon: sassIcon },
    ],
  },
  {
    id: "2",
    name: "Loial-Pro",
    slug: "loial",
    description:
      "Loial is a sleek and efficient mobile application designed as a virtual wallet for all your loyalty cards. This Next.js website introduces the Loial app, highlighting its core features.",
    link: "https://loial.pro",
    images: {
      background: loialImg,
      screenshots: [loialImg],
    },
    technologies: [
      { id: "1", name: "Next", icon: nextIcon },
      { id: "2", name: "Ant-design", icon: antIcon },
      { id: "5", name: "Sass", icon: sassIcon },
    ],
  },
  {
    id: "3",
    name: "Abraaj water(admin)",
    slug: "abraaj",
    description:
      "The Abraaj Water Delivery App is designed to provide a seamless water delivery experience to customers in Kuwait. With over two decades of dedicated service, Abraaj Water is a trusted name in the industry. Our app ensures convenient access to our quality water products in various sizes suitable for homes, offices, and outdoor activities.",
    link: "https://ein-des-ein.com/projects/abraaj/",
    images: {
      background: abraajImg,
      screenshots: [abraajImg],
    },
    technologies: [
      { id: "1", name: "React", icon: reactIcon },
      { id: "8", name: "TypeScript", icon: tsIcon },
      { id: "2", name: "Ant-design", icon: antIcon },
      { id: "5", name: "Sass", icon: sassIcon },
      { id: "6", name: "Redux", icon: reduxIcon },
    ],
  },
  {
    id: "4",
    name: "Smart Prospective",
    slug: "smart",
    description:
      "Smart Prospective is a solution for real-time display advertising campaigns. This platform captures and transforms your physical store traffic. Its goal is to help spread the targeted message at the right time and measure its impact. Users enjoy remote display control and AI-powered ad targeting.",
    link: "https://smartprospective.com/",
    images: {
      background: smartImg,
      screenshots: [smartImg],
    },
    technologies: [
      { id: "1", name: "JS", icon: jsIcon },
      { id: "9", name: "GSAP", icon: gsapIcon },
    ],
  },
  {
    id: "5",
    name: "McLuck",
    slug: "mcluck",
    description:
      "McLuck.com is a social casino offering free online casino games to players who may live in regions without legalized real money gambling. Currently McLuck.com operates across all states in the US *aside from AL, GA, ID, NV, KY, & WA.",
    link: "https://www.mcluck.com",
    images: {
      background: mcluckImg,
      screenshots: [mcluckImg],
    },
    technologies: [
      { id: "1", name: "Next", icon: nextIcon },
      { id: "9", name: "TypeScript", icon: tsIcon },
      { id: "5", name: "Sass", icon: sassIcon },
      { id: "6", name: "Redux", icon: reduxIcon },
      { id: "8", name: "Google Services", icon: googleIcon },
    ],
  },
  {
    id: "6",
    name: "Pulsz-Bingo",
    slug: "pulsz-bingo",
    description:
      "Pulsz Bingo is viewed as one of the leaders in the social casino industry. This sweepstakes casino is truly an elite online gaming option, offering bingo and slot games from many of the business’ top software providers. ",
    link: "https://www.pulszbingo.com/",
    images: {
      background: pulszImg,
      screenshots: [pulszImg],
    },
    technologies: [
      { id: "1", name: "Next", icon: nextIcon },
      { id: "8", name: "TypeScript", icon: tsIcon },
      { id: "5", name: "Sass", icon: sassIcon },
      { id: "6", name: "Redux", icon: reduxIcon },
      { id: "8", name: "Google Services", icon: googleIcon },
    ],
  },
];
