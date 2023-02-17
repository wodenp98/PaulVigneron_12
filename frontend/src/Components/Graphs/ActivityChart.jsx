import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraphContainer = styled.div`
  height: 145px;
  width: 702px;
`;

const ActivityChart = ({ activity }) => {
  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activity} barGap={8} barSize={7}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            stroke="#9B9EAC"
            tickLine={false}
            padding={{ left: -40, right: -40 }}
            tickFormatter={(value) => parseInt(value.split("-")[2])}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={3}
            dataKey="kilogram"
            orientation="right"
            domain={["dataMin - 1", "dataMax "]}
            stroke="#9B9EAC"
          />
          <YAxis yAxisId="calories" orientation="left" hide />
          <Tooltip />
          <Legend />
          <Bar
            name="Poids (kg)"
            barSize={8}
            radius={[10, 10, 0, 0]}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            name="Calories brûlées (kCal)"
            barSize={8}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default ActivityChart;
