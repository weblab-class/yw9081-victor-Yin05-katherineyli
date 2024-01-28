import React from "react";
import { useState, useEffect } from "react";
import "./CenterStage.css";

/**
 * Cat returns the image for a single cat
 *
 * Proptypes
 * @param {int} catType
 */
const CatInfo = (props) => {
  var text = "";
  if (props.catType === 1) {
    text = "Arms Cat";
  }
  if (props.catType === 2) {
    text = "Legs Cat";
  }
  if (props.catType === 3) {
    text = "Core Cat";
  }
  if (props.catType === 4) {
    text = "Cardio Cat";
  }
  return (
    <div class="cat-info">
      <p>{text}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default CatInfo;
