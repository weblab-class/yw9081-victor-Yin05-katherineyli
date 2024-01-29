import React from "react";
import "./Stats.css";
import revolvingCat from "./images/revolving_cat.gif";

const Stats = (props) => {
  if (
    props.userScores === null
  ) {
    return (
      <div className="statsContainer">
        <h1>Cat Count</h1>
        <h3>Arms: 0</h3>
        <h3>Legs: 0</h3>
        <h3>Core: 0</h3>
        <h3>Cardio: 0</h3>
        <h3>Total: 0</h3>
        <img src={revolvingCat} className="pt-5" />
      </div>
    );
  } else {
    const arm_cats = Math.floor(1 + props.userScores.arms / 20);
    const leg_cats = Math.floor(1 + props.userScores.legs / 20);
    const core_cats = Math.floor(1 + props.userScores.core / 20);
    const cardio_cats = Math.floor(1 + props.userScores.cardio / 20);
    const total_cats = arm_cats + leg_cats + core_cats + cardio_cats;

    return (
      <div className="statsContainer">
        <h1>Cat Count</h1>
        <h3>Arms: {arm_cats}</h3>
        <h3>Legs: {leg_cats}</h3>
        <h3>Core: {core_cats}</h3>
        <h3>Cardio: {cardio_cats}</h3>
        <h3>Total: {total_cats}</h3>
        <img src={revolvingCat} className="pt-5" />
      </div>
    );
  }
};

export default Stats;
