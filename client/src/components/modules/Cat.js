import React from "react";
import { useState, useEffect } from "react";
import newcat1 from "./images/newcat1.png";
import newcat2 from "./images/newcat2.png";
import newcat3 from "./images/newcat3.png";
import newcat4 from "./images/newcat4.png";
import outlinecat1 from "./images/outlinecat1.png";
import outlinecat2 from "./images/outlinecat2.png";
import outlinecat3 from "./images/outlinecat3.png";
import outlinecat4 from "./images/outlinecat4.png";
import CatInfo from "./CatInfo";
import "./CenterStage.css";

/**
 * Cat returns the image for a single cat
 *
 * Proptypes
 * @param {int} catType
 */
const Cat = (props) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
    console.log("IN");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    console.log("OUT");
  };

  let infoBar = null;
  infoBar = <CatInfo catType={props.catType} />;
  if (props.catType === 1) {
    return (
      <div class="random-image">
        <div class="cat-container1">
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat1 : newcat1}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    );
  }
  if (props.catType === 2) {
    return (
      <div class="random-image">
        <div class="cat-container2">
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat2 : newcat2}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    );
  }
  if (props.catType === 3) {
    return (
      <div class="random-image">
        <div class="cat-container3">
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat3 : newcat3}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    );
  }
  if (props.catType === 4) {
    return (
      <div class="random-image">
        <div class="cat-container4">
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat4 : newcat4}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            class="cat-image"
          />
        </div>
      </div>
    );
  }
};

export default Cat;
