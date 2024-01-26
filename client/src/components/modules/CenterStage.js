import React, { useState, useEffect } from "react";
import floating_island from "./images/floating_island2.png";
import panpan1 from "./images/panpan1.png";
import mochabear1 from "./images/mochabear1.png";
import pusheen1 from "./images/pusheen1.png";
import mochicat1 from "./images/mochicat1.png";
import "./CenterStage.css";

const CenterStage = (props) => {
  var arms_pic = null; // Starter pics
  var legs_pic = null;
  var core_pic = null;
  var cardio_pic = null;

  if (props.userScores.arms <= 50) {
    arms_pic = panpan1;
  } else if (props.userScores.arms > 50 && props.userScores.arms <= 100) {
    arms_pic = panpan1;
  } else if (props.userScores.arms > 100) {
    arms_pic = panpan1;
  }

  if (props.userScores.legs <= 50) {
    legs_pic = mochabear1;
  } else if (props.userScores.legs > 50 && props.userScores.legs <= 100) {
    legs_pic = mochabear1;
  } else if (props.userScores.legs > 100) {
    legs_pic = mochabear1;
  }

  if (props.userScores.core <= 50) {
    core_pic = pusheen1;
  } else if (props.userScores.core > 50 && props.userScores.core <= 100) {
    core_pic = pusheen1;
  } else if (props.userScores.core > 100) {
    core_pic = pusheen1;
  }

  if (props.userScores.cardio <= 50) {
    cardio_pic = mochicat1;
  } else if (props.userScores.cardio > 50 && props.userScores.cardio <= 100) {
    cardio_pic = pusheen1;
  } else if (props.userScores.cardio > 100) {
    cardio_pic = pusheen1;
  }

  return (
    <div className="container">
      <img src={floating_island} alt="Floating Island" className="floatingIsland" />

      <img src={arms_pic} className="panpan1" />
      <img src={legs_pic} className="mochabear1" />
      <img src={core_pic} className="pusheen1" />
      <img src={cardio_pic} className="mochicat1" />
    </div>
  );
};

export default CenterStage;
