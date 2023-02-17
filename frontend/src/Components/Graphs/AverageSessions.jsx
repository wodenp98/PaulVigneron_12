import React from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const GraphContainer = styled.div`
  height: 300px;
  width: 258px;
`;

const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

const AverageSessions = ({ average }) => {
  return (
    <GraphContainer>
      <ResponsiveContainer>
        <LineChart data={average} width={253} height={268}>
          <Tooltip />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="day"
            tickFormatter={(value) => day[value]}
          />
          <Line type="monotone" dataKey="sessionLength" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default AverageSessions;
