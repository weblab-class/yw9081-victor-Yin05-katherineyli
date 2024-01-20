import React, { useState } from "react";

import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {({value}) => void} onSubmit: (function) triggered when this post is submitted, takes {value} as parameters
 */
const NewPostInput = (props) => {
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div className="u-flex">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

/**
 * New Nutrition is a New Post component for comments
 *
 * Proptypes
 */
const NewNutrition = (props) => {
  const addNutrition = (value) => {
    const body = { content: value, id: props.userId };
    post("/api/nutrition", body).then((nutrition) => {
      props.addNewNutrition(nutrition);
    });
  };

  return <NewPostInput defaultText="New Nutrition" onSubmit={addNutrition} />;
};

export { NewNutrition, NewPostInput };
