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
    if (window.innerWidth < 700) {
    isExpanded
      ? (document.getElementsByTagName("html")[0].style.overflow = "auto")
      : (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    setIsExpanded((prev: boolean) => !prev);
    }
  };

  const handleNavigation = (tab: "home" | "about" | "experience" | "projects" | "contact") => {
    toggleExpansion();
    setActiveTab(tab);
  };
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
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
                handleNavigation("home");
              }}
          >
            Home
          </Link>
            :
            <Link
              href="#home"
              className={styles.navbar_link}
              onClick={() => {
                handleNavigation("home");
              }}
            >
                Home
            </Link>
        }
        {/* {
          visual.activeTab === "about" ?
                <Link
                    href="#about"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      handleNavigation("about");
                    }}
                >
                    About
                </Link>
              :
              <Link
                  href="#about"
                  className={styles.navbar_link}
                  onClick={() => {
                    handleNavigation("about");
                  }}
              >
                About
              </Link>
        } */}
        {
          visual.activeTab === "experience" ?
                <Link
                    href="#experience"
                    className={styles.navbar_link_active}
                    onClick={() => {
                      handleNavigation("experience");
                    }}
                >
                    Experience
                </Link>
              :
              <Link
                  href="#experience"
                  className={styles.navbar_link}
                  onClick={() => {
                    handleNavigation("experience");
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
                    handleNavigation("projects");
                  }}
              >
                Projects
              </Link>
              :
              <Link
                  href="#projects"
                  className={styles.navbar_link}
                  onClick={() => {
                    handleNavigation("projects");
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
                    handleNavigation("contact");
                  }}
              >
                Contact
              </Link>
              :
              <Link
                  href="#contact"
                  className={styles.navbar_link}
                  onClick={() => {
                    handleNavigation("contact");
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
                      handleNavigation("home");
                    }}
                >
                  Home
                </Link>
                :
                <Link
                    href="#home"
                    className={styles.navbar_link}
                    onClick={() => {
                      handleNavigation("home");
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
                      handleNavigation("about");
                    }}
                >
                  About
                </Link>
                :
                <Link
                    href="#about"
                    className={styles.navbar_link}
                    onClick={() => {
                      handleNavigation("about");
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
                      handleNavigation("experience");
                    }}
                >
                  Experience
                </Link>
                :
                <Link
                    href="#experience"
                    className={styles.navbar_link}
                    onClick={() => {
                      handleNavigation("experience");
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
                      handleNavigation("projects");
                    }}
                >
                  Projects
                </Link>
                :
                <Link
                    href="#projects"
                    className={styles.navbar_link}
                    onClick={() => {
                      handleNavigation("projects");
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
                      handleNavigation("contact");
                    }}
                >
                  Contact
                </Link>
                :
                <Link
                    href="#contact"
                    className={styles.navbar_link}
                    onClick={() => {
                      handleNavigation("contact");
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
