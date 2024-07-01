import React from "react";
import Logo from "@/components/header/logo/Logo";
import Navbar from "@/components/header/navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
