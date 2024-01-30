import React from "react";
import NutTable from "./NutTable";
import { FaTrashAlt } from "react-icons/fa";
import { get, post } from "../../utilities";

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

  const deleteNutrition = (id) => {
    const query = { id: id };
    get("/api/deleteNutrition", query).then(() => {
      props.setNutritions(props.nutritions.filter((nutrition) => nutrition._id !== id));
    });
    var totalProtein = 0;
    for (let i = 0; i < props.calories.length; i++) {
      totalProtein += props.calories[i].protein_g;
    }
    const { core, arms, legs, cardio } = props.userScores;
    const body = {
      id: props.userId,
      theRequest: 1,
      newScores: {
        core: Math.max(core - totalProtein / 80, 0),
        arms: Math.max(arms - totalProtein / 80, 0),
        legs: Math.max(legs - totalProtein / 80, 0),
        cardio: Math.max(cardio - totalProtein / 80, 0),
      },
    };
    post("/api/scores", body).then((theIdScore) => {
      props.setUserScores(theIdScore.scores);
    });
  };

  // console.log(props.nutritions);
  console.log(props._id + " nutrition id");
  return (
    <div className="mb-4 border shadow-md bg-white w-full rounded-lg py-2 px-3 relative">
      <div className="flex justify-between">
        <p className="font-bold text-lg">{props.content}</p>
        <div className="flex items-center">
          <p className="mr-2">{`${numToMonth[props.date.slice(5, 7)]} ${props.date.slice(
            8,
            10
          )}`}</p>
          <button onClick={() => deleteNutrition(props._id)}>
            <FaTrashAlt />
          </button>
        </div>
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
