import React from "react";
import styled from "styled-components";

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const PresentationName = styled.h2`
  margin: 0 0 20px;
  font-size: 48px;
  > span {
    color: red;
  }
`;

const PresentationCongrats = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Presentation = ({ firstName }) => {
  return (
    <PresentationContainer>
      <PresentationName>
        Bonjour <span>{firstName}</span>
      </PresentationName>
      <PresentationCongrats>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </PresentationCongrats>
    </PresentationContainer>
  );
};

export default Presentation;
