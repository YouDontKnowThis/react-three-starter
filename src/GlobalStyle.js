import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 100%;
    box-sizing: border-box;
    }
*, *::after, *::before {
    margin: 0;
    box-sizing: inherit;
}
body {
    width: 100%;
    height: 100%;
    background-color: #2b112b;
    font-family: 'Open Sans', sans-serif;
}

a {
    text-decoration: none
}

ul, li {
    list-style: none
}

canvas {
    width: 100%;
    height: 100%
}
`;
export { GlobalStyle };
