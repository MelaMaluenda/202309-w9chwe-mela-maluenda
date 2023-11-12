import customRender from "../../testUtils/customRender";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given the component header", () => {
  beforeEach(() => {
    customRender(<Header />);
  });

  describe("When it rerendered", () => {
    test("Then it should show an image with an alt`Dibujo de un sombrero de bruja`", () => {
      const expectedAltText = "Dibujo de un sombrero de bruja";

      const imageAltText = screen.getByAltText(expectedAltText);

      expect(imageAltText).toBeInTheDocument();
    });

    test("Then it should show the title Aquelarre", () => {
      const expectedTitle = "Aquelarre";

      const titleText = screen.getByRole("heading", { name: expectedTitle });

      expect(titleText).toBeInTheDocument();
    });
  });
});
