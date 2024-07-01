import React from "react";
import styles from "./ProjectsSection.module.css";

import geography_minigames from "../../../public/assets/images/geography_minigames.png";
import kitchen_chaos from "../../../public/assets/images/kitchen_chaos.png";
import placeholder from "/public/assets/images/placeholder.jpg";

import kids_cookies from "/public/assets/images/kids-cookies.png";
import the_fba_machine from "/public/assets/images/thefbamachine.png";
import coffee_shop from "/public/assets/images/coffee_shop.png";
import spotify_clone from "/public/assets/images/spotify-clone.png";

import { Observer } from "@/utils/observer";
import { ProjectData } from "@/components/interfaces/ProjectData";
import ProjectElement from "./project-element/ProjectElement";

function ProjectsSection() {
  const cbRef = Observer("projects");
  const projects: ProjectData[] = [
    {
      title: "The FBA machine",
      description: "The FBA Machine is a web portal that helps clients create and maintain their Amazon shops to earn money. The portal also allows for managing information about products, orders, and clients. Code link does not work, for security reasons.",
      technologies: [
        "React js",
        "Wordpress",
        "Node.js",
        "Express",
        "Sequlize",
        "MySQL",
        "Stripe",
        "Emailer",
        "Twilio",
          "Ubuntu",
            "Nginx",
          "TypeScript",
          "File System",
      ],
      githubLink: "#projects",
      liveDemoLink: "https://thefbamachine.co/",
      image: the_fba_machine,
    },
    {
      title: "Spotify clone",
      description:
        "This project demonstrates the design and implementation of a music streaming application's user interface, inspired by popular platforms like Spotify. The focus was on creating a clean, intuitive and visually appealing interface.",
      technologies: ["Next js", " Tailwind CSS", "Supabase"],
      githubLink: "#",
      liveDemoLink: "https://sdt413.github.io/SpotifyClone/",
      image: spotify_clone,
    },
    {
      title: "Coffee Shop",
      description:
        "Responsive coffee shop for training of commercial development with\n" +
        "React typescript, Redux Toolkit and Next.js. With Routes, React and custom hooks.\n" +
        "Shop follows the classic single application structure. Has implemented backend part\n" +
        "on Spring with postgreSql database. Custom written Rest API, services and\n" +
        "repositories.\n",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Spring",
        "PostgreSQL",
      ],
      githubLink: "#",
      liveDemoLink: "https://sdt413.github.io/CoffeeShop/",
      image: coffee_shop,
    },
  ];
  return (
    <div className={styles.projects} id="projects" ref={cbRef}>
      <div className={styles.projects_container}>
        <div className={styles.heading}>
          <h2 className={styles.header}>Projects</h2>
          <p className={styles.paragraph}>
            Each project is a unique piece of development
          </p>
        </div>
        {projects.map((project: ProjectData, index: number) => (
          <ProjectElement project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
