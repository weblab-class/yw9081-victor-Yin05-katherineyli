import React, { useState } from "react";
import { post } from "../utilities";

//props: exercises, setExercises

const NewExercise = (props) => {
  const [inputExercise, setInputExercise] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputHours, setInputHours] = useState(0);
  const [inputMin, setInputMin] = useState(0);


  const addExercise = () => {
    const inputDuration = inputHours * 60 + inputMin * 1;
    if (inputExercise !== "" && inputDuration !== 0 && inputDate !== "") {
      var body = {
        id: props.userId,
        type: inputExercise,
        duration: inputDuration,
        date: inputDate,
      };
      post("/api/exercises", body).then((exercise) => {
        props.setExercises([exercise].concat(props.exercises));
      });

      const multiplier = inputDuration / 60;
      const exerciseScores = props.exerciseToScores[inputExercise];
      let { exerciseCore, exerciseArms, exerciseLegs, exerciseCardio } = exerciseScores;
      exerciseCore *= multiplier;
      exerciseArms *= multiplier;
      exerciseLegs *= multiplier;
      exerciseCardio *= multiplier;
      const { core, arms, legs, cardio } = props.userScores;
      body = {
        id: props.userId,
        theRequest: 1,
        newScores: {
          core: exerciseCore + core,
          arms: exerciseArms + arms,
          legs: exerciseLegs + legs,
          cardio: exerciseCardio + cardio,
        },
      };
      post("/api/scores", body).then((theIdScore) => {
        props.setUserScores(theIdScore.scores);
      });

      setInputDate("");
      setInputExercise("");
      setInputHours(0);
      setInputMin(0);
    }
  };

  return (
    <div className="bg-white relative mt-4 w-1/4 h-72 flex-col flex rounded-lg shadow-md">
      <div className="flex items-center justify-between bg-gray-100 p-4 h-14 rounded-t-lg text-xl">
        <div className="flex items-center font-semibold">New Exercise</div>
      </div>
      <div className="flex items-center ml-4 mt-3">
        Select exercise:
        <select
          value={inputExercise}
          onChange={(e) => setInputExercise(e.target.value)}
          className="p-2 ml-3 rounded-lg grow mr-4 border border-gray-200 hover:bg-gray-100"
        >
          <option value=""></option>
          <option value="Badminton">Badminton</option>
          <option value="Pushups">Pushups</option>
          <option value="Situps">Situps</option>
          <option value="Run">Run</option>
          <option value="Squats">Squats</option>
          <option value="Jumping jacks">Jumping jacks</option>
        </select>
      </div>
      <div className="flex items-center ml-4 mt-3">
        Select duration:
        <input
          type="number"
          min="0"
          max="2"
          className="p-2 ml-3 rounded-lg grow border border-gray-200 hover:bg-gray-100"
          value={inputHours}
          onChange={(e) => setInputHours(e.target.value)}
        ></input>
        <p className="mx-2">hr</p>
        <input
          type="number"
          min="0"
          max="59"
          className="p-2 rounded-lg grow border border-gray-200 hover:bg-gray-100"
          value={inputMin}
          onChange={(e) => setInputMin(e.target.value)}
        ></input>
        <p className="mr-4 ml-2">min</p>
      </div>
      <div className="flex items-center ml-4 mt-3">
        Select date:
        <input
          onChange={(e) => setInputDate(e.target.value)}
          value={inputDate}
          type="date"
          className="p-2 ml-3 rounded-lg grow mr-4 border border-gray-200 hover:bg-gray-100"
        ></input>
      </div>

      <button
        onClick={addExercise}
        className="flex absolute bottom-4 bg-gray-200 rounded-lg w-11/12 mx-4 h-10 items-center justify-center hover:bg-gray-300"
      >
        Add
      </button>
    </div>
  );
};

export default NewExercise;
