import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PredictionBarChart = (props) => {
  const data = [
    {
      name: "AB/G",
      Expected: props.predictionStats.ab_per_game,
    },
    {
      name: "H/G",
      Expected: props.predictionStats.h_per_game,
    },
    {
      name: "BB/G",
      Expected: props.predictionStats.bb_per_game,
    },
    {
      name: "2B/G",
      Expected: props.predictionStats.b2_per_game,
    },
    {
      name: "HR/G",
      Expected: props.predictionStats.hr_per_game,
    },
    {
      name: "R/G",
      Expected: props.predictionStats.r_per_game,
    },
    {
      name: "SB/G",
      Expected: props.predictionStats.sb_per_game,
    },
    {
      name: "ER/G",
      Expected: props.predictionStats.er_per_game,
    },
    {
      name: "K/G",
      Expected: props.predictionStats.pitching_so_per_game,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Expected" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PredictionBarChart;
