import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/store/theme';
import useTheme from '@/hooks/useTheme';
import { ThemeFormWrapper } from './styled';
import SelectedChecker from './selectedChecker';

const ThemeForm: React.FC = () => {
  const [, screen] = useTheme();
  const [theme, setTheme] = useRecoilState(themeState);

  const changeTheme = (e: React.BaseSyntheticEvent) => {
    setTheme(e.currentTarget.value);
  };

  return (
    <ThemeFormWrapper screenType={screen}>
      <h5 className="title">테마</h5>
      <div className="content">
        <label htmlFor="beige" className="beige">
          <SelectedChecker screenOrTheme={theme} check="beige" />
          <input
            id="beige"
            type="radio"
            name="beige"
            value="beige"
            onChange={changeTheme}
            checked={theme === 'beige'}
          />
        </label>
        <label htmlFor="green" className="green">
          <SelectedChecker screenOrTheme={theme} check="green" />
          <input
            id="green"
            type="radio"
            name="green"
            value="green"
            onChange={changeTheme}
            checked={theme === 'green'}
          />
        </label>
        <label htmlFor="mint" className="mint">
          <SelectedChecker screenOrTheme={theme} check="mint" />
          <input
            id="mint"
            type="radio"
            name="mint"
            value="mint"
            onChange={changeTheme}
            checked={theme === 'mint'}
          />
        </label>
        <label htmlFor="pink" className="pink">
          <SelectedChecker screenOrTheme={theme} check="pink" />
          <input
            id="pink"
            type="radio"
            name="pink"
            value="pink"
            onChange={changeTheme}
            checked={theme === 'pink'}
          />
        </label>
        <label htmlFor="yellow" className="yellow">
          <SelectedChecker screenOrTheme={theme} check="yellow" />
          <input
            id="yellow"
            type="radio"
            name="yellow"
            value="yellow"
            onChange={changeTheme}
            checked={theme === 'yellow'}
          />
        </label>
      </div>
    </ThemeFormWrapper>
  );
};

export default ThemeForm;
