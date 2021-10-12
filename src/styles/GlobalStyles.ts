import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size:93.75%
    }
    @media(max-height:720px){
      font-size:87.5%
    }
  }

  body{
    font-family: "roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
  
  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }
`;
