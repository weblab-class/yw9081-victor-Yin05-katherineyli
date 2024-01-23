import React from "react";
import ExerciseItem from "./ExerciseItem";

//props: exercises, setExercises

const ExerciseLog = (props) => {
  return (
    <div className="w-3/4 flex-col">
      <div className="font-semibold text-lg py-2">Exercise Log</div>
      <div className="w-full h-96 overflow-auto">
        {props.exercises.map((exercise) => (
          <ExerciseItem type={exercise.type} duration={exercise.duration} date={exercise.date} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseLog;