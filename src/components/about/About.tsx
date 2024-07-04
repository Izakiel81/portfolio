import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import { useVisual } from "@/hooks/useVisual";
import { useActions } from "@/hooks/useActions";
import { setTimeout } from "timers";
import { Observer } from "@/utils/observer";
import ResumeReaderPopUp from "./resume-reader-pop-up/ResumeReaderPopUp";
import Link from "next/link";

const About = () => {
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const [isReading, setIsReading] = useState<boolean>(false);
  const path_to_pdf = process.env.NODE_ENV === 'production' ? "/portfolio-next/assets/documents/fullstack.pdf" : "/assets/documents/fullstack.pdf";
  
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
          I have 1 year of experience with react, wordpress, node.js, CSS and
          Tailwind CSS
        </p>
        <div className={classNames(styles.btn_box, styles.btns)} ref={cbRef}>
          <span className={styles.desktop_button}>
            <button onClick={() => setIsReading(true)} className={styles.btn}>
              Read More
            </button>
          </span>

          <span className={styles.mobile_link}>
            <Link href={path_to_pdf} target="_blank" download={path_to_pdf}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </span>
        </div>
      </div>
      {isReading && <ResumeReaderPopUp onClose={() => setIsReading(false)} />}
    </section>
  );
};

export default About;
