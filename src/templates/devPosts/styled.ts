import styled from '@emotion/styled';
import { breakPoints } from '@/styles/screen';
import { H4Class } from '@/styles/typography';
import { css } from '@emotion/react';

export const DevListWrapper = styled.div<{
  screen: ScreenType;
}>`
  padding-block: 120px;
  position: relative;
  z-index: 0;
  background-color: transparent;

  ${props =>
    props.screen === 'light' &&
    css`
      backdrop-filter: blur(6px) contrast(40%);
    `}

  ${props =>
    props.screen === 'dark' &&
    css`
      backdrop-filter: blur(6px) brightness(0.4);
    `}

  .title-group {
    h3 {
      text-align: center;
      font-weight: 700;
      text-decoration: underline;

      @media (max-width: ${breakPoints.desktop}px) {
        ${H4Class};
      }
    }
  }

  .post-list {
    margin-block: 30px;
    display: grid;
  }
`;
