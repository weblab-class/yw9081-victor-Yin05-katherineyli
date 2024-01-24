import React, { useState, useEffect } from "react";
import floating_island from "./images/floating_island.png"
import panpan1 from "./images/panpan1.png"
import mochabear1 from "./images/mochabear1.png"
import pusheen1 from "./images/pusheen1.png"
import mochicat1 from "./images/mochicat1.png"
import "./CenterStage.css";

const CenterStage = () => {
  return (
    <div className = "container">
      <img src={floating_island} alt="Floating Island" className = "floatingIsland" />
      <img src={panpan1} alt="PanPan1" className = "panpan1" />
      <img src={mochabear1} alt="MochaBear1" className = "mochabear1" />
      <img src={pusheen1} alt="Pusheen1" className = "pusheen1" />
      <img src={mochicat1} alt="MochiCat1" className = "mochicat1" />
    </div>
  );
};

export default CenterStage;
