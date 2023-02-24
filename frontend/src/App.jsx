import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Profil from "./Pages/Profil";
import styled from "styled-components";

const AppStyled = styled.div`
  position: relative;
  margin: auto;
  background-color: white;
  min-width: 1024px;
  min-height: 780px;
  height: 1024px;
`;

const App = () => {
  return (
    <AppStyled>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" replace />} />
          <Route path="/user/:id" element={<Profil />} />
        </Routes>
      </Router>
    </AppStyled>
  );
};

export default App;
