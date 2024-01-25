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
      exerciseCardio: 0,
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
      const body = {
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
      const query = { id: props.userId };
      console.log(exerciseScores);
      const { exerciseCore, exerciseArms, exerciseLegs, exerciseCardio } = exerciseScores;
      console.log(exerciseCore);
      console.log("next up is userscores");
      console.log(props.userScores);
      const { core, arms, legs, cardio } = props.userScores;

      console.log(core);
      const body2 = {
        newScores: {
          core: exerciseCore + core,
          arms: exerciseArms + arms,
          legs: exerciseLegs + legs,
          cardio: exerciseCardio + cardio,
        },
      };
      // put("/api/scores", (query = query), (body = body2)).then((scores) => {
      //   props.setUserScores(scores.scores);
      // });

      //comment this out after put request is fixed
      props.setUserScores(body2["newScores"]);

      setInputDate("");
      setInputDuration(0);
      setInputExercise("");
    }
  };

  return (
    <div className="bg-white relative mt-4 w-1/2 h-72 flex-col flex rounded-lg border border-black">
      <div className="flex items-center justify-between bg-gray-100 p-4 h-12 rounded-t-lg">
        <div className="flex items-center font-semibold">New Exercise</div>
        {/* <button className="hover:bg-gray-300 px-3 h-8 rounded-lg">Close</button> */}
      </div>
      <select
        value={inputExercise}
        onChange={handleInputExerciseChange}
        className="py-1 mt-3 mb-2 mx-4 rounded-lg border border-gray-200"
      >
        <option value="">Choose Exercise...</option>
        <option value="Badminton">Badminton</option>
        <option value="tennis">Tennis</option>
        <option value="soccer">Soccer</option>
      </select>
      <select
        value={inputDuration}
        onChange={handleInputDurationChange}
        className="py-1 my-2 mx-4 rounded-lg border border-gray-200"
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
        className="py-1 my-2 mx-4 rounded-lg border border-gray-200"
      ></input>
      <button
        onClick={addExercise}
        className="flex absolute right-4 bottom-4 bg-gray-200 rounded-lg px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};

export default NewExercise;
