import React from "react";
import NutTable from "./NutTable";

import { get } from "../../utilities";

/**
 * Nutrition is a component that renders nutrition log, calories info, and date of a nutrition input
 *
 * Proptypes
 * @param {string} creator_id
 * @param {int} date
 * @param {string} content
 * @param {Array} calories
 */
const SingleNutrition = (props) => {
  console.log("In single nutrition the type of date is " + typeof props.date);
  return (
    <div>
      <p>Date: {props.date}</p>
      <p>Food logged: {props.content}</p>
      <div>
        {props.calories.length ? (
          <div>
            <p>Nutrition info is</p>
            <NutTable calories={props.calories} />
          </div>
        ) : (
          <p>No food detected</p>
        )}
      </div>
    </div>
  );
};

export default SingleNutrition;
