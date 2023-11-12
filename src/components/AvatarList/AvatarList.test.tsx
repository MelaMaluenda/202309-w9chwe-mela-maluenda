import avatarMock from "../../mocks/avatarMock/avatarMock";
import customRender from "../../testUtils/customRender";
import AvatarList from "./AvatarList";
import { screen } from "@testing-library/react";

describe("Given the AvatarList component", () => {
  beforeEach(() => {
    customRender(<AvatarList />);
  });

  describe("When it received an AvatarCard", () => {
    test("Then it should show a card with an image and it's alternative text `Icon element: tierra`", () => {
      const expextedAltElementText = avatarMock;

      const avatarElement = screen.getAllByAltText(
        `Icon element: ${expextedAltElementText.element}`,
      );

      expect(avatarElement).toBeInTheDocument;
    });

    test("Then it should show a card with the name: `Hermione Granger`", () => {
      const expectedAudiovisual = avatarMock;

      const avatarAudiovisual = screen.getByRole("heading", {
        name: expectedAudiovisual.name,
      });

      expect(avatarAudiovisual).toBeInTheDocument();
    });
  });
});
