import React, { useState, useEffect } from "react";
import SingleNutrition from "../modules/SingleNutrition.js";
import { NewNutrition } from "../modules/NewNutrition.js";

import { get } from "../../utilities";

const Nutrition = ({ userId }) => {
  const [nutritions, setNutritions] = useState([]);

  useEffect(() => {
    document.title = "Nutrition Log";
    /*get("/api/nutrition").then((nutritionObj) => {
      let reversedNutritionObj = nutritionObj.reverse();
      setNutritions(reversedNutritionObj);
    });*/
  }, []);

  const addNewNutrition = (nutritionObj) => {
    setNutritions([nutritionObj].concat(nutritions));
  };

  let nutritionsList = null;
  const hasNutritions = nutritions.length !== 0;
  if (hasNutritions) {
    nutritionsList = nutritions.map((nutritionsObj) => (
      <SingleNutrition
        content={nutritionsObj.content}
        date={1}
        calories={nutritionsObj.calories}
        creator_id={nutritionsObj.creator_id}
      ></SingleNutrition>
    ));
  } else {
    nutritionsList = <div>No nutrition logs!</div>;
  }
  return (
    <>
      {userId && <NewNutrition addNewNutrition={addNewNutrition} />}
      {nutritionsList}
    </>
  );
};

export default Nutrition;
