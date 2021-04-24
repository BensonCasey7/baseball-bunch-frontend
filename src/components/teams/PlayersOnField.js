import React from "react";

const PlayersOnField = (props) => {
  return (
    <div className={"team-field"}>
      <b>Work in progress</b>
      {Object.keys(props.players).map((position) => {
        return (
          <div
            className={`team-field__player team-field__player--${position.replace(
              "_",
              "-"
            )}`}
          >
            {props.players[position]}
          </div>
        );
      })}
    </div>
  );
};

export default PlayersOnField;
