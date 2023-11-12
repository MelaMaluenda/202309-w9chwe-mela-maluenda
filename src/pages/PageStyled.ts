import styled from "styled-components";

const PageStyled = styled.main`
  text-align: center;

  .frame {
    padding: 180px 15px 0px 15px;
    font-family: ${({ theme }) => theme.typography.regularFamily};
    font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    color: ${({ theme }) => theme.colours.offWhite};
    font-weight: bolder;
    background-image: url("/images/fondo-negro-acuarela.webp");
    background-size: cover;
  }

  @media (min-width: 620px) {
    .frame {
      padding: 130px 15px 10px 15px;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.typography.titleSize};
    }
  }
`;

export default PageStyled;
