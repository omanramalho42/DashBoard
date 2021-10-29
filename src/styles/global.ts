import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,* {
        font-family: 'Montserrat';
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
          
    }

    button {
        cursor: pointer;
    }
`; 

export default GlobalStyle;