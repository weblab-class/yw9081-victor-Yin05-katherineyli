import React, { useState, useEffect } from "react";
import NewExercise from "../NewExercise";
import ExerciseLog from "../ExerciseLog";
import { get } from "../../utilities";
import revolvingCat from "../modules/images/revolving_cat.gif"
//import { has } from "core-js/core/dict";

const Exercises = (props) => {
  const [exercises, setExercises] = useState([]);

  const exerciseToScores = {
    Badminton: {
      exerciseCore: 1,
      exerciseArms: 1,
      exerciseLegs: 1,
      exerciseCardio: 2,
    },
    Pushups: {
      exerciseCore: 1,
      exerciseArms: 4,
      exerciseLegs: 0,
      exerciseCardio: 0,
    },
    Situps: {
      exerciseCore: 4,
      exerciseArms: 0,
      exerciseLegs: 0,
      exerciseCardio: 1,
    },
    Run: {
      exerciseCore: 1,
      exerciseArms: 0,
      exerciseLegs: 1,
      exerciseCardio: 3,
    },
    Squats: {
      exerciseCore: 1,
      exerciseArms: 0,
      exerciseLegs: 4,
      exerciseCardio: 0,
    },
    "Jumping jacks": {
      exerciseCore: 0,
      exerciseArms: 0,
      exerciseLegs: 0,
      exerciseCardio: 5,
    },
  };

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
    return (
      <div className="h-screen flex items-center justify-center">
        <img src={revolvingCat} className="w-20 h-16" />
        <div className="absolute pt-24 text-white">
          Please log in to access your exercises page...
        </div>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="flex-col">
        <div className="w-screen flex justify-center h-16 text-3xl font-semibold items-center text-white">
          Exercise Log
        </div>
        <div className="flex justify-center">
          <NewExercise
            userScores={props.userScores}
            setUserScores={props.setUserScores}
            exercises={exercises}
            setExercises={setExercises}
            userId={props.userId}
            exerciseToScores={exerciseToScores}
          />
        </div>
        <div className="flex grow justify-center mt-2 overflow-auto text-white">No Exercises</div>
      </div>
    );
  }
  return (
    <div className="flex-col grow">
      <div className="w-screen flex justify-center h-16 text-3xl font-semibold items-center text-white">
        Exercise Log
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
            exerciseToScores={exerciseToScores}
          />
        )}
      </div>
      <div className="flex grow justify-center mt-2 overflow-auto">
        <ExerciseLog
          exercises={exercises}
          setExercises={setExercises}
          exerciseToScores={exerciseToScores}
          userScores={props.userScores}
          setUserScores={props.setUserScores}
          userId={props.userId}
        />
      </div>
    </div>
  );
};

export default Exercises;
