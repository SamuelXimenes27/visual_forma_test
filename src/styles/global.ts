import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap');

    html, body, .root {
        height: 100%;
        flex: 1;
        overflow-x: hidden;
    }

    :root {
        --unnamed-font-family-montserrat: Montserrat;
        --unnamed-font-style-normal: normal;
        --unnamed-font-weight-normal: normal;
        --unnamed-font-weight-bold: bold;
        --unnamed-font-size-16: 16px;
        --unnamed-font-size-18: 18px;
        --unnamed-font-size-24: 24px;
        --unnamed-character-spacing-0: 0px;
        --unnamed-line-spacing-21: 21px;
        --unnamed-line-spacing-24: 24px;
        --unnamed-line-spacing-32: 32px;
    }

    /* Character Styles */
    .unnamed-character-style-1 {
        font-family: var(--unnamed-font-family-montserrat);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-bold);
        font-size: var(--unnamed-font-size-18);
        line-height: var(--unnamed-line-spacing-24);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-ffffff);
    }
    .unnamed-character-style-2 {
        font-family: var(--unnamed-font-family-montserrat);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-normal);
        font-size: var(--unnamed-font-size-16);
        line-height: var(--unnamed-line-spacing-21);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-fafafa);
    }
    .unnamed-character-style-3 {
        font-family: var(--unnamed-font-family-montserrat);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-normal);
        font-size: var(--unnamed-font-size-24);
        line-height: var(--unnamed-line-spacing-32);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-fafafa);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: '#F9F9F9';
        font-family: 'Montserrat', sans-serif;
    }
    
    
    body, input, textarea, button{
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    [readonly] {
        color: white;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

`;
