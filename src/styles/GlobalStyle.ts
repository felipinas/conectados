import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');

  :root {
    --color-primary: #3C234D;
    --color-primary-light: #452d53;
    --color-primary-lightest: #533069;
    --color-white: #F8F9FA;
    --color-secondary: #C6D40F;
    --color-secondary-light: #ECF57F;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background-color: var(--color-primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body, input, button, textarea {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
