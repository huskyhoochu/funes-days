import { atom, AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  key =>
  ({ setSelf, onSet }) => {
    if (typeof localStorage !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet(newValue => {
        localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const screenState = atom<ScreenType>({
  key: 'screenState',
  default: 'dark',
  effects_UNSTABLE: [localStorageEffect<ScreenType>('screen')],
});

export const themeState = atom<ThemeType>({
  key: 'themeState',
  default: 'beige',
  effects_UNSTABLE: [localStorageEffect<ThemeType>('theme')],
});
