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
  const nameList = ["viCATor", "CATerine", "yiMEOW", "CATlyn", "PURRcell", "oCATavious", "MEWton"];
  const name = nameList[Math.floor(nameList.length * Math.random())];
  if (props.catType === 1) {
    text = "Arms cat:";
  }
  if (props.catType === 2) {
    text = "Legs cat:";
  }
  if (props.catType === 3) {
    text = "Core cat:";
  }
  if (props.catType === 4) {
    text = "Cardio cat:";
  }
  return (
    <div class="cat-info">
      <p>{text}</p>
      <p>{name}</p>
    </div>
  );
};

export default CatInfo;
