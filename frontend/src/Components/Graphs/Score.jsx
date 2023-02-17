import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell } from "recharts";

const GraphContainer = styled.div`
  height: 200px;
`;

const COLORS = ["#ff0101", "#EFEFEF"];

const Score = ({ score }) => {
  const valueMulti = score.score * 100;

  const data = [
    { name: "Groupe A", value: valueMulti },
    { name: "Groupe B", value: 100 - valueMulti },
  ];
  const startAngle = -90 + (valueMulti / 100) * 360;

  return (
    <GraphContainer>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={startAngle}
          endAngle={startAngle + 360}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </GraphContainer>
  );
};

export default Score;
