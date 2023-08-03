import React from "react";

import classes from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Wrapper;
