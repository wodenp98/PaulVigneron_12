import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
${normalize}

  body {
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
