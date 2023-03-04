import React from "react";
import styled from "styled-components";
import LogoSportSee from "../assets/logoSportSee.png";
import NavBarHorizontal from "./NavBarHorizontal";

/**
 * Css for the components with styled components
 */

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  background-color: black;
  box-sizing: border-box;
  padding: 0px 90px 0px 25px;
  @media screen and (max-width: 1220px) {
    padding: 0px 60px 0px 15px;
  }
`;

const LogoTitle = styled.h1`
  margin: 0 130px 0 0;
  > img {
    width: 178px;
    @media screen and (max-width: 1220px) {
      width: 150px;
    }
  }
`;

/**
 * Logo Sportsee in the horizontal navbar
 * @returns {JSON} logo display
 */

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
