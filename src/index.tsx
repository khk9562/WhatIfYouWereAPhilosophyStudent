import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";
import { GlobalStyle } from "./shared/global";
import { getBasename } from "./shared/basename";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename={getBasename(window.location.pathname)}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
