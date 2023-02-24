import React from "react";
import styled from "styled-components";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const GraphContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  font-size: 10px;
  width: 253px;
  height: 268px;
`;

const day = {
  1: "Intensité",
  2: "Vitesse",
  3: "Force",
  4: "Endurance",
  5: "Energie",
  6: "Cardio",
};

const RadarChartGraphs = ({ performance }) => {
  return (
    <GraphContainer>
      <ResponsiveContainer>
        <RadarChart outerRadius="70%" data={performance.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            fontSize={12}
            stroke="white"
            tickFormatter={(value) => day[value]}
            tickLine={false}
            tickSize={12}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default RadarChartGraphs;
