import React from "react";

import { Input, Filled } from "../components";

import classes from "../styles/login.module.css";

const Login = () => {
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <span className={classes.f_logo}>Logo</span>
        <span className={classes.l_logo}>here</span>
      </div>

      <div className={classes.sign_in}>
        <span>Sign in</span>
        <Input placeholder="Enter Email" />
        <Input placeholder="Enter Password" />
        <Filled text="Sign in" />
      </div>
    </div>
  );
};

export default Login;
