import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { screenState, themeState } from '@/store/theme';
import { ThemeClassBuilder } from '@/styles/theme';

const useTheme = (): [string, ScreenType, ThemeType] => {
  const screen = useRecoilValue(screenState);
  const theme = useRecoilValue(themeState);

  const ThemeClass = useMemo(
    () => ThemeClassBuilder(screen, theme),
    [screen, theme],
  );
  return [ThemeClass, screen, theme];
};

export default useTheme;
