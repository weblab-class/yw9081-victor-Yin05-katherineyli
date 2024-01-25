import React from "react";
import Title from "../modules/Title.js";
import CenterStage from "../modules/CenterStage.js";

function Home(props) {
  return (
    <div>
      <div className = "flex justify-center items-center">
        <h4>welcome to</h4>
      </div>
      <div className="text-5xl flex justify-center h-20 items-center">
        <Title />
      </div>
      <div className = " flex justify-center items-center">
        <h4>the one-stop shop for all your fitness needs!</h4>
      </div>
      <div className="flex flex-grow justify-center items-center">
        <CenterStage userId = {props.userId} userScores = {props.userScores}/>
      </div>
      <div className = " flex justify-center items-center">
        <h4>log an exercise to get started</h4>
      </div>
    </div>
  );
}

export default Home;
