import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
