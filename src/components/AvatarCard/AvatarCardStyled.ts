import styled from "styled-components";

const AvatarCardStyled = styled.article`
  background-color: ${({ theme }) => theme.colours.cream};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colours.darkBrown};

  .card {
    &__name {
      padding: 10px;
      margin: 10px;
      font-family: ${({ theme }) => theme.typography.mainFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    }

    &__image {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 150px;
    }

    &__choice {
      margin: 10px;
      display: flex;
      justify-content: row;
      gap: 20px;

      &--totem {
        object-fit: cover;
        width: 40px;
        height: 40px;
      }
    }

    &__fiction {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      margin: 10px;
      font-size: ${({ theme }) => theme.typography.formSize};

      &--fantasy {
        margin: 10px;
      }
    }
  }

  @media (min-width: 400px) {
    margin: 10px;
    padding: 10px;

    .card {
      &__name {
        padding: 10px;
        margin: 10px;
        font-family: ${({ theme }) => theme.typography.mainFamily};
        font-size: ${({ theme }) => theme.typography.titleSize};
      }

      &__image {
        width: 400px;
        height: 250px;
        border-radius: 160px 0 160px 0;
      }

      &__choice {
        gap: 60px;

        &--totem {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 767px) {
  }
`;

export default AvatarCardStyled;
