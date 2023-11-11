import styled from "styled-components";

const PageStyled = styled.main`
  margin-top: 10px;
  padding: 15px;
  text-align: center;

  .head {
    &__image {
      object-fit: fill;
    }

    &__title {
      align-items: center;
      font-family: ${({ theme }) => theme.typography.mainFamily};
      font-size: ${({ theme }) => theme.typography.mainSize};
      text-transform: uppercase;
    }

    &__secondary-title {
      padding: 20px;
      color: ${({ theme }) => theme.colours.purple};
    }
  }
`;

export default PageStyled;
