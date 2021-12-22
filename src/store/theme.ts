import { atom } from 'recoil';

export const screenState = atom<ScreenType>({
  key: 'screenState',
  default: 'light',
});

export const themeState = atom<ThemeType>({
  key: 'themeState',
  default: 'beige',
});
