import { css } from '@emotion/react';

type Themes = {
  [index in ScreenType]: {
    [index in ThemeType]: {
      text: string;
      background: string;
    };
  };
};

export const Theme: Themes = {
  light: {
    beige: {
      text: '#213747',
      background: '#e1cbbb',
    },
    green: {
      text: '#412076',
      background: '#bbdc86',
    },
    mint: {
      text: '#1d0512',
      background: '#dff7ea',
    },
    pink: {
      text: '#024141',
      background: '#f9bbbb',
    },
    yellow: {
      text: '#05174e',
      background: '#feeab4',
    },
  },
  dark: {
    beige: {
      text: '#e1cbbb',
      background: '#213747',
    },
    green: {
      text: '#bbdc86',
      background: '#412076',
    },
    mint: {
      text: '#dff7ea',
      background: '#1d0512',
    },
    pink: {
      text: '#f9bbbb',
      background: '#024141',
    },
    yellow: {
      text: '#feeab4',
      background: '#05174e',
    },
  },
};

export const Gray = {
  '100': '#fbfbfb',
  '200': '#f3f3f3',
  '300': '#e2e2e2',
  '400': '#bcbcbc',
  '500': '#878787',
  '600': '#5b5b5b',
  '700': '#363636',
};

export const ThemeClassBuilder = (screen: ScreenType, theme: ThemeType) =>
  css`
    color: ${Theme[screen][theme].text};
    background-color: ${Theme[screen][theme].background};
    border-color: ${Theme[screen][theme].text};
  `;

export const ReversedThemClassBuilder = (
  screen: ScreenType,
  theme: ThemeType,
) => {
  const reversedScreen = screen === 'light' ? 'dark' : 'light';
  return css`
    color: ${Theme[reversedScreen][theme].text};
    background-color: ${Theme[reversedScreen][theme].background};
    border-color: ${Theme[reversedScreen][theme].text};
  `;
};
