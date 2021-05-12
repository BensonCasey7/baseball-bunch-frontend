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
      pv: props.predictionStats.ab_per_game,
    },
    {
      name: "H/G",
      pv: props.predictionStats.h_per_game,
    },
    {
      name: "BB/G",
      pv: props.predictionStats.bb_per_game,
    },
    {
      name: "2B/G",
      pv: props.predictionStats.b2_per_game,
    },
    {
      name: "HR/G",
      pv: props.predictionStats.hr_per_game,
    },
    {
      name: "R/G",
      pv: props.predictionStats.r_per_game,
    },
    {
      name: "SB/G",
      pv: props.predictionStats.sb_per_game,
    },
    {
      name: "ER/G",
      pv: props.predictionStats.er_per_game,
    },
    {
      name: "K/G",
      pv: props.predictionStats.pitching_so_per_game,
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
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PredictionBarChart;
