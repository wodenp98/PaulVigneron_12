import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 24px;
`;

const Menu = styled.p`
  color: white;
`;

const NavBarHorizontal = () => {
  return (
    <Nav>
      <Menu>Accueil</Menu>
      <Menu>Profil</Menu>
      <Menu>Réglage</Menu>
      <Menu>Communauté</Menu>
    </Nav>
  );
};

export default NavBarHorizontal;
