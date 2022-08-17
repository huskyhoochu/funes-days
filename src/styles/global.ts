import { css } from '@emotion/react';

const GlobalStyle = css`
  @font-face {
    font-family: 'LeferiPoint';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'LeferiPoint';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }

  * {
    font-family: 'Fira Code', 'LeferiPoint', monospace;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-overflow-scrolling: touch;
  }

  a,
  button {
    cursor: pointer;
  }

  /* Typography */
  /* https://material.io/design/typography/the-type-system.html#type-scale */

  h1 {
    font-size: 93px;
    letter-spacing: -1.5px;
  }

  h2 {
    font-size: 58px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-size: 47px;
    letter-spacing: 0;
  }

  h4 {
    font-size: 33px;
    letter-spacing: 0.25px;
  }

  h5 {
    font-size: 23px;
    letter-spacing: 0;
  }

  h6 {
    font-size: 19px;
    letter-spacing: 0.15px;
  }

  button {
    font-size: 14px;
    letter-spacing: 1.25px;
  }

  strong {
    font-weight: 700;
  }

  /* Material Icons */
  /* https://google.github.io/material-design-icons/#icon-font-for-the-web */
  .material-icons-outlined {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;

export default GlobalStyle;
