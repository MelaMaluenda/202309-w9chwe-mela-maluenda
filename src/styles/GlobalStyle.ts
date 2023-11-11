import { createGlobalStyle } from "styled-components/dist/base";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.regularFamily};
  font-family: ${({ theme }) => theme.typography.regularSize};
}

body {
  margin: 0;
  color: ${({ theme }) => theme.colours.darkBrown};
}

h1,
h2 {
  margin: 0;
}

ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
}

input {
  font: inhert;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
	border: none;
	background-color: transparent;
	font: inherit;
}
`;

export default GlobalStyle;
