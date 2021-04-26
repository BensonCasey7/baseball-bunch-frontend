import React from "react";

import tableStructure from "./tableStructure";

function PitcherTable(props) {
  const structure = tableStructure(playerType(props.playerStats));

  return (
    <div className={"table-container"}>
      <table className={"table"}>
        <thead>
          <tr className={"table__row table__row--head"}>
            {Object.values(structure).map((statName) => {
              return (
                <th key={statName} className={"table__data"}>
                  {statName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.playerStats.map((season) => {
            return (
              <tr key={season.year} className={"table__row"}>
                {Object.keys(structure).map((statKey) => {
                  return (
                    <td
                      key={`${season.year}-${statKey}`}
                      className={"table__data"}
                    >
                      {season[statKey]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const playerType = (playerStats) => {
  return "hitter";
};

export default PitcherTable;
