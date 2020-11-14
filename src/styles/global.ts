import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        
        color: #FFF;
        background: #312E38;
    }

    :root {
        font-size: 62.5%;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    
    button {
        cursor: pointer;
    }
`;