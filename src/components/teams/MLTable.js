import React from "react";

const MLTable = (props) => {
  return (
    <>
      <div
        className={"table-container table-container--always-scroll"}
        style={{ alignSelf: "flex-start", marginTop: "12px" }}
      >
        <table className={"table"}>
          <thead>
            <tr className={"table__row table__row--head"}>
              {Object.values(props.structure).map((statName) => {
                return (
                  <th key={statName} className={"table__data"}>
                    {statName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row) => {
              return (
                <tr key={row} className={"table__row"}>
                  {Object.keys(props.structure).map((statKey) => {
                    const key =
                      !isNaN(row[statKey]) && parseFloat(row[statKey]) < 5
                        ? parseFloat(row[statKey]).toFixed(2)
                        : row[statKey];

                    return (
                      <td key={`${row}-${statKey}`} className={"table__data"}>
                        {key}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MLTable;
