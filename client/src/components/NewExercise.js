import React, { useState } from "react";
import { post } from "../utilities";

//props: exercises, setExercises

const NewExercise = (props) => {
  const [inputExercise, setInputExercise] = useState("");
  const [inputDuration, setInputDuration] = useState(0);
  const [inputDate, setInputDate] = useState("");

  const exerciseToScores = {
    Badminton: {
      exerciseCore: 2,
      exerciseArms: 3,
      exerciseLegs: 0,
      exerciseCardio: 30,
    },
  };

  const handleInputExerciseChange = (event) => {
    const value = event.target.value;
    setInputExercise(value);
  };

  const handleInputDurationChange = (event) => {
    const value = event.target.value;
    setInputDuration(value);
  };

  const handleInputDateChange = (event) => {
    const value = event.target.value;
    setInputDate(value);
  };

  const addExercise = () => {
    if (inputExercise != "" && inputDuration != 0 && inputDate != "") {
      var body = {
        id: props.userId,
        type: inputExercise,
        duration: inputDuration,
        date: inputDate,
      };
      post("/api/exercise", body).then((exercise) => {
        props.setExercises([exercise].concat(props.exercises));
      });
      //inputExercise -> exerciseScores
      console.log(inputExercise);
      const exerciseScores = exerciseToScores[inputExercise];
      //put request
      console.log(exerciseScores);
      const { exerciseCore, exerciseArms, exerciseLegs, exerciseCardio } = exerciseScores;
      console.log(exerciseCore);
      console.log("next up is userscores");
      console.log(props.userScores);
      const { core, arms, legs, cardio } = props.userScores;

      console.log(core);
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
      setInputDuration(0);
      setInputExercise("");
    }
  };

  return (
    <div className="bg-white relative mt-4 w-1/4 h-72 flex-col flex rounded-lg shadow-md">
      <div className="flex items-center justify-between bg-gray-100 p-4 h-14 rounded-t-lg text-xl">
        <div className="flex items-center font-semibold">New Exercise</div>
        {/* <button className="hover:bg-gray-300 px-3 h-8 rounded-lg">Close</button> */}
      </div>
      <select
        value={inputExercise}
        onChange={handleInputExerciseChange}
        className="py-2 px-2 mt-3 mb-2 mx-4 rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        <option value="">Choose Exercise...</option>
        <option value="Badminton">Badminton</option>
        <option value="tennis">Tennis</option>
        <option value="soccer">Soccer</option>
      </select>
      <select
        value={inputDuration}
        onChange={handleInputDurationChange}
        className="py-2 px-2 my-1 mx-4 rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        <option value="">Select Duration...</option>
        <option value="15">15 min</option>
        <option value="30">30 min</option>
        <option value="60">60 min</option>
      </select>
      <input
        onChange={handleInputDateChange}
        value={inputDate}
        type="date"
        className="py-2 px-2 mt-2 mx-4 rounded-lg border border-gray-200 hover:bg-gray-100"
      ></input>
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
