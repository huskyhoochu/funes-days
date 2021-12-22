import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { screenState, themeState } from '@/store/theme';
import { ThemeClassBuilder } from '@/styles/theme';

const useTheme = (): string => {
  const screen = useRecoilValue(screenState);
  const theme = useRecoilValue(themeState);

  return useMemo(() => ThemeClassBuilder(screen, theme), [screen, theme]);
};

export default useTheme;
