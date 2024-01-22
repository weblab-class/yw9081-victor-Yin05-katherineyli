import React, { useState, useEffect } from "react";
import SingleNutrition from "../modules/SingleNutrition.js";
import { NewNutrition } from "../modules/NewNutrition.js";

import { get } from "../../utilities";

const Nutrition = ({ userId }) => {
  const [nutritions, setNutritions] = useState([]);

  useEffect(() => {
    document.title = "Nutrition Log";
    const query = { id: userId };
    if (userId) {
      get("/api/nutrition", query).then((nutritionObj) => {
        let reversedNutritionObj = nutritionObj.reverse();
        setNutritions(reversedNutritionObj);
      });
    }
  }, [userId]);

  const addNewNutrition = (nutritionObj) => {
    setNutritions([nutritionObj].concat(nutritions));
  };

  let nutritionsList = null;
  const hasNutritions = nutritions.length !== 0;
  if (hasNutritions) {
    nutritionsList = nutritions.map((nutritionsObj) => (
      <SingleNutrition
        content={nutritionsObj.content}
        date={nutritionsObj.date}
        calories={nutritionsObj.calories}
        creator_id={nutritionsObj.creator_id}
      ></SingleNutrition>
    ));
  } else {
    nutritionsList = <div>No nutrition logs!</div>;
  }
  if (!userId) {
    return <div>Log in before using Beast Mode</div>;
  }
  return (
    <div>
      {userId && <NewNutrition addNewNutrition={addNewNutrition} userId={userId} />}
      {nutritionsList}
    </div>
  );
};

export default Nutrition;
