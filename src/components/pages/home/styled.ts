import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { css, SerializedStyles } from '@emotion/react';
import { breakPoints, gridPoints } from '@/styles/screen';
import {
  Body1Class,
  CaptionClass,
  H1Class,
  H3Class,
  H4Class,
  H5Class,
  H6Class,
  Subtitle1Class,
  Subtitle2Class,
} from '@/styles/typography';
import radius from '@/styles/radius';
import { Gray } from '@/styles/theme';

export const IntroWrapper = styled.div<{
  themeClass: SerializedStyles;
  reversedThemeClass: SerializedStyles;
}>`
  ${props => props.reversedThemeClass};

  #wave-bottom {
    position: absolute;
    top: -10px;
    left: 0;
    z-index: 1;
  }

  .intro-img {
    position: relative;
    height: 35vh;

    video {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .intro-text {
    position: relative;
    overflow: hidden;
    height: 15vh;

    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 104px;
      text-align: right;
      width: 30000px;
      ${H1Class};
      font-weight: 700;

      @media (max-width: ${breakPoints.mobile}px) {
        ${H3Class};
        right: 60px;
      }

      &:after {
        content: '';
        position: absolute;
        width: 60px;
        height: 100%;
        margin-left: 16px;
        background-color: ${Gray['400']};

        @media (max-width: ${breakPoints.mobile}px) {
          width: 30px;
        }
      }

      &.complete {
        &:after {
          animation-name: breath;
          animation-iteration-count: infinite;
          animation-duration: 1s;
        }
      }

      @keyframes breath {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export const LatestSectionWrapper = styled.div<{
  themeClass: SerializedStyles;
  reversedThemeClass: SerializedStyles;
}>`
  position: relative;
  padding-block: 120px;

  #wave-top {
    position: absolute;
    bottom: -6px;
    left: 0;
  }

  .title-group {
    h2 {
      text-align: center;
      font-weight: 700;
      text-decoration: underline;

      @media (max-width: ${breakPoints.tablet}px) {
        ${H4Class};
      }
    }
  }

  .post-group {
    margin-block: 30px;
    display: grid;
    grid-auto-flow: column dense;

    grid-template-columns: repeat(4, minmax(300px, auto));
    grid-template-rows: repeat(2, 600px);

    > :nth-of-type(2) {
      grid-column-end: span 1;
      grid-row-end: span 2;
    }

    @media (max-width: ${breakPoints.desktop}px) {
      grid-template-columns: repeat(2, minmax(300px, auto));
      grid-template-rows: repeat(4, minmax(400px, auto));
    }

    @media (max-width: ${breakPoints.tablet}px) {
      grid-auto-flow: row dense;

      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(4, minmax(280px, auto));

      > :nth-of-type(2) {
        grid-column-end: span 1;
        grid-row-end: span 1;
      }

      > :nth-of-type(4) {
        grid-column-end: span 1;
        grid-row-end: span 2;
      }
    }

    @media (max-width: ${breakPoints.mobile}px) {
      grid-template-columns: repeat(1, auto);
      grid-template-rows: repeat(7, auto);
    }
  }
`;

export const PostCardWrapper = styled(motion.div)<{
  reversed: SerializedStyles;
  themes: ThemeType;
  screen: ScreenType;
}>`
  margin-block: 16px;
  padding: 24px;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;

  @media (max-width: ${breakPoints.mobile}px) {
    max-width: 100vw;
    margin-inline: 0;
    width: 100vw;
  }

  &:hover {
    ${props => props.reversed};

    .tag-group {
      .tag {
        ${props =>
          props.screen === 'light' &&
          css`
            background-color: rgba(0, 0, 0, 0.5);
          `};

        ${props =>
          props.screen === 'dark' &&
          css`
            background-color: rgba(255, 255, 255, 0.5);
          `};
      }
    }
  }

  .title {
    font-weight: 700;
    margin-bottom: 8px;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.5em;
    max-height: 3em;

    @media (max-width: ${breakPoints.desktop}px) {
      ${H4Class};
    }

    @media (max-width: ${breakPoints.tablet}px) {
      ${H5Class};
    }
  }

  .description {
    ${H5Class};
    margin-bottom: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1.5em;
    max-height: 4.5em;

    @media (max-width: ${breakPoints.desktop}px) {
      ${H6Class};
    }

    @media (max-width: ${breakPoints.tablet}px) {
      ${Body1Class};
      margin-bottom: 24px;
    }
  }

  .date {
    ${Subtitle1Class};
    margin-bottom: 4px;

    @media (max-width: ${breakPoints.desktop}px) {
      ${Subtitle2Class};
    }

    @media (max-width: ${breakPoints.tablet}px) {
      ${CaptionClass};
    }
  }

  .tag-group {
    margin-top: 8px;
    display: flex;
    align-items: center;

    .tag {
      ${Subtitle2Class};
      font-weight: 700;
      border-radius: ${radius['8']}px;
      padding: 3px 6px;
      margin-right: ${gridPoints.gutter}px;

      @media (max-width: ${breakPoints.tablet}px) {
        ${CaptionClass};
      }

      ${props =>
        props.screen === 'light' &&
        css`
          background-color: rgba(255, 255, 255, 0.5);
        `};

      ${props =>
        props.screen === 'dark' &&
        css`
          background-color: rgba(0, 0, 0, 0.5);
        `};
    }
  }
`;
