import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        font-family: 'Open Sans', sans-serif;
    }
`;
