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

const HitterSeasonsChart = (props) => {
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
        <Line yAxisId="left" type="monotone" dataKey="H" stroke="#D91E36" />
        <Line yAxisId="left" type="monotone" dataKey="HR" stroke="#DA344D" />
        <Line yAxisId="left" type="monotone" dataKey="RBI" stroke="#EC5766" />
        <Line yAxisId="right" type="monotone" dataKey="H/G" stroke="#27187E" />
        <Line yAxisId="right" type="monotone" dataKey="HR/G" stroke="#6874E8" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="RBI/G"
          stroke="#5ADBFF"
        />
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
      H: parseInt(season.h),
      HR: parseInt(season.batting_hr),
      RBI: parseInt(season.rbi),
      "H/G": perGame(parseInt(season.h)),
      "HR/G": perGame(parseInt(season.batting_hr)),
      "RBI/G": perGame(parseInt(season.rbi)),
    };
  });
};

export default HitterSeasonsChart;
