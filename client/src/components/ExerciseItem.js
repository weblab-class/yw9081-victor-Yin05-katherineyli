import React from "react";

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
  return (
    <div className="flex items-center justify-between my-2 mx-8 rounded-lg h-12 bg-gray-300">
      <div className="ml-4 flex">{props.type}</div>
      <div className="flex items-center">
        <div className="mr-4">{`${props.duration} min`}</div>
        <div className="mr-4">
          {`${numToMonth[props.date.slice(5, 7)]} ${props.date.slice(8, 10)}`}
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
