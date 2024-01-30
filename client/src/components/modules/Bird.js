import React from "react";
import { useState, useEffect } from "react";
import bird from "../modules/images/bird.gif";
import birdStill from "../modules/images/bird_still.png";
import birdStillOutline from "../modules/images/bird_still_outline.png"
import birdStill3 from "../modules/images/bird_still3.png"
import "./CenterStage.css";

const Bird = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <img
      src={hovered ? birdStill3 : bird}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bird"
    />
  );
};

export default Bird;
