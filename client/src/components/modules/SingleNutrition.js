import React from "react";
import { get } from "../../utilities";

/**
 * Nutrition is a component that renders nutrition log, calories info, and date of a nutrition input
 *
 * Proptypes
 * @param {string} creator_id
 * @param {int} date
 * @param {string} content
 * @param {int} calories
 */
const SingleNutrition = (props) => {
  return (
    <div>
      <p>The date is {props.date}</p>
      <p>The food is {props.content}</p>
      <p>Calories is {props.calories}</p>
    </div>
  );
};

export default SingleNutrition;
