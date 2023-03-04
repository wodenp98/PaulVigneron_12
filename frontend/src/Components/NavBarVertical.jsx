import React from "react";
import styled from "styled-components";
import IconBike from "../assets/iconBike.png";
import IconStrenght from "../assets/iconStrenght.png";
import IconSwim from "../assets/iconSwim.png";
import IconYoga from "../assets/iconYoga.png";

/**
 * Css for navbar vertical components with styled components
 */

const NavContainer = styled.div`
  grid-column: 1;
  grid-row: span 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 180%;
  background-color: black;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    margin-top: 20px;
    width: 64px;
    height: 64px;
  }
`;

const CopyrightDiv = styled.div`
  color: white;
  font-size: 12px;
  margin-top: 150px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
`;

/**
 * Icon in the navbar vertical
 * @returns {JSX} display icon in the left of the dashboard
 */

const NavBarVertical = () => {
  return (
    <NavContainer>
      <Nav>
        <img src={IconYoga} alt="Icone Yoga" />

        <img src={IconSwim} alt="Icone Natation" />

        <img src={IconBike} alt="Icone Vélo" />

        <img src={IconStrenght} alt="Icone Musculation" />
      </Nav>
      <CopyrightDiv>Copyright, SportSee 2020</CopyrightDiv>
    </NavContainer>
  );
};

export default NavBarVertical;
