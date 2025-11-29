import About_Picture from "./About-Picture.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile from "./profile.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import mobile_icon from "./mobile-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import { StaticImageData } from "next/image";

export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
};

export const assets = {
  About_Picture,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  right_arrow_white,
  logo,
  mail_icon,
  mail_icon_dark,
  profile,
  download_icon,
  hand_icon,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  mobile_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const projects = [
  {
    title: "Skinstric AI - Virtual Internship",
    subtitle: "React, JavaScript, HTML, CSS",
    description:
      "Sleek AI facial analysis with camera capture and photo upload functionality.",
    image: "/work-1.png",
    github: "https://github.com/lucashawthorne/skinstric-ai-virtual-internship",
    demo: "https://skinstric-ai-virtual-internship.vercel.app/",
  },
  {
    title: "Ultraverse NFT Marketplace",
    subtitle: "React, JavaScript, HTML, CSS",
    description:
      "An incredible NFT Marketplace that displays a library of NFTs for sale through use of APIs.",
    image: "/work-2.png",
    github: "https://github.com/lucashawthorne/ultraverse-marketplace",
    demo: "https://lucashawthorne.github.io/ultraverse-marketplace/",
  },
  {
    title: "Netflix Clone",
    subtitle: "React, JavaScript, HTML, CSS",
    description:
      "A Netflix clone that features numerous arrays of current films based on different criteria.",
    image: "/work-3.png",
    github: "https://github.com/lucashawthorne/netflix-clone/",
    demo: "https://lucashawthorne.github.io/netflix-clone/",
  },
  {
    title: "Skinstric AI - Virtual Internship",
    subtitle: "React, JavaScript, HTML, CSS",
    description:
      "An comprehensive online library for numerous books, powered by React.",
    image: "/work-4.png",
    github: "https://github.com/lucashawthorne/react-online-library/",
    demo: "https://lucashawthorne.github.io/react-online-library/",
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "FES Institute Graduate 2025",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 10 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.figma,
  assets.git,
];
