import React from "react";
import styled from "styled-components";
import HeaderLogo from "../Components/HeaderLogo";
import NavBarVertical from "../Components/NavBarVertical";
import Presentation from "../Components/Presentation";

// min 2 graphs

const ContainerUser = styled.div`
  margin-left: 100px;
  height: 88%;
  box-sizing: border-box;
  padding: 61px 90px 40px 108px;
`;

const Profil = () => {
  return (
    <>
      <HeaderLogo />
      <NavBarVertical />
      <ContainerUser>
        <Presentation firstName="Karl" />
      </ContainerUser>
    </>
  );
};

export default Profil;
