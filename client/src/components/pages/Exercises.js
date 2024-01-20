import React, { useState } from "react";
import NewExercise from "../NewExercise";
import ExerciseLog from "../ExerciseLog";

const Exercises = () => {
  const [showNewExercise, setShowNewExercise] = useState(false);

  const toggleNewExercise = () => {
    setShowNewExercise(true);
  };

  return (
    <div className="flex-col">
      <button onClick={toggleNewExercise} className="hover:bg-gray-200">
        Add Exercise
      </button>
      {/* <div>{showNewExercise && <NewExercise />}</div> */}
      <NewExercise />
      <ExerciseLog />
    </div>
  );
};

export default Exercises;
