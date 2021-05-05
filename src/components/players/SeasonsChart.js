import React from "react";

import HitterSeasonsChart from "./HitterSeasonsChart";
import PitcherSeasonsChart from "./PitcherSeasonsChart";

const SeasonsChart = (props) => {
  const playerType =
    isNaN(parseInt(props.data[0].pitching_so)) ||
    parseInt(props.data[0].pitching_so) < 2
      ? "hitter"
      : "pitcher";

  return playerType === "hitter" ? (
    <HitterSeasonsChart data={props.data} />
  ) : (
    <PitcherSeasonsChart data={props.data} />
  );
};

export default SeasonsChart;
