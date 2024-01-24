import React, { useState, useEffect } from "react";
import title from "./images/title2.gif"
import "./NavBar.css";

const Title = () => {
  return (
    <div>
      <img src={title} alt="loading..." className = "h-24" />
    </div>
  );
};

export default Title;
