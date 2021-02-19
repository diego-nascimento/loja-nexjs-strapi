import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0px;
    outline: 0px;
    margin: 0px;
    box-sizing: border-box;
    list-style: none;
  }

html{
  width: 100%;
}

#__next {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

  
  body{
    background: #F9F5EF;
    overflow: hidden;
    overflow-y: scroll;
    height: 100%;
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
