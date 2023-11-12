import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { render } from "@testing-library/react";
import AvatarStructure from "../store/types";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { aquelarreReducer } from "../store/features/avatarsSlice";

const customRender = (
  children: React.ReactElement,
  avatarsMock: AvatarStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      avatarState: aquelarreReducer,
    },
    preloadedState: { avatarState: { avatars: avatarsMock } },
  });
  render(
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};

export default customRender;
