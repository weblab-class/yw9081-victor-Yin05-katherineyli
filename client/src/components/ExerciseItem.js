import React from "react";

//props: type, duration, date

const ExerciseItem = (props) => {
  return (
    <div className="my-2 mx-8 rounded-lg h-12 bg-gray-300">
      {props.type}
      {props.duration}
      {props.date}
    </div>
  );
};

export default ExerciseItem;
