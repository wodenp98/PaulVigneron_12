import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, Legend } from "recharts";

const GraphContainer = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fbfbfb;
`;

const Title = styled.h2`
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
`;

const ObjectiveParagraph = styled.h3`
  margin: 0;
  color: #74798c;
  font-size: 15px;
`;
const PercentContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 70px;
  left: 100px;
`;

const PercentParagraph = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const COLORS = ["#ff0101", "transparent"];

const Score = ({ score }) => {
  const data = [
    { value: score.score * 100 },
    { value: 100 - score.score * 100 },
  ];
  return (
    <GraphContainer>
      <Title>Score</Title>
      <PieChart width={258} height={263}>
        <circle cx="50%" cy="50%" r={75} fill="#FFFFFF" />
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={90 + 360}
          innerRadius={70}
          outerRadius={80}
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell
              cornerRadius="100%"
              fill={COLORS[index]}
              key={`cell-${index}`}
            />
          ))}
        </Pie>
      </PieChart>

      <PercentContainer>
        <PercentParagraph>{score.score * 100}%</PercentParagraph>
        <ObjectiveParagraph>
          de votre
          <br />
          objectif
        </ObjectiveParagraph>
      </PercentContainer>

      <Legend align="left" content="Score" verticalAlign="top" />
    </GraphContainer>
  );
};

export default Score;
