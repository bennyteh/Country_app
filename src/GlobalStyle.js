import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.theme.backgroundColor};
        transition: background-color .5s ease;
    }`

export default GlobalStyle