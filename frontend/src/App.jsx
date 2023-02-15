import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Error from "./Pages/Error";
import Profil from "./Pages/Profil";

const AppStyled = styled.div`
  position: relative;
  margin: auto;
  background-color: white;
  min-width: 1024px;
  min-height: 780px;
  height: 100vh;
`;

const App = () => {
  return (
    <AppStyled>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" replace />} />
          <Route path="/user/:id" element={<Profil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AppStyled>
  );
};

export default App;
