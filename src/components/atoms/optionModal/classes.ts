import { css } from '@emotion/css';
import { Subtitle1Class } from '@/styles/typography';
import { Gray, Theme } from '@/styles/theme';
import radius from '@/styles/radius';

export const OptionModalClass = css``;

export const ScreenFormClass = (theme: ThemeType) => css`
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

    &.light {
      background-color: ${Theme['light'][theme].background};
      color: ${Theme['light'][theme].text};
    }

    &.dark {
      background-color: ${Theme['dark'][theme].background};
      color: ${Theme['dark'][theme].text};
    }
  }
`;

export const SelectedCheckerClass = css`
  .material-icons-outlined {
    font-size: 18px;
    margin-right: 4px;
  }
`;
