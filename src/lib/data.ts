import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/capital8.webp";
import rmtdevImg from "../public/consultorioMedrano.webp";
import wordanalyticsImg from "../public/ecommerceCanna.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Cannabis Medicinal Ecommerce",
    description:
      "Frontend optimization and backend creation. I worked using agile methodologies. May - Aug 2023.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Capital 8 - Crypto Exchange",
    description:
      "I worked as a frontend developer using github to communicate with the dev team. Jan - Feb 2022",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Medrano Medical Office",
    description:
      "In this project I worked as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. Mar - Jul 2021",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Financial Markets Trainer",
    location: "Liberty Trading Academy - Online",
    description:
      "Train people to be able to operate on investment and speculation assets in the international financial market. Aug 2020 - Present ",
    icon: React.createElement(FaReact),
    date: "2020",
  },
  {
    title: "High School Teacher",
    location: "Guillermo Kadle School - Ecuador",
    description:
      "Teach classes in chemistry, physics and also mathematics. Participation in interdisciplinary projects. Aug 2016 - Present ",
    icon: React.createElement(FaReact),
    date: "2016",
  },
] as const;

export const projectsData = [
  {
    title: "Crypto Exchange",
    description:
      "I worked as a front-end developer on this startup project for 3 months. Users can give public feedback.",
    tags: ["Pug.js", "Node.js", "MongoDB", "SCSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Doctor's office!",
    description:
      "Frontend development for medical services and business logic. I was the full-stack developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Fast Ecommerce!",
    description:
      "Fullstack app developed with Tailwind CSS and Styled Components, using React and Next.js framework, with MongoDB as the database.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "MySQL",
  "Framer Motion",
] as const;
