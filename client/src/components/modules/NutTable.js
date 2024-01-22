import React from "react";

import { get } from "../../utilities";

/**
 * NutTable is a component that prints out the nutrition information of foods in a table
 *
 * Proptypes
 * @param {Object[]} calories
 */
const NutTable = (props) => {
  const nutTableList = props.calories.map((food) => (
    <tr>
      <td>{food.name}</td>
      <td>{food.calories}</td>
      <td>{food.serving_size_g}</td>
    </tr>
  ));
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Serving Size (g)</th>
      </tr>
      {nutTableList}
    </table>
  );
};

export default NutTable;
