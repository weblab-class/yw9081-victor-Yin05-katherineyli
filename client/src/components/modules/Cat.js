import React from "react";
import newcat1 from "./images/newcat1.png";
import newcat2 from "./images/newcat2.png";
import newcat3 from "./images/newcat3.png";
import newcat4 from "./images/newcat4.png";
import "./CenterStage.css";

/**
 * Cat returns the image for a single cat
 *
 * Proptypes
 * @param {int} catType
 */
const Cat = (props) => {
  if (props.catType === 1) {
    return <img src={newcat1} class="random-image" />;
  }
  if (props.catType === 2) {
    return <img src={newcat2} class="random-image" />;
  }
  if (props.catType === 3) {
    return <img src={newcat3} class="random-image" />;
  }
  if (props.catType === 4) {
    return <img src={newcat4} class="random-image" />;
  }
};

export default Cat;
