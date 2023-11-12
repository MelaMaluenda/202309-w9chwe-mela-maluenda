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
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
