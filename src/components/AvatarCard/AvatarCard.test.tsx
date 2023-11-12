import avatarMock from "../../mocks/avatarMock/avatarMock";
import customRender from "../../testUtils/customRender";
import AvatarCard from "./AvatarCard";
import { screen } from "@testing-library/react";

describe("Given a AvatarCard component", () => {
  beforeEach(() => {
    customRender(<AvatarCard avatar={avatarMock} />);
  });

  describe("When it received a avatar name `Hermione Granger`", () => {
    test("Then it should show the name of `Hermione Granger`", () => {
      const expectedName = avatarMock;

      const avatarName = screen.getByRole("heading", {
        name: expectedName.name,
      });

      expect(avatarName).toBeInTheDocument();
    });
  });

  describe("when it received a avatar image", () => {
    test("then it should show an image with an alternative text `Portrait of Hermione Granger`", () => {
      const expectedAltText = avatarMock;

      const avatarImageAltText = screen.getByAltText(
        `Portrait of ${expectedAltText.name}`,
      );

      expect(avatarImageAltText).toBeInTheDocument();
    });
  });
});
