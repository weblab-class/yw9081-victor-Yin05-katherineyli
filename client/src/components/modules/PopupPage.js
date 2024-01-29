import React from "react";
import "./PopupPage.css";
import newcat1 from "./images/newcat1.png";
import newcat2 from "./images/newcat2.png";
import newcat3 from "./images/newcat3.png";
import newcat4 from "./images/newcat4.png";

import { FaRunning } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import bird2 from "./images/bird.gif";

// Note to self: for some reason the headings aren't working, but can individually style in css file ig

const PopupPage = () => {
  return (
    <div className="popupContainer">
      <div className="pb-5">
        <h1>How To Beast</h1>
      </div>
      <p>
        Beast Mode allows you to maintain a balanced workout routine by visualizing time spent on
        various muscle groups.
      </p>
      <div>
        <h3>Step 1: Meet your cats!</h3>
        <p>Every cat you see in your homepage represents a muscle group.</p>
        <div></div>
        <div className="row">
          <div className="column">
            <h4>Arms</h4>
            <img src={newcat1} className = "image1"/>
          </div>
          <div className="column">
            <h4>Legs</h4>
            <img src={newcat2} className="image1" />
          </div>
          <div className="column">
            <h4>Core</h4>
            <img src={newcat3} className = "image1" />
          </div>
          <div className="column">
            <h4> Cardio</h4>
            <img src={newcat4} className = "image1"/>
          </div>
        </div>
      </div>
      <h3>Step 2: Grow your cats!</h3>
      <div className="row">
        <div className="column2_left">
          <FaRunning className="w-12 h-12  text-black" />
        </div>
        <div className="column2_right">
          <p>
            Log your workouts to generate more cats! Exercising a certain muscle group (e.g., arms
            by doing pushups) will create more cats for that group. Likewise, neglecting a muscle
            group for some period of time will cause the cats for that group to disappear.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column2_left">
          <FaUtensils className="w-10 h-10 text-black" />
        </div>
        <div className="column2_right">
          <p>
            Log your meals to generate cats as well! Eating high-protein foods will increase the
            number of cats across all categories.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column2_left">
          <img src={bird2}  className="w-12"  />
        </div>
        <div className="column2_right ">
          <p>
            Click on Dave the bird to see how many cats you've collected for each muscle group. Dave
            is friendly and all-knowing---the perfect resource when you don't feel like counting!
          </p>
        </div>
      </div>
      <div>
        <h3>Step 3: Monitor your progress!</h3>
        <p>
          For a balanced workout, try to maintain equal populations of each type of cat. You'll
          quickly notice an imbalance across muscle groups when some types of cats begin to
          outnumber the others.
        </p>
      </div>
      <div>
        <h3>Step 4: Have fun!</h3>
        <p>You got this! As you exercise, know that your cats have your back. :3</p>
      </div>
    </div>
  );
};

export default PopupPage;
