import React, { FC } from "react";
import Image from "next/image";
import styles from "./ProjectElement.module.css";
import { ProjectData } from "@/components/interfaces/ProjectData";
import ArrowInSquareSVG from "../assets/ArrowInSquareSVG";
import GitHubSVG from "../assets/GitHubSVG";
import Link from "next/link";

type Props = {
    project: ProjectData;
}
const ProjectElement: FC<Props> = ({project}) => {
  return (
    <span className={styles.project_container}>
      <Link href={project.liveDemoLink as string}>
        <Image
          className={styles.project_img}
          src={project.image}
          alt="Project placeholder"
        />
      </Link>
      <div className={styles.project_info}>
        <h3 className={styles.project_title}>{project.title}</h3>
        <p className={styles.project_description}>
            {project.description}
        </p>
        <span className={styles.project_technologies}>
             {project.technologies.map((technology) => (
                <h3 key={technology} className={styles.project_technologies_item}>
                {technology}
                </h3>
            ))}
        </span>
        <span className={styles.project_links}>
          <div className={styles.project_link}>
            <Link className={styles.project_link_address} href={project.githubLink as string}>
                GitHub
            </Link>
            <span className={styles.project_link_icon}>
              <GitHubSVG className={styles.project_link_icon_svg} />
            </span>
          </div>
          <div className={styles.project_link}>
            <Link className={styles.project_link_address} href={project.liveDemoLink as string}>
                Live Demo
            </Link>
            <span className={styles.project_link_icon}>
              <ArrowInSquareSVG className={styles.project_link_icon_svg} />
            </span>
          </div>
        </span>
      </div>
    </span>
  );
};

export default ProjectElement;
