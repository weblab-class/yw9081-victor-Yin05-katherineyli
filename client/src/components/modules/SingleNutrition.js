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
      <p>{props.date}</p>
      <p>{props.content}</p>
      <p>{props.calories}</p>
    </div>
  );
};

export default SingleNutrition;
