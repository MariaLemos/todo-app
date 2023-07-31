import { createGlobalStyle } from "styled-components";
export const SchemeColors = {};

const GlobalStyle = createGlobalStyle`


//reset
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    transition:all 0.2s;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
}
body{
    
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
}





button{
    background-color:transparent ;
    border:none;
  color:inherit;
}

`;

export default GlobalStyle;
