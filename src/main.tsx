import "@fontsource/slabo-27px";
import "@fontsource/raleway-dots";
import "@fontsource/raleway-dots/400.css";
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/400-italic.css";
import React from "react";
import ReactDOM from "react-dom/client";
import mainTheme from "./styles/mainTheme";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <div />
    </ThemeProvider>
  </React.StrictMode>,
);
