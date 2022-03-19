import React from "react";
import classes from "../../styles/Answers.module.css";
import CheckBox from "./../signup/CheckBox";

const Answer = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} type="checkbox" text="New Hope 1" />
      {/* <label for="option1" class="answer">
        <input type="checkbox" id="option1" />A New Hope 1
      </label> */}
    </div>
  );
};

export default Answer;
