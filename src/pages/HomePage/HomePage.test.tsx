import customRender from "../../testUtils/customRender";
import HomePage from "./HomePage";
import { screen } from "@testing-library/react";

describe("Given the HomePage", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      customRender(<HomePage />);
    });
    test("Then it should show an image with the alt `Dibujo de un sombrero de bruja`", () => {
      const expectedAltText = "Dibujo de un sombrero de bruja";

      const imageAltText = screen.getByAltText(expectedAltText);

      expect(imageAltText).toBeInTheDocument();
    });

    test("Then it should show the title Aquelarre", () => {
      const expectedTitle = "Aquelarre";

      const titleText = screen.getByRole("heading", { name: expectedTitle });

      expect(titleText).toBeInTheDocument();
    });

    test("Then it should show the title  Ficción fantástica ", () => {
      const expectedTitle = "Ficción fantástica";

      const titleText = screen.getByRole("heading", { name: expectedTitle });

      expect(titleText).toBeInTheDocument();
    });
  });
});
