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
  flex-wrap: wrap;
  border: solid 10px ${({ theme }) => theme.colours.lime};

  .card {
    &__name {
      padding: 10px;
      margin: 10px;
      font-family: ${({ theme }) => theme.typography.mainFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    }

    &__image {
      width: 400px;
      height: 350px;
      object-fit: cover;
      border-radius: 90px 0px 90px 0;
    }

    &__choice {
      margin: 10px;
      margin-top: 20px;
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

  @media (min-width: 620px) {
    margin: 10px;
    padding: 20px;

    .card {
      &__name {
        padding: 10px;
        margin: 10px;
        font-family: ${({ theme }) => theme.typography.mainFamily};
        font-size: ${({ theme }) => theme.typography.mainSize};
      }

      &__image {
        width: 400px;
        height: 250px;
        border-radius: 160px 0 160px 0;
      }

      &__choice {
        gap: 60px;

        &--totem {
          width: 80px;
          height: 100px;
        }
      }

      &__fiction {
        flex-direction: row;
        font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
        &--fantsy {
        }
      }
    }
  }

  @media (min-width: 985px) {
    .card {
      &__image {
        width: 400px;
        height: 250px;
        border-radius: 160px 0 160px 0;
      }

      &__fiction {
        flex-direction: column;
        &--fantasy {
          font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
        }
      }
    }
  }
`;

export default AvatarCardStyled;
