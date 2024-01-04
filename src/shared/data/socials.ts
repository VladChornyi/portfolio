import linkedin from "@/shared/icons/linkedin.svg";
import github from "@/shared/icons/github.svg";
import telegram from "@/shared/icons/telegram.svg";
import { ISocial } from "../types";

export const socials: ISocial[] = [
  {
    id: "1",
    name: "github",
    link: "https://github.com/VladChornyi",
    icon: github,
  },
  {
    id: "2",
    name: "linkedin",
    link: "https://www.linkedin.com/in/vlad-4ornyi/",
    icon: linkedin,
  },
  {
    id: "3",
    name: "telegram",
    link: "https://t.me/@Chornii_Vlad",
    icon: telegram,
  },
];
