import { css } from '@emotion/react';

const GlobalStyle = css`
  * {
    font-family: 'IBM Plex Mono', 'Noto Sans KR', monospace;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
