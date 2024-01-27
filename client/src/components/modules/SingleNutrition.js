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
  const numToMonth = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  console.log("In single nutrition the type of date is " + typeof props.date);
  return (
    <div className="mb-4 border shadow-md bg-white w-full rounded-lg py-2 px-4">
      <div className="flex justify-between">
        <p className="font-bold text-lg">{props.content}</p>
        <p>{`${numToMonth[props.date.slice(5, 7)]} ${props.date.slice(8, 10)}`}</p>
      </div>
      {/* <p>Date: {props.date}</p>
      <p>Food logged: {props.content}</p> */}
      <div>
        {props.calories.length ? (
          <div>
            {/* <p>Nutrition info is</p> */}
            <NutTable calories={props.calories} />
          </div>
        ) : (
          <p className="text-sm">No food detected</p>
        )}
      </div>
    </div>
  );
};

export default SingleNutrition;
