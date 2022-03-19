import React from "react";
import MiniPlayer from "../MiniPlayer";
import Answer from "../Quiz/Answer";
import ProgressBar from "../Quiz/ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Films</h1>
      <h4>Question can have multiple answers</h4>

      <Answer />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
