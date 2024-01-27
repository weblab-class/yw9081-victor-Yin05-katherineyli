import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities.js";
import Cat from "./Cat.js";
import floating_island from "./images/floating_island2.png";
import "./CenterStage.css";

const CenterStage = (props) => {
  const Oval = (x, a) => {
    return Math.sqrt(a * a - (((x - 340) * (x - 340)) / 90000) * a * a);
  };

  let catList = [];

  useEffect(() => {
    if (props.userId && props.userScores) {
      var images = document.querySelectorAll(".random-image");

      images.forEach(function (image) {
        // Generate random positions
        var randomX = 40 + Math.floor(Math.random() * 600); // Adjust 100 according to image width
        var randomY =
          220 -
          Oval(randomX, 16) +
          Math.floor(Math.random() * (Oval(randomX, 48) + Oval(randomX, 16))); // Adjust 100 according to image height

        // Apply random positions as inline styles
        image.style.left = randomX + "px";
        image.style.bottom = randomY + "px";
        image.style.display = "block";
      });
    }
  }, [props.userScores]);

  let catThing = null;
  if (props.userScores && props.userId) {
    for (var i = 0; i <= props.userScores.arms / 20; i++) {
      catList.push(1);
    }
    for (var i = 0; i <= props.userScores.legs / 20; i++) {
      catList.push(2);
    }
    for (var i = 0; i <= props.userScores.core / 20; i++) {
      catList.push(3);
    }
    for (var i = 0; i <= props.userScores.cardio / 20; i++) {
      catList.push(4);
    }
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    shuffleArray(catList);
    catThing = (
      <div class="random-images">
        {catList.map((catType) => (
          <Cat catType={catType} />
        ))}
      </div>
    );
  }

  return (
    <div class="relative h-160 w-160">
      <img src={floating_island} className="floatingIsland " />
      {catThing}
    </div>
  );
};

export default CenterStage;
