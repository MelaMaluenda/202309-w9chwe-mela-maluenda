import styled from "styled-components";

const PageStyled = styled.main`
  text-align: center;

  .frame {
    padding: 200px 15px 0px 15px;
    font-family: ${({ theme }) => theme.typography.regularFamily};
    font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    color: ${({ theme }) => theme.colours.garnet};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colours.cream};
    font-weight: bolder;
  }

  @media (min-width: 620px) {
    .frame {
      padding: 250px 15px 0px 15px;
      text-transform: uppercase;
    }
  }
`;

export default PageStyled;
