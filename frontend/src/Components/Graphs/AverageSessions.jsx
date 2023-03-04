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
import PropTypes from "prop-types";

/**
 * Css for graph activity with styled components
 */

const GraphContainer = styled.div`
  background-color: #ff0000;
  position: relative;
  display: flex;
  border-radius: 5px;
  padding: 0;
  color: white;
  font-size: 10px;
  width: 30%;
`;

const Title = styled.h3`
  max-width: 150px;
  font-size: 15px;
  opacity: 0.5;
  position: absolute;
  top: 20px;
  left: 20px;
  @media screen and (max-width: 1220px) {
    font-size: 12px;
    top: 15px;
    left: 15px;
  }
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

/**
 * Function that allow to custom Tooltop
 * @param {object} payload data for the legend
 * @param {boolean} active return true or false when the mouse is over the graph or no
 * @returns {JSX} Tooltip customize
 */

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

/**
 * Components using recharts display average session graph
 * @param {array} average sessions for a user
 * @returns {JSX} line chart user average session
 */

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

AverageSessions.propTypes = {
  average: PropTypes.array,
};

export default AverageSessions;
