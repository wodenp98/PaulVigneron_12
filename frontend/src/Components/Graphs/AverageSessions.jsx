import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const GraphContainer = styled.div`
  background-color: #ff0000;
  position: relative;
  display: flex;
  border-radius: 5px;
  padding: 0;
  color: white;
  font-size: 10px;
  width: 253px;
  height: 268px;
`;

const Title = styled.h3`
  max-width: 150px;
  font-size: 15px;
  opacity: 0.5;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const TooltipDiv = styled.div`
  display: flex;
  background-color: white;
  width: 39px;
  height: 25px;
  box-sizing: border-box;
  padding: 6px 0px;
  color: black;
  font-size: 8px;
`;

const TooltipParagraph = styled.p`
  margin: auto;
`;

const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

function CustomTooltip({ payload, active }) {
  if (active && payload && payload.length) {
    return (
      <TooltipDiv>
        <TooltipParagraph>{payload[0].value}min</TooltipParagraph>
      </TooltipDiv>
    );
  }
  return null;
}

const AverageSessions = ({ average }) => {
  return (
    <GraphContainer>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer>
        <LineChart data={average} width="100%" height="100%">
          <XAxis
            axisLine={false}
            dataKey="day"
            fontSize={"12px"}
            padding={{ left: 10, right: 10 }}
            stroke="white"
            tick={{ opacity: 0.5 }}
            tickFormatter={(value) => day[value]}
            tickLine={false}
          />
          <YAxis hide padding={{ top: 30 }} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#000000",
              strokeOpacity: 0.1,
              strokeWidth: 80,
            }}
            wrapperStyle={{ left: -20, outlineStyle: "none" }}
          />
          <Line
            dataKey="sessionLength"
            dot={false}
            stroke="white"
            strokeOpacity="0.7"
            strokeWidth={1.5}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default AverageSessions;
