import { IProject } from "../types";
import reactIcon from "../icons/react.svg";
import nextIcon from "../icons/next.svg";
import antIcon from "../icons/ant.svg";
import strapiIcon from "../icons/strapi.svg";
import swiperIcon from "../icons/swiper.svg";
import sassIcon from "../icons/sass.svg";
import reduxIcon from "../icons/redux.svg";
import googleIcon from "../icons/google.svg";
import emotionIcon from "../icons/emotion.png";
import tsIcon from "../icons/typescript.svg";

import saiaImg from "../images/saia.jpg";
import loialImg from "../images/loial.jpg";
import abraajImg from "../images/abraaj.jpeg";
import lmsImg from "../images/goit.jpg";
import mcluckImg from "../images/mcluck.jpg";
import pulszImg from "../images/pulsz.jpg";

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
    name: "LMS",
    slug: "lms",
    description:
      "LMS is a comprehensive platform designed to facilitate student education. It provides a centralized hub for students, offering a wide range of features and tools to enhance the learning experience. This LMS is tailored to cater to the specific needs of educational institutions, instructors, and students alike.",
    link: " https://www.edu.goit.global",
    images: {
      background: lmsImg,
      screenshots: [lmsImg],
    },
    technologies: [
      { id: "1", name: "Next", icon: nextIcon },
      { id: "8", name: "TypeScript", icon: tsIcon },
      { id: "6", name: "Redux", icon: reduxIcon },
      { id: "7", name: "Emotion", icon: emotionIcon },
      { id: "8", name: "GoogleAuth", icon: googleIcon },
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
      { id: "8", name: "TypeScript", icon: tsIcon },
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
