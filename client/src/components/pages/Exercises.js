import React, { useState, useEffect } from "react";
import NewExercise from "../NewExercise";
import ExerciseLog from "../ExerciseLog";
import { get } from "../../utilities";

const Exercises = () => {
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    get("/api/exercises").then((exercises) => {
      setExercises(exercises);
    });
  }, []);

  const toggleNewExercise = () => {
    setShowNewExercise(true);
  };

  return (
    <div className="flex-col">
      <button onClick={toggleNewExercise} className="hover:bg-gray-200">
        Add Exercise
      </button>
      {/* <div>{showNewExercise && <NewExercise />}</div> */}
      <NewExercise exercises={exercises} setExercises={setExercises} />
      <ExerciseLog exercises={exercises} setExercises={setExercises} />
    </div>
  );
};

export default Exercises;
