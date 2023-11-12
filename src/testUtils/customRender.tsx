import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { render } from "@testing-library/react";

const customRender = (children: React.ReactElement) =>
  render(
    <MemoryRouter>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </MemoryRouter>,
  );

export default customRender;
