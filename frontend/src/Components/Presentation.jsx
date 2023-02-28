import React from "react";
import styled from "styled-components";

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: 50px;
`;

const PresentationName = styled.h2`
  margin: 0 0 38px;
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
