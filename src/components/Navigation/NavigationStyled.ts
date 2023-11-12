import styled from "styled-components";

const NavigationStyled = styled.nav`
  .menu {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    font-family: ${({ theme }) => theme.typography.regularFamily};
    font-size: ${({ theme }) => theme.typography.regularSize};
    text-transform: uppercase;

    &__aquelarre,
    &__iniciar {
      padding: 10px 20px;
      margin-bottom: 15px;
      border: solid 0.5px ${({ theme }) => theme.colours.turquoise};
      background-color: ${({ theme }) => theme.colours.turquoise};
      border-radius: 100px;
      cursor: pointer;
    }

    &__aquelarre:hover {
      background-color: ${({ theme }) => theme.colours.lime};
      color: ${({ theme }) => theme.colours.lightpurple};
      border: solid 0.5px ${({ theme }) => theme.colours.lime};
    }

    &__iniciar:hover {
      background-color: ${({ theme }) => theme.colours.lime};
      color: ${({ theme }) => theme.colours.lightpurple};
      border: solid 0.5px ${({ theme }) => theme.colours.lime};
    }

    .active {
      font-weight: 900;
      text-decoration-line: underline;
      text-decoration-style: wavy;
    }
  }
`;

export default NavigationStyled;
