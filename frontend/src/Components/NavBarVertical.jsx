import React from "react";
import styled from "styled-components";
import IconBike from "../assets/iconBike.png";
import IconStrenght from "../assets/iconStrenght.png";
import IconSwim from "../assets/iconSwim.png";
import IconYoga from "../assets/iconYoga.png";

const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 117px;
  height: 90%;
  padding: 150px 0;
  background-color: black;
`;

const NavImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    margin: 0 auto 20px;
  }
`;

const NavCopyright = styled.div`
  margin-top: 130px;
  white-space: nowrap;
  font-size: 12px;
  color: white;
  transform: rotate(-90deg);
`;

const NavBarVertical = () => {
  return (
    <Nav>
      <NavImgContainer>
        <img src={IconYoga} alt="Icone Yoga" />
        <img src={IconSwim} alt="Icone Natation" />
        <img src={IconBike} alt="Icone Vélo" />
        <img src={IconStrenght} alt="Icone Musculation" />
      </NavImgContainer>
      <NavCopyright>Copiryght, SportSee 2020</NavCopyright>
    </Nav>
  );
};

export default NavBarVertical;
