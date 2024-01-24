import React, { useState } from "react";

import { get, post } from "../../utilities";
//import { set } from "core-js/core/dict";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {({value}) => void} onSubmit: (function) triggered when this post is submitted, takes {value} as parameters
 */
const NewPostInput = (props) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    if (value != "" && selectedDate != null && selectedDate != "") {
      event.preventDefault();
      props.onSubmit && props.onSubmit(value, selectedDate);
      setSelectedDate("");
      setValue("");
    }
  };

  return (
    <div className="relative mt-4 w-1/4 h-72 flex-col flex rounded-lg border border-black">
      <div class="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <textarea
          value={value}
          onChange={handleChange}
          className="flex items-center focus: h-8 w-full bg-transparent resize-none text-xl outline-none"
          placeholder={props.defaultText}
        ></textarea>
      </div>
      {/* <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      /> */}
      <div className="flex items-center ml-3 mt-1">
        Select Date:
        <input
          onChange={handleDateChange}
          value={selectedDate}
          type="date"
          id="dateInput"
          className="py-1 px-2 my-2 mx-4 rounded-lg border border-gray-200 w-60"
        ></input>
      </div>
      {/* <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button> */}
      <button
        onClick={handleSubmit}
        value="Submit"
        className="flex absolute right-4 bottom-4 bg-gray-200 rounded-lg px-4 py-2"
      >
        Add
      </button>
      {/* <div>
        <label htmlFor="dateInput">Select Date:</label>
        <input type="date" id="dateInput" value={selectedDate} onChange={handleDateChange} />
      </div> */}
    </div>
  );
};

/**
 * New Nutrition is a New Post component for comments
 *
 * Proptypes
 */
const NewNutrition = (props) => {
  const addNutrition = (value, selectedDate) => {
    async function getData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "X-Api-Key": "7i5R5M6eeuaCYKLfuj84BA==8jRHoGmlbImK925Z",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    getData("https://api.calorieninjas.com/v1/nutrition?query=" + value).then((data) => {
      const body = {
        content: value,
        id: props.userId,
        calories: data.items,
        date: selectedDate,
      };
      console.log("right before posting the type of date is " + typeof selectedDate);
      post("/api/nutrition", body).then((nutrition) => {
        props.addNewNutrition(nutrition);
      });
    });
  };

  return <NewPostInput defaultText="New Nutrition" onSubmit={addNutrition} />;
};

export { NewNutrition, NewPostInput };
