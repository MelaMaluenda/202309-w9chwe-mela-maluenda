import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colours.garnet};
  color: ${({ theme }) => theme.colours.cream};
  align-items: center;
  width: 100%;
  position: fixed;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.colours.cream};

  .head {
    &__image {
      object-fit: fill;
      width: 100px;
      height: 100px;
      padding: 15px;
    }

    &__title {
      padding-bottom: 15px;
      align-items: center;
      font-family: ${({ theme }) => theme.typography.mainFamily};
      font-size: ${({ theme }) => theme.typography.titleSize};
      text-transform: uppercase;
    }
  }

  @media (min-width: 620px) {
    flex-direction: row;
    justify-content: center;

    .head {
      &__image {
        width: 200px;
        height: 200px;
      }

      &__title {
        font-size: ${({ theme }) => theme.typography.mainSize};
      }
    }
  }

  @media (min-width: 985px) {
    .head {
      &__image {
        width: 200px;
        height: 200px;
      }

      &__title {
        font-size: ${({ theme }) => theme.typography.mainSize};
      }
    }
  }
`;

export default HeaderStyled;
