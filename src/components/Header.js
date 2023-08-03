import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes["main-title"]}>🌴 Far Away 🧳</h1>
    </header>
  );
};

export default Header;
