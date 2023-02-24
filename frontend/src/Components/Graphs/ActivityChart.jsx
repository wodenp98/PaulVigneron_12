import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const GraphContainer = styled.div`
  width: 835px;
  height: 320px;
  background: #fbfbfb;
  padding-top: 20px;
  box-sizing: border-box;
`;
const Title = styled.h2`
  position: absolute;
  margin-top: 20px;
  margin-left: 40px;
  font-size: 15px;
`;

const TooltipDiv = styled.div`
  background-color: #e60000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 39px;
  height: 63px;
  box-sizing: border-box;
  padding: 6px 0px;
  color: white;
  font-size: 7px;
`;

const TooltipParagraph = styled.p`
  padding: 5px;
`;

const CustomTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipDiv>
        <TooltipParagraph>{payload[0].value}kg</TooltipParagraph>
        <TooltipParagraph>{payload[1].value}Kcal</TooltipParagraph>
      </TooltipDiv>
    );
  }
  return null;
};

const legendFormatter = (value) => {
  return <span style={{ color: "#74798C" }}>{value}</span>;
};

const ActivityChart = ({ activity }) => {
  return (
    <GraphContainer>
      <Title>Activité quotidienne</Title>
      <ResponsiveContainer width="95%" height="95%">
        <BarChart data={activity} barGap={8} barSize={8} margin={{ left: 50 }}>
          <CartesianGrid
            stroke="#DEDEDE"
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            padding={{ left: -40, right: -40 }}
            stroke="#74798C"
            strokeOpacity="0.8"
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            tickFormatter={(value) => parseInt(value.split("-")[2])}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax "]}
            orientation="right"
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            tickCount={3}
            tickLine={false}
            tickMargin={38}
            type="number"
            yAxisId="kg"
          />
          <YAxis
            dataKey="calories"
            domain={[0, "dataMax"]}
            hide
            yAxisId="kCal"
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#C4C4C4", opacity: 0.5 }}
            height={63}
            wrapperStyle={{ outlineStyle: "none" }}
            width={39}
          />
          <Legend
            align="right"
            formatter={legendFormatter}
            height={50}
            iconSize={8}
            iconType="circle"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px" }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[5, 5, 0, 0]}
            yAxisId="kg"
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[5, 5, 0, 0]}
            yAxisId="kCal"
          />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default ActivityChart;
