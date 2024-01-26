import React, { useState, useEffect } from "react";
import title from "./images/title3.gif"
import "./NavBar.css";

const Title = () => {
  return (
    <div>
      <img src={title} alt="loading..." className = "h-40" />
    </div>
  );
};

export default Title;
