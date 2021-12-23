import React from 'react';
import { SelectedCheckerWrapper } from './styled';

interface Props {
  screenOrTheme: ScreenType | ThemeType;
  check: ScreenType | ThemeType;
}

const SelectedChecker: React.FC<Props> = ({ screenOrTheme, check }) => {
  return (
    <SelectedCheckerWrapper>
      {screenOrTheme === check ? (
        <span className="material-icons-outlined">check_circle_outline</span>
      ) : (
        <span className="material-icons-outlined">radio_button_unchecked</span>
      )}
    </SelectedCheckerWrapper>
  );
};

export default SelectedChecker;
