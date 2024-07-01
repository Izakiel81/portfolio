import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import { useVisual } from "@/hooks/useVisual";
import { useActions } from "@/hooks/useActions";
import { setTimeout } from "timers";
import { Observer } from "@/utils/observer";
import ResumeReaderPopUp from "./resume-reader-pop-up/ResumeReaderPopUp";

const About = () => {
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const [isReading, setIsReading] = useState<boolean>(false);

  useEffect(() => {
    const body = document.getElementsByTagName("html")[0];
    if (isReading) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isReading]);

  const toggleBlink = () => {
    if (isAnimated) {
      return;
    }
    setIsAnimated(true);
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 1000);
    setTimeout(() => {
      setIsAnimated(false);
    }, 2000);
  };
  const cbRef = Observer("about");
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>
        About <span>Me</span>
      </h2>
      <div
        className={classNames(styles.about_img, isBlinking ? styles.blink : "")}
        onClick={toggleBlink}
      >
        <div className={classNames(styles.eyelid, styles.top)}></div>
        <div className={styles.pupil}></div>
        <div className={classNames(styles.eyelid, styles.bottom)}></div>
        <span className={styles.circle_spin}></span>
      </div>

      <div className={styles.about_content}>
        <h3 className={styles.header3}>Fullstack Developer</h3>
        <p className={styles.paragraph}>
          I have 1 year of experience with react, wordpress, node.js, CSS and Tailwind CSS 
        </p>
      </div>
      {isReading && <ResumeReaderPopUp onClose={() => setIsReading(false)} />}
    </section>
  );
};

export default About;
