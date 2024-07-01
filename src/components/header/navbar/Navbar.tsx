import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useVisual } from "@/hooks/useVisual";
import { useActions } from "@/hooks/useActions";

const Navbar = () => {
  const visual = useVisual();
  const { setActiveTab } = useActions();

  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const toggleExpansion = () => {
    isExpanded
      ? (document.getElementsByTagName("html")[0].style.overflow = "auto")
      : (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    setIsExpanded((prev: boolean) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {

  }, [visual.activeTab]);
  return (
    <>
      <nav className={styles.navbar}>
        {
          visual.activeTab === "home" ? <Link
              href="#home"
              className={styles.navbar_link_active}
              onClick={() => {
                setActiveTab("home");
              }}
          >
            Home
          </Link>
            :
            <Link
              href="#home"
              className={styles.navbar_link}
              onClick={() => {
                setActiveTab("home");
              }}
            >
                Home
            </Link>
        }
        {
          visual.activeTab === "about" ?
                <Link
                    href="#about"
                    className={styles.navbar_link_active}
                    onClick={() => {
                        setActiveTab("about");
                    }}
                >
                    About
                </Link>
              :
              <Link
                  href="#about"
                  className={styles.navbar_link}
                  onClick={() => {
                    setActiveTab("about");
                  }}
              >
                About
              </Link>
        }
        {
          visual.activeTab === "experience" ?
                <Link
                    href="#experience"
                    className={styles.navbar_link_active}
                    onClick={() => {
                        setActiveTab("experience");
                    }}
                >
                    Experience
                </Link>
              :
              <Link
                  href="#experience"
                  className={styles.navbar_link}
                  onClick={() => {
                    setActiveTab("experience");
                  }}
              >
                Experience
              </Link>
        }
        {
          visual.activeTab === "projects" ?
              <Link
                  href="#projects"
                  className={styles.navbar_link_active}
                  onClick={() => {
                    setActiveTab("projects");
                  }}
              >
                Projects
              </Link>
              :
              <Link
                  href="#projects"
                  className={styles.navbar_link}
                  onClick={() => {
                    setActiveTab("projects");
                  }}
              >
                Projects
              </Link>
        }
        {
          visual.activeTab === "contact" ?
              <Link
                  href="#contact"
                  className={styles.navbar_link_active}
                  onClick={() => {
                    setActiveTab("contact");
                  }}
              >
                Contact
              </Link>
              :
              <Link
                  href="#contact"
                  className={styles.navbar_link}
                  onClick={() => {
                    setActiveTab("contact");
                  }}
              >
                Contact
              </Link>
        }
      </nav>
      <div className={styles.burger} onClick={toggleExpansion}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <div
        className={styles.navbar_overlay}
        style={{ width: isExpanded ? "100%" : "0%" }}
      >
        <nav className={styles.navbar_mobile}>
          {
            visual.activeTab === "home" ? <Link
                    href="#home"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      setActiveTab("home");
                    }}
                >
                  Home
                </Link>
                :
                <Link
                    href="#home"
                    className={styles.navbar_link}
                    onClick={() => {
                      setActiveTab("home");
                    }}
                >
                  Home
                </Link>
          }
          {
            visual.activeTab === "about" ?
                <Link
                    href="#about"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      setActiveTab("about");
                    }}
                >
                  About
                </Link>
                :
                <Link
                    href="#about"
                    className={styles.navbar_link}
                    onClick={() => {
                      setActiveTab("about");
                    }}
                >
                  About
                </Link>
          }
          {
            visual.activeTab === "experience" ?
                <Link
                    href="#experience"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      setActiveTab("experience");
                    }}
                >
                  Experience
                </Link>
                :
                <Link
                    href="#experience"
                    className={styles.navbar_link}
                    onClick={() => {
                      setActiveTab("experience");
                    }}
                >
                  Experience
                </Link>
          }
          {
            visual.activeTab === "projects" ?
                <Link
                    href="#projects"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      setActiveTab("projects");
                    }}
                >
                  Projects
                </Link>
                :
                <Link
                    href="#projects"
                    className={styles.navbar_link}
                    onClick={() => {
                      setActiveTab("projects");
                    }}
                >
                  Projects
                </Link>
          }
          {
            visual.activeTab === "contact" ?
                <Link
                    href="#contact"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      setActiveTab("contact");
                    }}
                >
                  Contact
                </Link>
                :
                <Link
                    href="#contact"
                    className={styles.navbar_link}
                    onClick={() => {
                      setActiveTab("contact");
                    }}
                >
                  Contact
                </Link>
          }
        </nav>
      </div>
    </>
  );
};

export default Navbar;
