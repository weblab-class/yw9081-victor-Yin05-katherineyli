import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { get } from "../utilities";

//props: type, duration, date

const ExerciseItem = (props) => {
  const numToMonth = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const deleteExercise = (id) => {
    const query = { id: id };
    console.log("DELETE");
    //console.log(props.exercises.filter((exercise) => exercise._id !== id));
    get("/api/deleteExercise", query).then(() => {
      console.log("get finished");
      props.setExercises(props.exercises.filter((exercise) => exercise._id !== id));
    });
  };


  return (
    <div className="flex items-center justify-between mb-2 border shadow-md bg-white rounded-lg h-12">
      <div className="ml-4 flex font-bold">{props.type}</div>
      <div className="flex items-center">
        <div className="mr-4">{`${Math.floor(props.duration/60)} hr ${props.duration % 60} min`}</div>
        <div className="mr-4">
          {`${numToMonth[props.date.slice(5, 7)]} ${props.date.slice(8, 10)}`}
        </div>
        <button onClick={() => deleteExercise(props._id)}>
          <FaTrashAlt className="mr-4" />
        </button>
      </div>
    </div>
  );
};

export default ExerciseItem;
