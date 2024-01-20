import React, { useState } from "react";

//props: exercises, setExercises

const NewExercise = (props) => {
  const [inputExercise, setInputExercise] = useState("");
  const [inputDuration, setInputDuration] = useState(0);
  const [inputDate, setInputDate] = useState("");

  const handleInputExerciseChange = (event) => {
    const value = event.target.value;
    setInputExercise(value);
  };

  const handleInputDurationChange = (event) => {
    const value = event.target.value;
    setInputDuration(value);
  };

  const handleInputDateChange = (event) => {
    const value = event.target.value;
    setInputDate(value);
  };

  const addExercise = () => {
    const newExercise = {
      type: inputExercise,
      duration: inputDuration,
      date: inputDate,
    };
    props.setExercises(props.exercises.concat(newExercise));
  };

  return (
    <div className="bg-white relative w-72 h-72 flex-col flex rounded-lg border border-black">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <h1 className="flex items-center">New Exercise</h1>
        <button className="hover:bg-gray-300 px-3 rounded-lg">Close</button>
      </div>
      <select value={inputExercise} onChange={handleInputExerciseChange} className="py-1 my-2 mx-4">
        <option value="">Choose Exercise...</option>
        <option value="Badminton">Badminton</option>
        <option value="tennis">Tennis</option>
        <option value="soccer">Soccer</option>
      </select>
      <select value={inputDuration} onChange={handleInputDurationChange} className="py-1 my-2 mx-4">
        <option value="">Select Duration...</option>
        <option value="15">15 min</option>
        <option value="30">30 min</option>
        <option value="60">60 min</option>
      </select>
      <input
        onChange={handleInputDateChange}
        value={inputDate}
        type="date"
        className="py-1 my-2 mx-4"
      ></input>
      <button
        onClick={addExercise}
        className="flex absolute right-4 bottom-4 bg-gray-200 rounded-lg px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};

export default NewExercise;
