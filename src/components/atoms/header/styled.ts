import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { H5Class } from '@/styles/typography';
import { breakPoints } from '@/styles/screen';
import radius from '@/styles/radius';

export const HeaderWrapper = styled.header<{
  themeClass: SerializedStyles;
  screen: ScreenType;
  backgroundColor: string;
}>`
  ${props => props.themeClass};
  ${H5Class};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  font-weight: 700;
  padding-block: 16px;
  z-index: 1;
  @media (min-width: ${breakPoints.tablet}px) {
    background-color: ${props => props.backgroundColor};
  }

  ${props =>
    props.backgroundColor &&
    props.screen === 'light' &&
    css`
      @media (max-width: ${breakPoints.tablet}px) {
        background-color: rgba(255, 255, 255, 0.5);
      }
    `};

  ${props =>
    props.backgroundColor &&
    props.screen === 'dark' &&
    css`
      @media (max-width: ${breakPoints.tablet}px) {
        background-color: rgba(0, 0, 0, 0.5);
      }
    `};

  .inner-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home {
      height: 28px;

      @media (min-width: ${breakPoints.tablet}px) {
        ${props =>
          props.backgroundColor &&
          props.screen === 'light' &&
          css`
            background-color: rgba(255, 255, 255, 0.5);
          `};

        ${props =>
          props.backgroundColor &&
          props.screen === 'dark' &&
          css`
            background-color: rgba(0, 0, 0, 0.5);
          `};
        border-radius: ${radius['4']}px;
        height: 36px;

        a {
          padding: 8px;
        }
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      border-radius: ${radius['4']}px;

      @media (min-width: ${breakPoints.tablet}px) {
        padding: 8px;
        ${props =>
          props.backgroundColor &&
          props.screen === 'light' &&
          css`
            background-color: rgba(255, 255, 255, 0.5);
          `};

        ${props =>
          props.backgroundColor &&
          props.screen === 'dark' &&
          css`
            background-color: rgba(0, 0, 0, 0.5);
          `};
      }

      .nav {
        margin-right: 16px;
        @media (max-width: ${breakPoints.mobile}px) {
          display: none;
        }

        ul {
          display: flex;
          align-items: center;

          li {
            margin-inline: 8px;
            height: 28px;
          }
        }
      }

      .option {
        height: 28px;
        display: flex;
        align-items: end;

        .material-icons-outlined {
          ${H5Class};
        }
      }
    }

    .mobile {
      display: none;

      @media (max-width: ${breakPoints.mobile}px) {
        height: 28px;
        display: flex;
        align-items: end;
        margin-left: 24px;
      }

      .material-icons-outlined {
        ${H5Class};
      }
    }
  }
`;

export const MobileNavWrapper = styled.nav`
  li {
    display: block;
    margin-block: 16px;

    a {
      height: 28px;
      display: flex;
      align-items: center;
    }

    .material-icons-outlined {
      ${H5Class};
      height: 28px;
      display: flex;
      align-items: end;
      margin-right: 8px;
    }
  }
`;
