import React from "react";
import ExerciseItem from "./ExerciseItem";

//props: exercises, setExercises

const ExerciseLog = (props) => {
  return (
    <div>
      <h1 className="bg-gray-100 font-semibold text-3xl py-2 px-4">Exercise Log</h1>
      {props.exercises.map((exercise) => (
        <ExerciseItem type={exercise.type} duration={exercise.duration} date={exercise.date} />
      ))}
    </div>
  );
};

export default ExerciseLog;
