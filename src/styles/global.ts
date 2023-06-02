import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;

    background-color: ${(props) => props.theme.colors.background};
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    border: none;
    background: none;
    outline: none;

    cursor: pointer;
  }
`
