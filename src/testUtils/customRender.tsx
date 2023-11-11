import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { render } from "@testing-library/react";

const customRender = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </BrowserRouter>,
  );

export default customRender;
