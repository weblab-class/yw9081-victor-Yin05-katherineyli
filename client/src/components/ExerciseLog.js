import React from "react";
import ExerciseItem from "./ExerciseItem";

//props: exercises, setExercises

const ExerciseLog = (props) => {
  return (
    <div className="w-3/4 flex-col">
      <div className="font-semibold text-lg py-2 text-white">Exercise History</div>
      <div className="w-full h-72 overflow-auto">
        {props.exercises.map((exercise) => (
          <ExerciseItem
            type={exercise.type}
            duration={exercise.duration}
            date={exercise.date}
            _id={exercise._id}
            setExercises={props.setExercises}
            exercises={props.exercises}
            exerciseToScores={props.exerciseToScores}
            userScores={props.userScores}
            setUserScores={props.setUserScores}
            userId={props.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseLog;
