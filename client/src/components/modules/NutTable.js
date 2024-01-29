import React from "react";

import { get } from "../../utilities";

/**
 * NutTable is a component that prints out the nutrition information of foods in a table
 *
 * Proptypes
 * @param {Object[]} calories
 */
const NutTable = (props) => {
  var totalCalories = 0;
  var totalProtein = 0;
  var totalServing = 0;
  for (let i = 0; i < props.calories.length; i++) {
    totalCalories += props.calories[i].calories;
    totalProtein += props.calories[i].protein_g;
    totalServing += props.calories[i].serving_size_g;
  }
  var currentTable = props.calories;
  if (props.calories.length > 1) {
    currentTable.push({
      name: "Total",
      calories: totalCalories,
      protein_g: totalProtein,
      serving_size_g: totalServing,
    });
  }
  const nutTableList = props.calories.map((food) => (
    <tr>
      <td className="pr-4">{food.name}</td>
      <td className="pr-4">{food.calories}</td>
      <td className="pr-4">{food.protein_g}</td>
      <td className="pr-4">{food.serving_size_g}</td>
    </tr>
  ));
  return (
    <table>
      <tr>
        <th></th>
        <th className="pr-4 font-550">Calories</th>
        <th className="pr-4 font-550">Protein (g)</th>
        <th className="pr-4 font-550">Serving Size (g)</th>
      </tr>
      {nutTableList}
    </table>
  );
};

export default NutTable;
