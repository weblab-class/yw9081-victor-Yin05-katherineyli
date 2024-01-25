import React, { useState, useEffect } from "react";
import NewExercise from "../NewExercise";
import ExerciseLog from "../ExerciseLog";
import { get } from "../../utilities";
//import { has } from "core-js/core/dict";

const Exercises = (props) => {
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const query = { id: props.userId };
    if (props.userId) {
      get("/api/exercises", query).then((exercisesObj) => {
        let reversedExercises = exercisesObj.reverse();
        setExercises(reversedExercises);
      });
    }
  }, [props.userId]);

  const toggleNewExercise = () => {
    setShowNewExercise(true);
  };

  if (!props.userId) {
    return <div>Log in before using Beast Mode Exercises</div>;
  }

  if (exercises.length === 0) {
    return (
      <div className="flex-col">
        <div className="w-64 h-16 text-3xl font-semibold flex items-center pl-4">Exercises</div>
        <div className="flex justify-center">
          <NewExercise
            userScores={props.userScores}
            setUserScores={props.setUserScores}
            exercises={exercises}
            setExercises={setExercises}
            userId={props.userId}
          />
        </div>
        <div className="flex grow justify-center mt-2 overflow-auto">No Exercises</div>
      </div>
    );
  }
  return (
    <div className="flex-col">
      <div className="w-64 h-16 text-3xl font-semibold flex items-center pl-4">Exercises</div>
      <div className="flex justify-center">
        {props.userId && (
          <NewExercise
            userScores={props.userScores}
            setUserScores={props.setUserScores}
            exercises={exercises}
            setExercises={setExercises}
            userId={props.userId}
          />
        )}
      </div>
      <div className="flex grow justify-center mt-2 overflow-auto">
        <ExerciseLog exercises={exercises} setExercises={setExercises} />
      </div>
      {/* <button onClick={toggleNewExercise} className="hover:bg-gray-200">
        Add Exercise
      </button> */}
      {/* <div>{showNewExercise && <NewExercise />}</div> */}
      {/* <NewExercise exercises={exercises} setExercises={setExercises} /> */}
      {/* <ExerciseLog exercises={exercises} setExercises={setExercises} /> */}
    </div>
  );
};

export default Exercises;
