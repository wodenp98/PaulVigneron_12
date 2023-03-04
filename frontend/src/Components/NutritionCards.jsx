import React from "react";
import styled from "styled-components";
import iconCalories from "../assets/iconCalories.png";
import iconGlucides from "../assets/iconGlucides.png";
import iconLipides from "../assets/iconLipides.png";
import iconProteines from "../assets/iconProteines.png";
import PropTypes from "prop-types";

/**
 * Css for nutrition card components with styled components
 */

const DivContainer = styled.div`
  grid-area: 2 / 3 / 2 / 4;
  display: flex;
  flex-direction: column;
  height: 92%;
  justify-content: space-between;
  @media screen and (max-width: 1220px) {
    height: 82%;
  }
`;

const DivCards = styled.div`
  background-color: #fbfbfb;
  height: 21%;
  width: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const ImgIcon = styled.img`
  width: 60px;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (max-width: 1220px) {
    width: 40px;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const DivValueContent = styled.div``;

const ParagraphValue = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 1220px) {
    font-size: 15px;
  }
`;

const ParagraphType = styled.p`
  color: #74798c;
  font-size: 14px;
  padding-top: 5px;
  margin: 0;
`;

/**
 * Component of a user nutrition data
 * @param {object} nutritionData user
 * @returns {JSX} display nutrition cards using nutrition data user
 */

const NutritionCards = ({ nutritionData }) => {
  return (
    <DivContainer>
      <DivCards>
        <ImgIcon src={iconCalories} alt="Icône Calories" />
        <DivValueContent>
          <ParagraphValue>
            {nutritionData?.calorieCount.toLocaleString("en-US")}kCal
          </ParagraphValue>
          <ParagraphType>Calories</ParagraphType>
        </DivValueContent>
      </DivCards>
      <DivCards>
        <ImgIcon src={iconProteines} alt="Icône Protéines" />
        <DivValueContent>
          <ParagraphValue>{nutritionData?.proteinCount}g</ParagraphValue>
          <ParagraphType>Proteines</ParagraphType>
        </DivValueContent>
      </DivCards>
      <DivCards>
        <ImgIcon src={iconGlucides} alt="Icône Glucides" />
        <DivValueContent>
          <ParagraphValue>{nutritionData?.carbohydrateCount}g</ParagraphValue>
          <ParagraphType>Glucides</ParagraphType>
        </DivValueContent>
      </DivCards>
      <DivCards>
        <ImgIcon src={iconLipides} alt="Icône Lipides" />
        <DivValueContent>
          <ParagraphValue>{nutritionData?.lipidCount}g</ParagraphValue>
          <ParagraphType>Lipides</ParagraphType>
        </DivValueContent>
      </DivCards>
    </DivContainer>
  );
};

NutritionCards.propTypes = {
  nutritionData: PropTypes.object,
};

export default NutritionCards;
