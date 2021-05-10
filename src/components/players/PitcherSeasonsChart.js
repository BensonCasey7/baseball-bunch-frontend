import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PitcherSeasonsChart = (props) => {
  const data = transformedData(props.data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="K" stroke="#D91E36" />
        <Line yAxisId="right" type="monotone" dataKey="K/G" stroke="#EC5766" />
        <Line yAxisId="left" type="monotone" dataKey="BB" stroke="#27187E" />
        <Line yAxisId="right" type="monotone" dataKey="ERA" stroke="#12664F" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const transformedData = (data) => {
  return data.map((season) => {
    const perGame = (stat) => {
      return Math.round((parseInt(stat) / parseInt(season.g)) * 100) / 100;
    };

    return {
      name: season.year,
      K: parseInt(season.pitching_so),
      BB: parseInt(season.pitching_bb),
      ERA: parseFloat(season.era),
      "K/G": perGame(parseInt(season.pitching_so)),
    };
  });
};

export default PitcherSeasonsChart;
