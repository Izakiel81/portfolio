import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href="#home" className={styles.logo} >
        <Image className={styles.logo_image} src={logo} alt={""}></Image>
      </Link>
      <div className="bx bx-menu" id={styles.menu_icon}></div>
    </div>
  );
};

export default Logo;
