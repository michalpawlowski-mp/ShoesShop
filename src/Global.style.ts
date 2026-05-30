import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", system-ui, sans-serif;

}
body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
::-webkit-scrollbar {
  display: none;
}
#root{
  width: 100%;
  height: 100%;
}
`;
