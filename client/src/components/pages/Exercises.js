import React, { useState, useEffect } from "react";
import NewExercise from "../NewExercise";
import ExerciseLog from "../ExerciseLog";
import { get } from "../../utilities";
//import { has } from "core-js/core/dict";

const Exercises = (props) => {
  const [exercises, setExercises] = useState([]);

  const getExercises = () => {
    const query = { id: props.userId };
    if (props.userId) {
      get("/api/exercises", query).then((exercisesObj) => {
        setExercises(exercisesObj);
      });
    }
  };

  useEffect(() => {
    getExercises();
  }, [props.userId]);

  if (!props.userId) {
    return <div>Log in before using Beast Mode Exercises</div>;
  }

  if (exercises.length === 0) {
    return (
      <div className="flex-col">
        <div className="w-screen flex justify-center h-16 text-3xl font-semibold items-center">
          Exercises
        </div>
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
    <div className="flex-col grow">
      <div className="w-screen flex justify-center h-16 text-3xl font-semibold items-center">
        Exercises
      </div>
      <div className="flex justify-center">
        {props.userId && (
          <NewExercise
            userScores={props.userScores}
            setUserScores={props.setUserScores}
            exercises={exercises}
            setExercises={setExercises}
            userId={props.userId}
            getExercises={getExercises}
          />
        )}
      </div>
      <div className="flex grow justify-center mt-2 overflow-auto">
        <ExerciseLog exercises={exercises} setExercises={setExercises} />
      </div>
    </div>
  );
};

export default Exercises;
