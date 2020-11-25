import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;

    --color-box-base: #FFFFFF;

    --color-gray: #6A6180;
    --color-gray-lighter: #9C98A6;

    --color-green: #04BF58;
    --color-green-lighter: #04D361;

    --color-font: #3d3d4d;
    --color-font-lighter: #a8a8b3;

    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;

    --color-line-in-white: #E6E6F0;

    --color-icon: #c9c9d4;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    -webkit-font-smoothing: antialiased;

    color: #FFF;
    background: var(--color-primary-dark);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button {
    font: 16px Roboto Slab, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}
`;
