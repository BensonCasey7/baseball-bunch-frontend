import React from "react";

import tableStructure from "./tableStructure";

function PitcherTable(props) {
  const playerType =
    isNaN(parseInt(props.playerStats[0].pitching_so)) ||
    parseInt(props.playerStats[0].pitching_so) < 2
      ? "hitter"
      : "pitcher";
  const structure = tableStructure(playerType);

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

export default PitcherTable;
