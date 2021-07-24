import { createGlobalStyle } from "styled-components";
import background from '../assets/images/Pimentas/home-background-img.jpg'
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

body {
  background-image: url(${background});
}
`;