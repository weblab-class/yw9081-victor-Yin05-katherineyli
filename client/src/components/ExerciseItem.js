import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { get, post } from "../utilities";

//props: type, duration, date

const ExerciseItem = (props) => {
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

  const deleteExercise = (id, duration, type) => {
    const query = { id: id };
    get("/api/deleteExercise", query).then(() => {
      props.setExercises(props.exercises.filter((exercise) => exercise._id !== id));
    });
    const multiplier = duration / 60;
    const exerciseScores = props.exerciseToScores[type];
    let { exerciseCore, exerciseArms, exerciseLegs, exerciseCardio } = exerciseScores;
    exerciseCore *= multiplier;
    exerciseArms *= multiplier;
    exerciseLegs *= multiplier;
    exerciseCardio *= multiplier;
    const { core, arms, legs, cardio } = props.userScores;
    const body = {
      id: props.userId,
      theRequest: 1,
      newScores: {
        core: Math.max(core - exerciseCore, 0),
        arms: Math.max(arms - exerciseArms, 0),
        legs: Math.max(legs - exerciseLegs, 0),
        cardio: Math.max(cardio - exerciseCardio, 0),
      },
    };
    post("/api/scores", body).then((theIdScore) => {
      props.setUserScores(theIdScore.scores);
    });
  };

  return (
    <div className="flex items-center justify-between mb-2 border shadow-md bg-white rounded-lg h-12">
      <div className="ml-4 flex font-bold">{props.type}</div>
      <div className="flex items-center">
        <div className="mr-4">{`${Math.floor(props.duration / 60)} hr ${
          props.duration % 60
        } min`}</div>
        <div className="mr-4">
          {`${numToMonth[props.date.slice(5, 7)]} ${props.date.slice(8, 10)}`}
        </div>
        <button onClick={() => deleteExercise(props._id, props.duration, props.type)}>
          <FaTrashAlt className="mr-4" />
        </button>
      </div>
    </div>
  );
};

export default ExerciseItem;
