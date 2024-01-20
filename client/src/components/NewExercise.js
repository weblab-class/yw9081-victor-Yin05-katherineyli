import React, { useState } from "react";

const NewExercise = () => {
  const [inputExercise, setInputExercise] = useState("");

  const handleInputExerciseChange = (event) => {
    const value = event.target.value;
    setInputExercise(value);
  };

  return (
      <div className="bg-white relative w-72 h-72 flex-col flex rounded-lg border border-black">
        <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg">
          <h1 className="flex items-center">New Exercise</h1>
          <button className="hover:bg-gray-300 px-3 rounded-lg">Close</button>
        </div>
        <select className="py-1 my-2 mx-4">
          <option>Choose Exercise...</option>
          <option>Badminton</option>
          <option>Tennis</option>
          <option>Soccer</option>
        </select>
        <select className="py-1 my-2 mx-4">
          <option>Select Duration...</option>
          <option>15 min</option>
          <option>30 min</option>
          <option>60 min</option>
        </select>
        <input type="date" className="py-1 my-2 mx-4"></input>
        <button className="flex absolute right-4 bottom-4 bg-gray-200 rounded-lg px-4 py-2">Add</button>
      </div>
  );
};

export default NewExercise;
