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
    nutritionsList = (
      <div className="w-1/2 flex-col">
        <div className="font-semibold text-lg py-2">Nutrition Log</div>
        <div className="w-full h-72 overflow-auto">
          {nutritions.map((nutritionsObj) => (
            <SingleNutrition
              content={nutritionsObj.content}
              date={nutritionsObj.date}
              calories={nutritionsObj.calories}
              creator_id={nutritionsObj.creator_id}
            ></SingleNutrition>
          ))}
        </div>
      </div>
    );
  } else {
    nutritionsList = <div>No nutrition logs!</div>;
  }
  if (!userId) {
    return <div>Log in before using Beast Mode Nutrition</div>;
  }

  return (
    // <div>
    //   {userId && <NewNutrition addNewNutrition={addNewNutrition} userId={userId} />}
    //   {nutritionsList}
    // </div>
    <div className="flex-col">
      <div className="w-48 h-16 text-3xl font-semibold flex items-center pl-4">Nutrition</div>
      <div className="flex justify-center">
        {userId && <NewNutrition addNewNutrition={addNewNutrition} userId={userId} />}
      </div>
      <div className="flex grow justify-center mt-2 overflow-auto">{nutritionsList}</div>
    </div>
  );
};

export default Nutrition;
