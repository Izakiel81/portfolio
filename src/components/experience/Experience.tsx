import React from "react";
import styles from "./Experience.module.css";
import ExperienceHeading from "@/components/experience/experience-heading/ExperienceHeading";
import TableColumn from "@/components/experience/table_column/TableColumn";
import { Observer } from "@/utils/observer";

const Experience = () => {
  const cbRef = Observer("experience");
  const educationData = [
    {
      date: "September 2020 - June 2024",
      heading:
        "College of communication and informatziation of State University of IT and Communications",
      description:
        "I studied software engineering for 4 years. During my studying I have build numerous application and had experience of work in the team",
    },
  ];
  const experienceData = [
    {
      date: "August 2021 - March 2023",
      heading: "Full-Stack Developer at MOD Partner - Ukraine",
      description:
        "Developed and maintained the organization's website, participated in the development of software for accounting charitable contributions, and provided technical support to staff and volunteers.",
    },
    {
      date: "September 2023 - June 2024",
      heading: "Full-Stack Developer at Daily Distro LLC - USA",
      description:
        "Developed and maintained the company's website and mobile application. Implemented new features and fixed bugs. Worked with a team of developers to create a new version of the website and mobile application.",
    },
  ];

  return (
    <div className={styles.container} id="experience" ref={cbRef}>
      <ExperienceHeading />
      <div className={styles.table_of_columns}>
        <TableColumn data={educationData} heading={"Education"} />
        <TableColumn data={experienceData} heading={"Experience"} />
      </div>
    </div>
  );
};

export default Experience;
