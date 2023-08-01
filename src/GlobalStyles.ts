import { createGlobalStyle } from "styled-components";
export const SchemeColors = {};

const GlobalStyle = createGlobalStyle`


//reset
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
   // transition:all 0.2s;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    color:${({ theme }) => theme.fontColor}
}
body{
    
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
}





button{
    all:unset;
  cursor: pointer;
  color: ${({ theme }) => theme.buttonFontColor};
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.01213rem;
  &:hover{
    color: ${({ theme }) => theme.buttonHoverFontColor};
  }
}

`;

export default GlobalStyle;
