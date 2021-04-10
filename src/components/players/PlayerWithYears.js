import React from "react";

const PlayerWithYears = (props) => {
  const start = () => {
    const startDateObject = new Date(props.player.debut);
    return startDateObject.getFullYear();
  };

  const end = () => {
    const endDateObject = new Date(props.player.final_game);
    const finalYear = endDateObject.getFullYear();
    return finalYear === 2020 ? "" : finalYear;
  };

  return (
    <div>
      <span>{`${props.player.namefirst} ${props.player.namelast} `}</span>
      <span>{`(${start()}-${end()})`}</span>
    </div>
  );
};

export default PlayerWithYears;
