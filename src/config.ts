import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://vishnkr.pages.dev/",
  author: "Vishwa Shankar",
  desc: "Exploring code, life, and everything in between.",
  title: "Vishwa Shankar",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/vishnkr",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vishwashankar",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:vishwas1020@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
