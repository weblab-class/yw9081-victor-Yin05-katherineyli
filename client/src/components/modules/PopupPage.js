import React from "react";
import "./PopupPage.css";
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";
import cat4 from "./images/cat4.png";

import { FaRunning } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";

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
            <img src={cat1} />
          </div>
          <div className="column">
            <h4>Legs</h4>
            <img src={cat2} className="image2" />
          </div>
          <div className="column">
            <h4>Core</h4>
            <img src={cat3} />
          </div>
          <div className="column">
            <h4> Cardio</h4>
            <img src={cat4} />
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