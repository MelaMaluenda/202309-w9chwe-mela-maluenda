import avatarsMock from "../../mocks/avatarMock/avatarsMock";
import customRender from "../../testUtils/customRender";
import AvatarList from "./AvatarList";
import { screen } from "@testing-library/react";

describe("Given the AvatarList component", () => {
  beforeEach(() => {
    customRender(<AvatarList />, avatarsMock);
  });

  describe("When it received an AvatarCard", () => {
    test("Then it should show a card with an image and it's alternative text `Icon element: tierra`", () => {
      const expectedAltText = "Icon element: tierra";

      const avatarAltText = screen.getAllByAltText(
        `Icon element: ${expectedAltText}`,
      );

      expect(avatarAltText).toBeInTheDocument;
    });

    test("Then it should show a card with the name: `Hermione Granger`", () => {
      const expectedName = "Hermione Granger";

      const avatarAudiovisual = screen.getByRole("heading", {
        name: expectedName,
      });

      expect(avatarAudiovisual).toBeInTheDocument();
    });
  });
});
