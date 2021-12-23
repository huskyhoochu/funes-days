import React from 'react';
import { useRecoilState } from 'recoil';
import { screenState } from '@/store/theme';
import useTheme from '@/hooks/useTheme';
import { ScreenFormWrapper } from './styled';
import SelectedChecker from './selectedChecker';

const ScreenForm: React.FC = () => {
  const [, , theme] = useTheme();
  const [screen, setScreen] = useRecoilState(screenState);

  const changeScreen = (e: React.BaseSyntheticEvent) => {
    setScreen(e.currentTarget.value);
  };

  return (
    <ScreenFormWrapper themeType={theme}>
      <h5 className="title">배경</h5>
      <div className="content">
        <label htmlFor="light" className="light">
          <SelectedChecker screenOrTheme={screen} check="light" />
          <span>밝게</span>
          <input
            id="light"
            type="radio"
            name="light"
            value="light"
            onChange={changeScreen}
            checked={screen === 'light'}
          />
        </label>
        <label htmlFor="dark" className="dark">
          <SelectedChecker screenOrTheme={screen} check="dark" />
          <span>어둡게</span>
          <input
            id="dark"
            type="radio"
            name="dark"
            value="dark"
            onChange={changeScreen}
            checked={screen === 'dark'}
          />
        </label>
      </div>
    </ScreenFormWrapper>
  );
};

export default ScreenForm;
