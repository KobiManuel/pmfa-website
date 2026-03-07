"use client";

import React, { useState } from "react";
import styles from "./MenuIcon.module.css";

const MenuIcon = ({ handleMenuToggle, menuActive, setMenuActive }) => {
  return (
    <div className={styles.menuIcon}>
      <button
        className={
          menuActive
            ? `${styles.active} ${styles.menuButton}`
            : `${styles.menuButton}`
        }
        onClick={handleMenuToggle}
      >
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
      </button>
    </div>
  );
};

export default MenuIcon;
