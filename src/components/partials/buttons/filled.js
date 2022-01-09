import React from "react";

import classes from "./buttons.module.css";

export const Filled = ({ text }) => {
  return (
    <div className={classes.filled}>
      <button>{text}</button>
    </div>
  );
};
