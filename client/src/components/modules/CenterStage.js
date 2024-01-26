import React, { useState, useEffect } from "react";
import floating_island from "./images/floating_island2.png"
import panpan1 from "./images/panpan1.png"
import mochabear1 from "./images/mochabear1.png"
import pusheen1 from "./images/pusheen1.png"
import mochicat1 from "./images/mochicat1.png"
import "./CenterStage.css";

const CenterStage = (props) => {
  var arms_pic = panpan1 // Starter pics
  var legs_pic = mochabear1
  var core_pic = pusheen1
  var cardio_pic = mochicat1

  if(props.userScores.arms > 50 && props.userScores.arms <= 100){
    // arms_pic = Placeholder image 2
  } else if(props.userScores.arms > 100){
    // arms_pic = Placeholder image 3
  }

  if(props.userScores.legs > 50 && props.userScores.legs <= 100){
    // legs_pic = Placeholder image 2
  } else if(props.userScores.legs > 100){
    // legs_pic = Placeholder image 3
  }

  if(props.userScores.core > 50 && props.userScores.core <= 100){
    // core_pic = Placeholder image 2
  } else if(props.userScores.arms > 100){
    // core_pic = Placeholder image 3
  }

  if(props.userScores.cardio > 50 && props.userScores.cardio <= 100){
    // cardio_pic = Placeholder image 2
  } else if(props.userScores.arms > 100){
    // cardio_pic = Placeholder image 3
  }


  return (
    <div className = "container">
      <img src={floating_island} alt="Floating Island" className = "floatingIsland" />

      <img src={arms_pic} alt="PanPan1" className = "panpan1" />
      <img src={legs_pic} alt="MochaBear1" className = "mochabear1" />
      <img src={core_pic} alt="Pusheen1" className = "pusheen1" />
      <img src={cardio_pic} alt="MochiCat1" className = "mochicat1" />
    </div>
  );
};

export default CenterStage;
