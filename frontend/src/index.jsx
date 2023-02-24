import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import normalize from "normalize.css";

const theme = {
  fonts: {
    body: "Roboto, sans-serif",
  },
};

const GlobalStyle = createGlobalStyle`
${normalize}
  body {
    font-family: ${(props) => props.theme.fonts.body};
    margin: 0;
    box-sizing: border-box;
  }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </React.StrictMode>
);
