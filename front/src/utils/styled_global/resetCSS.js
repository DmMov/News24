import { css } from 'styled-components';

export const resetCSS = css`
  * {
    padding: 0;
    margin: 0;
  }

  button, 
  input, 
  textarea {
    background: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: currentColor;
  }

  li {
    list-style: none;
  }

  

  
`;