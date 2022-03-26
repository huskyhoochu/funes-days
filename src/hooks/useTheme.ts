import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { SerializedStyles } from '@emotion/react';
import { screenState, themeState } from '@/store/theme';
import { ReversedThemClassBuilder, ThemeClassBuilder } from '@/styles/theme';

const useTheme = (): [
  SerializedStyles,
  ScreenType,
  ThemeType,
  SerializedStyles,
] => {
  const screen = useRecoilValue(screenState);
  const theme = useRecoilValue(themeState);

  const ThemeClass = useMemo(
    () => ThemeClassBuilder(screen, theme),
    [screen, theme],
  );

  const ReversedThemeClass = useMemo(
    () => ReversedThemClassBuilder(screen, theme),
    [screen, theme],
  );
  return [ThemeClass, screen, theme, ReversedThemeClass];
};

export default useTheme;
