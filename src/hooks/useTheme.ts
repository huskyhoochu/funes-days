import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { SerializedStyles } from '@emotion/react';
import { screenState, themeState } from '@/store/theme';
import { ThemeClassBuilder } from '@/styles/theme';

const useTheme = (): [SerializedStyles, ScreenType, ThemeType] => {
  const screen = useRecoilValue(screenState);
  const theme = useRecoilValue(themeState);

  const ThemeClass = useMemo(
    () => ThemeClassBuilder(screen, theme),
    [screen, theme],
  );
  return [ThemeClass, screen, theme];
};

export default useTheme;
