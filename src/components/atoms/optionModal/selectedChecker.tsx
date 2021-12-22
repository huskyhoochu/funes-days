import React from 'react';
import { SelectedCheckerClass } from './classes';

interface Props {
  screenOrTheme: ScreenType | ThemeType;
  check: ScreenType | ThemeType;
}

const SelectedChecker: React.FC<Props> = ({ screenOrTheme, check }) => {
  return (
    <div className={SelectedCheckerClass}>
      {screenOrTheme === check ? (
        <span className="material-icons-outlined">check_circle_outline</span>
      ) : (
        <span className="material-icons-outlined">radio_button_unchecked</span>
      )}
    </div>
  );
};

export default SelectedChecker;
