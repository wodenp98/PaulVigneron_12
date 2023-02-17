import React from "react";
import styled from "styled-components";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const GraphContainer = styled.div`
  height: 263px;
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
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="53%" data={performance.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={(value) => day[value]}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default RadarChartGraphs;
