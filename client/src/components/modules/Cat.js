import React from "react";
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";
import cat4 from "./images/cat4.png";
import "./CenterStage.css";

/**
 * Cat returns the image for a single cat
 *
 * Proptypes
 * @param {int} catType
 */
const Cat = (props) => {
  if (props.catType === 1) {
    return <img src={cat1} class="random-image" />;
  }
  if (props.catType === 2) {
    return <img src={cat2} class="random-image" />;
  }
  if (props.catType === 3) {
    return <img src={cat3} class="random-image" />;
  }
  if (props.catType === 4) {
    return <img src={cat4} class="random-image" />;
  }
};

export default Cat;
