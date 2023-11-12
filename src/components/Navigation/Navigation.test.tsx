import userEvent from "@testing-library/user-event";
import customRender from "../../testUtils/customRender";
import Navigation from "./Navigation";
import { screen } from "@testing-library/react";

describe("Given a Navigation component", () => {
  beforeEach(() => {
    customRender(<Navigation />);
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text Avatares", () => {
      const expectedText = "Avatares";

      const menuName = screen.getByRole("link", { name: expectedText });

      expect(menuName).toBeInTheDocument();
    });

    test("Then it should show a button with the text Iniciar", () => {
      const expectedText = "Iniciar";

      const menuName = screen.getByRole("link", { name: expectedText });

      expect(menuName).toBeInTheDocument();
    });
  });

  describe("When we click the about router link", () => {
    test("Then it should show a wavy line that show's that Avatares is active ", async () => {
      const user = userEvent.setup();
      const avatar = vi.spyOn(user, "click");
      const avatarLink = screen.getByText(/avatares/i);

      await user.click(avatarLink);
      expect(avatar).toHaveBeenCalledTimes(1);
    });
  });
});
