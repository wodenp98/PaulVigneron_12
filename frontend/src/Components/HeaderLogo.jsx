import React from "react";
import styled from "styled-components";
import LogoSportSee from "../assets/logoSportSee.png";
import NavBarHorizontal from "./NavBarHorizontal";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 91px;
  background-color: black;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 91px 0px 25px;
`;

const LogoTitle = styled.h1`
  margin: 4px 150px 0 0;
  > img {
    width: 178px;
  }
`;

const HeaderLogo = () => {
  return (
    <Header>
      <LogoTitle>
        <img src={LogoSportSee} alt="Logo SportSee" />
      </LogoTitle>
      <NavBarHorizontal />
    </Header>
  );
};

export default HeaderLogo;
