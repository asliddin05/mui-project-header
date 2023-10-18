import { createGlobalStyle } from "styled-components";
import { COLORS } from './color'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
}
body {
    background-color: ${COLORS.lynxWhite};
}
button {
    border: none;
    background-color: transparent;
}
`
