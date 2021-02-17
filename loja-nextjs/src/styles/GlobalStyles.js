import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0px;
    outline: 0px;
    margin: 0px;
    box-sizing: border-box;
    list-style: none;
  }

  h1{
    
  }
  
  body{
    background: #F9F5EF;
    width: 100vw;
    overflow-x: hidden;
  }

  .Container{
    width: 100%;
    max-width: 1200px;
  }

  a{
    cursor: pointer;
    text-decoration: none;
    color: initial;
    
    :hover{
      text-decoration: none;
      color: initial;
    }
  }
`;
