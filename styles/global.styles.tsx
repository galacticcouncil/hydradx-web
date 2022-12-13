import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    /* scroll-behavior: smooth !important; */
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    line-height: 1.5;
    /* background-color: #1E1E1E; */
    background: linear-gradient(0deg, #040713, #040713), #070B1F;
    color: #EBEBEB;
  }


  h1, h2, h3, h4, h5, h6 {
  }
  
  
  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
  
  input, button {
    border: none;
    outline: none;
    font-family: inherit;
    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 1.8rem;
  }
`
