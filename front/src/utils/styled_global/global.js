import { createGlobalStyle } from 'styled-components';
import { resetCSS } from './resetCSS';
import { mediaQueries } from './mediaQueries';
import { enableFonts } from './enableFonts';

export const GlobalStyle = createGlobalStyle`
  ${enableFonts}
  ${resetCSS}

  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  body {
    color: rgba(0, 0, 0, .87);
    background-color: #fafafa;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'IBM Plex Serif', serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ${mediaQueries}
`;