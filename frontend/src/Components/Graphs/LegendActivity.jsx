import React from "react";
import styled from "styled-components";
import RedOval from "../../assets/RedOval.png";
import BlackOval from "../../assets/BlackOval.png";

/**
 * Css for header of graph activity components with styled components
 */
const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  margin-left: 20px;
  font-size: 15px;
`;

const DescriptionLegend = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Dot = styled.div`
  margin-right: 10px;
`;

const ParagraphLegend = styled.p`
  color: #74798c;
`;

/**
 * Components display the title and the legend for activity graph
 * @returns  {JSX} the legend customize
 */

const LegendActivity = () => {
  return (
    <LegendContainer>
      <Title>Activité quotidienne</Title>
      <DescriptionLegend>
        <DotContainer>
          <Dot>
            <img src={BlackOval} alt="black dot" />
          </Dot>
          <ParagraphLegend>Poids (kg)</ParagraphLegend>
        </DotContainer>
        <DotContainer>
          <Dot>
            <img src={RedOval} alt="red dot" />
          </Dot>
          <ParagraphLegend>Calories brûlées (kCal)</ParagraphLegend>
        </DotContainer>
      </DescriptionLegend>
    </LegendContainer>
  );
};

export default LegendActivity;
