import React from "react";
import { useState, useEffect } from "react";
import newcat1 from "./images/newcat1.png";
import newcat2 from "./images/newcat2.png";
import newcat3 from "./images/newcat3.png";
import newcat4 from "./images/newcat4.png";
import outlinecat1 from "./images/outlinecat1.png";
import outlinecat2 from "./images/outlinecat2.png";
import outlinecat3 from "./images/outlinecat3.png";
import outlinecat4 from "./images/outlinecat4.png";
import meow1 from "./sounds/meow1.mp3";
import meow2 from "./sounds/meow2.mp3";
import meow3 from "./sounds/meow3.mp3";
import meow4 from "./sounds/meow4.mp3";
import meow5 from "./sounds/meow5.mp3";
import meow6 from "./sounds/meow6.mp3";
import CatInfo from "./CatInfo";
import "./CenterStage.css";

/**
 * Cat returns the image for a single cat
 *
 * Proptypes
 * @param {int} catType
 */
const Cat = (props) => {
  const [hovered, setHovered] = useState(false);
  let hasInteracted = false;
  function setInteracted() {
    hasInteracted = true;
  }

  // Event listeners to detect user interaction
  document.addEventListener("click", setInteracted);
  document.addEventListener("keydown", setInteracted);
  document.addEventListener("touchstart", setInteracted);

  useEffect(() => {
    console.log("CLICKED");
    const imageElement = document.getElementById("imageElement" + props.index);
    const sounds = [
      "1audioElement" + props.index,
      "2audioElement" + props.index,
      "3audioElement" + props.index,
      "4audioElement" + props.index,
      "5audioElement" + props.index,
      "6audioElement" + props.index,
    ];

    imageElement.addEventListener("mouseenter", function () {
      // Select a random sound
      const randomIndex = Math.floor(Math.random() * sounds.length);
      const randomSound = document.getElementById(sounds[randomIndex]);
      console.log("MUSIC!");
      // Play the selected sound
      if (randomSound && hasInteracted) {
        randomSound.play();
      }
    });
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  var zoom = 1.25 - (props.yCord / 56) * 0.45;
  let infoBar = null;
  infoBar = <CatInfo catType={props.catType} name={props.name} />;

  if (props.catType === 1) {
    return (
      <div class="random-image">
        <audio controls class="audio-player" id={"1audioElement" + props.index} muted autoplay>
          <source src={meow1} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"2audioElement" + props.index} muted autoplay>
          <source src={meow2} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"3audioElement" + props.index} muted autoplay>
          <source src={meow3} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"4audioElement" + props.index} muted autoplay>
          <source src={meow4} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"5audioElement" + props.index} muted autoplay>
          <source src={meow5} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"6audioElement" + props.index} muted autoplay>
          <source src={meow6} type="audio/mp3" />
        </audio>
        <div style={{ position: "relative", width: zoom * 41 + "px", height: "100%" }}>
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat1 : newcat1}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id={"imageElement" + props.index}
          />
        </div>
      </div>
    );
  }
  if (props.catType === 2) {
    return (
      <div class="random-image">
        <audio controls class="audio-player" id={"1audioElement" + props.index} muted autoplay>
          <source src={meow1} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"2audioElement" + props.index} muted autoplay>
          <source src={meow2} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"3audioElement" + props.index} muted autoplay>
          <source src={meow3} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"4audioElement" + props.index} muted autoplay>
          <source src={meow4} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"5audioElement" + props.index} muted autoplay>
          <source src={meow5} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"6audioElement" + props.index} muted autoplay>
          <source src={meow6} type="audio/mp3" />
        </audio>
        <div style={{ position: "relative", width: zoom * 96 + "px", height: "100%" }}>
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat2 : newcat2}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id={"imageElement" + props.index}
          />
        </div>
      </div>
    );
  }
  if (props.catType === 3) {
    return (
      <div class="random-image">
        <audio controls class="audio-player" id={"1audioElement" + props.index} muted autoplay>
          <source src={meow1} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"2audioElement" + props.index} muted autoplay>
          <source src={meow2} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"3audioElement" + props.index} muted autoplay>
          <source src={meow3} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"4audioElement" + props.index} muted autoplay>
          <source src={meow4} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"5audioElement" + props.index} muted autoplay>
          <source src={meow5} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"6audioElement" + props.index} muted autoplay>
          <source src={meow6} type="audio/mp3" />
        </audio>
        <div style={{ position: "relative", width: zoom * 66 + "px", height: "100%" }}>
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat3 : newcat3}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id={"imageElement" + props.index}
          />
        </div>
      </div>
    );
  }
  if (props.catType === 4) {
    return (
      <div class="random-image">
        <audio controls class="audio-player" id={"1audioElement" + props.index} muted autoplay>
          <source src={meow1} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"2audioElement" + props.index} muted autoplay>
          <source src={meow2} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"3audioElement" + props.index} muted autoplay>
          <source src={meow3} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"4audioElement" + props.index} muted autoplay>
          <source src={meow4} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"5audioElement" + props.index} muted autoplay>
          <source src={meow5} type="audio/mp3" />
        </audio>
        <audio controls class="audio-player" id={"6audioElement" + props.index} muted autoplay>
          <source src={meow6} type="audio/mp3" />
        </audio>
        <div style={{ position: "relative", width: zoom * 53 + "px", height: "100%" }}>
          {hovered && infoBar}
          <img
            src={hovered ? outlinecat4 : newcat4}
            class="cat-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id={"imageElement" + props.index}
          />
        </div>
      </div>
    );
  }
};

export default Cat;
