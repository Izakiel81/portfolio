import { FC, useState } from "react";
import styles from "./HomeSection.module.css";
import HTMLSVG from "./assets/svgs/HTMLSVG";
import CSSSVG from "./assets/svgs/CSSSVG";
import JSSVG from "./assets/svgs/JSSVG";
import ReactSVG from "./assets/svgs/ReactSVG";
import NodeJSSVG from "./assets/svgs/NodeJSSVG";
import TailwindSVG from "./assets/svgs/TailwindSVG";
import SCSSSVG from "./assets/svgs/SCSSSVG";
import NextJSSVG from "./assets/svgs/NextJSSVG";
import TSSVG from "./assets/svgs/TSSVG";
import { Observer } from "@/utils/observer";
import SQLSVG from "./assets/svgs/SQLSVG";
import SupabaseSVG from "./assets/svgs/SupabaseSVG";
import MongoDBSVG from "./assets/svgs/MongoDBSVG";
import DockerSVG from "./assets/svgs/DockerSVG";
import UnitySVG from "./assets/svgs/UnitySVG";
import TensorFlowSVG from "./assets/svgs/TensorFlowSVG";
import JavaSpringSVG from "./assets/svgs/JavaSpringSVG";
import PopupModal from "@/components/home-section/popup-form/PopupModal";
import ContactForm from "@/components/home-section/popup-form/contact-form/ContactForm";
import HireForm from "@/components/home-section/popup-form/hire-form/HireForm";

const HomeSection: FC = ({}) => {
  const cbRef = Observer("home");
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [showHireForm, setShowHireForm] = useState<boolean>(false);

  return (
      <section className={styles.home} id={styles.home} ref={cbRef}>
          {
              showHireForm && (
                    <PopupModal>
                        <HireForm setShowHireForm={setShowHireForm} />
                    </PopupModal>
              )
          }
            {
                showContactForm && (
                    <PopupModal>
                        <ContactForm setShowHireForm={setShowContactForm} />
                    </PopupModal>
                )
            }
        <div className={styles.home_content}>
          <h1 className={styles.header1}>
            Hi, I am <span>Maksym Habinskyi</span>
          </h1>
          <div className={styles.text_animate}>
            <h3 className={styles.header3}>Fullstack Developer</h3>
          </div>
          <p className={styles.paragraph}>
            I am a fullstack developer from Ukraine, located in Germany.
          </p>
          <div className={styles.btn_box}>
            <button className={styles.btn} onClick={() => setShowHireForm(true)}>
              Hire Me
            </button>
              <button className={styles.btn} onClick={() => setShowContactForm(true)}>
              Contact Me
            </button>
          </div>
        </div>
        <div className={styles.home_img}></div>

      <div className={styles.tech_stack}>
        Tech stack |
        <div className={styles.tech_stack_items_container}>
          <span className={styles.tech_stack_item}>
            <HTMLSVG className={styles.icon} />{" "}
            <CSSSVG className={styles.icon} />
          </span>
          <span className={styles.tech_stack_item}>
            <JSSVG className={styles.icon} />
            <TSSVG
              className={styles.icon}
              style={{ transform: "scale(0.9)" }}
            />
          </span>
          <span className={styles.tech_stack_item}>
            <ReactSVG className={styles.icon} />
            <NextJSSVG className={styles.icon} />
            <NodeJSSVG className={styles.icon} />
            <JavaSpringSVG className={styles.icon} />
          </span>
          <span className={styles.tech_stack_item}>
            <TailwindSVG className={styles.icon} />
            <SCSSSVG className={styles.icon} />
          </span>
          <span className={styles.tech_stack_item}>
            <SQLSVG className={styles.icon} />
            <MongoDBSVG className={styles.icon} />
            <SupabaseSVG className={styles.icon} />
            <DockerSVG className={styles.icon} />
          </span>
        </div>
      </div>
        <div className={styles.home_sci}>
          <a href="https://wa.me/491603271478" className={styles.sci_link}>
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://t.me/Izakiel81" className={styles.sci_link}>
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://github.com/Izakiel81" className={styles.sci_link}>
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/maksym-habinskyi-ab2098280/" className={styles.sci_link}>
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </section>
  );
};

export default HomeSection;
