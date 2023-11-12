import styled from "styled-components";

const AvatarListStyled = styled.ul`
  .avatar-list {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  @media (min-width: 620px) {
    .avatar-list {
      grid-template-columns: repeat(1, 1fr);
      justify-items: normal;
      margin: 15px;
    }
  }

  @media (min-width: 985px) {
    .avatar-list {
      grid-template-columns: repeat(2, 1fr);
      justify-items: normal;
      margin: 15px;
    }
  }
`;

export default AvatarListStyled;
