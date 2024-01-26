import React, { useState, useEffect } from "react";
import floating_island from "./images/floating_island2.png";
import panpan1 from "./images/panpan1.png";
import mochabear1 from "./images/mochabear1.png";
import pusheen1 from "./images/pusheen1.png";
import mochicat1 from "./images/mochicat1.png";
import "./CenterStage.css";

const CenterStage = (props) => {
  var arms_pic = null; // Starter pics
  var legs_pic = null;
  var core_pic = null;
  var cardio_pic = null;

  if (props.userScores.arms <= 50) {
    arms_pic = panpan1;
  } else if (props.userScores.arms > 50 && props.userScores.arms <= 100) {
    arms_pic = panpan1;
  } else if (props.userScores.arms > 100) {
    arms_pic = panpan1;
  }

  if (props.userScores.legs <= 50) {
    legs_pic = mochabear1;
  } else if (props.userScores.legs > 50 && props.userScores.legs <= 100) {
    legs_pic = mochabear1;
  } else if (props.userScores.legs > 100) {
    legs_pic = mochabear1;
  }

  if (props.userScores.core <= 50) {
    core_pic = pusheen1;
  } else if (props.userScores.core > 50 && props.userScores.core <= 100) {
    core_pic = pusheen1;
  } else if (props.userScores.core > 100) {
    core_pic = pusheen1;
  }

  if (props.userScores.cardio <= 50) {
    cardio_pic = mochicat1;
  } else if (props.userScores.cardio > 50 && props.userScores.cardio <= 100) {
    cardio_pic = pusheen1;
  } else if (props.userScores.cardio > 100) {
    cardio_pic = pusheen1;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".random-position");
    var image = container.querySelector("img");

    // Generate random position
    var randomX = Math.floor(Math.random() * 600);
    var randomY = Math.floor(Math.random() * 10);

    // Apply random position
    container.style.left = randomX + "px";
    container.style.top = randomY + "px";
  });
  document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".random-image");

    images.forEach(function (image) {
      // Generate random positions
      var randomX = Math.floor(Math.random() * 600); // Adjust 100 according to image width
      var randomY = 100 + Math.floor(Math.random() * 10); // Adjust 100 according to image height

      // Apply random positions as inline styles
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    });
  });

  return (
    <div class="relative h-160 w-160">
      <img src={floating_island} className="floatingIsland " />
      <div class="random-images">
        <img src={arms_pic} class="random-image" />
        <img src={legs_pic} class="random-image" />
      </div>
    </div>
  );
};

export default CenterStage;
