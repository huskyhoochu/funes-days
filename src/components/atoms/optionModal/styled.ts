import styled from '@emotion/styled';
import { Subtitle1Class } from '@/styles/typography';
import { Gray, Theme } from '@/styles/theme';
import radius from '@/styles/radius';

export const ScreenFormWrapper = styled.div<{ themeType: ThemeType }>`
  ${Subtitle1Class};

  .content {
    margin-block: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    grid-template-rows: 60px;
  }

  label {
    padding: 8px 12px;
    border: 1px solid ${Gray['100']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${radius['8']}px;
    cursor: pointer;

    span {
      display: block;
    }

    &.light {
      background-color: ${props => Theme['light'][props.themeType].background};
      color: ${props => Theme['light'][props.themeType].text};
    }

    &.dark {
      background-color: ${props => Theme['dark'][props.themeType].background};
      color: ${props => Theme['dark'][props.themeType].text};
    }
  }
`;

export const ThemeFormWrapper = styled.div<{ screenType: ScreenType }>`
  ${Subtitle1Class};

  .content {
    margin-block: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 16px;
    grid-template-rows: 60px;
  }

  label {
    padding: 8px 12px;
    border: 1px solid ${Gray['100']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${radius['8']}px;
    cursor: pointer;

    span {
      display: block;
    }

    &.beige {
      background-color: ${props => Theme[props.screenType]['beige'].background};
      color: ${props => Theme[props.screenType]['beige'].text};
    }

    &.green {
      background-color: ${props => Theme[props.screenType]['green'].background};
      color: ${props => Theme[props.screenType]['green'].text};
    }

    &.mint {
      background-color: ${props => Theme[props.screenType]['mint'].background};
      color: ${props => Theme[props.screenType]['mint'].text};
    }

    &.pink {
      background-color: ${props => Theme[props.screenType]['pink'].background};
      color: ${props => Theme[props.screenType]['pink'].text};
    }

    &.yellow {
      background-color: ${props =>
        Theme[props.screenType]['yellow'].background};
      color: ${props => Theme[props.screenType]['yellow'].text};
    }
  }
`;

export const SelectedCheckerWrapper = styled.div`
  .material-icons-outlined {
    font-size: 18px;
    margin-inline: 4px;
  }
`;
