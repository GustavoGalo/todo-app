import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 0;
  }
`;
