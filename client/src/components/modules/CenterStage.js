import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities.js";
import Cat from "./Cat.js";
import floating_island from "./images/floating_island2.png";
import "./CenterStage.css";

const CenterStage = (props) => {
  const Oval = (x, a) => {
    return Math.sqrt(a * a - (((x - 340) * (x - 340)) / 90000) * a * a);
  };
  const [randomPositions, setRandomPositions] = useState(Array(100).fill({ x: 0, y: 0 }));

  useEffect(() => {
    if (props.userId && props.userScores) {
      var images = document.querySelectorAll(".random-image");
      var temp = [];
      images.forEach(function (image) {
        var randomX = 40 + Math.floor(Math.random() * 600);
        var randomY =
          220 -
          Oval(randomX, 16) +
          Math.floor(Math.random() * (Oval(randomX, 40) + Oval(randomX, 16)));
        temp.push({ x: randomX, y: randomY });
      });
      temp.sort((a, b) => {
        return b.y - a.y;
      });
      setRandomPositions(temp);
      let positionCount = 0;
      images.forEach(function (image) {
        // Generate random positions

        // Apply random positions as inline styles
        image.style.left = temp[positionCount].x + "px";
        image.style.bottom = temp[positionCount].y + "px";
        image.style.display = "block";
        positionCount++;
      });
    }
  }, [props.userScores]);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let catList = [];
  let catTypes = [];
  const nameList = ["viCATor", "CATerine", "yiMEOW", "CATlyn", "PURRcell", "oCATavious", "MEWton"];
  shuffleArray(nameList);
  let catThing = null;
  let catIndex = 0;
  if (props.userScores && props.userId) {
    for (var i = 0; i <= props.userScores.arms / 20; i++) {
      catTypes.push(1);
    }
    for (var i = 0; i <= props.userScores.legs / 20; i++) {
      catTypes.push(2);
    }
    for (var i = 0; i <= props.userScores.core / 20; i++) {
      catTypes.push(3);
    }
    for (var i = 0; i <= props.userScores.cardio / 20; i++) {
      catTypes.push(4);
    }
    shuffleArray(catTypes);
    for (var i = 0; i < catTypes.length; i++) {
      catList.push({
        catType: catTypes[i],
        name: nameList[i % nameList.length],
        yCord: randomPositions[i].y - 204,
      });
    }

    catThing = (
      <div class="random-images">
        {catList.map((aCat) => (
          <Cat catType={aCat.catType} name={aCat.name} yCord={aCat.yCord} />
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
