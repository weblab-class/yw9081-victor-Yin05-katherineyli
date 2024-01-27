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
      <td className="pr-4">{food.calories}</td>
      <td className="pr-4">{food.serving_size_g}</td>
    </tr>
  ));
  return (
    <table>
      <tr>
        <th className="pr-4 font-550">Calories</th>
        <th className="pr-4 font-550">Serving Size (g)</th>
      </tr>
      {nutTableList}
    </table>
  );
};

export default NutTable;
