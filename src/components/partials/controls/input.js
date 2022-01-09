import React from "react";

import classes from "./controls.module.css";

export const Input = ({ icon, placeholder, ...props }) => {
  return (
    <div className={classes.input}>
      <input placeholder={placeholder} {...props} />
    </div>
  );
};
