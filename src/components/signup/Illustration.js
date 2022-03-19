import React from "react";
import classes from "../../styles/Illustration.module.css";

const Illustration = ({ image }) => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="signup" />
    </div>
  );
};

export default Illustration;
