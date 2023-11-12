import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.regularFamily};
  font-size: ${({ theme }) => theme.typography.regularSize};
}

body {
  margin: 0;
  color: ${({ theme }) => theme.colours.darkBrown};
  background-image: url("./images/fons.webp");
  background-repeat: no-repeat;
  background-size: cover;
  
}

h1,
h2,
h3,
h4 {
  margin: 0;
  font: inherit;
}

ul {
  margin: 0;
  list-style: none;
  padding-left: 0;
}

input,
button,
textarea,
select {
	font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
	max-width: 100%;
}

button {
	border: none;
	background-color: transparent;
	font: inherit;
}
`;

export default GlobalStyle;
