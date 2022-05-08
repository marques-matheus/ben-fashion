import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    font-family: 'Tenor Sans', sans-serif;
}

body{
    background-color: #FCFCFC;
}

a {
    text-decoration: none;
    color: black;
}
`;

export default GlobalStyle;
