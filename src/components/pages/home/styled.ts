import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { css, SerializedStyles } from '@emotion/react';
import { breakPoints, gridPoints } from '@/styles/screen';
import {
  CaptionClass,
  H1Class,
  H3Class,
  Subtitle2Class,
} from '@/styles/typography';
import radius from '@/styles/radius';
import { Gray } from '@/styles/theme';

export const IntroWrapper = styled.div<{
  themeClass: SerializedStyles;
}>`
  ${props => props.themeClass};

  .intro-img {
    height: 100%;

    video {
      width: 100%;
      height: 35vh;
      object-fit: cover;
      object-position: center;
    }
  }

  .intro-text {
    position: relative;
    overflow: hidden;
    height: 15vh;
    margin-inline: ${gridPoints.gutter}px;

    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 72px;
      text-align: right;
      width: 30000px;
      ${H1Class};
      font-weight: 700;

      @media (max-width: ${breakPoints.mobile}px) {
        ${H3Class};
      }

      &:after {
        content: '';
        position: absolute;
        width: 60px;
        height: 100%;
        margin-left: 16px;
        background-color: ${Gray['400']};
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

export const DevSectionWrapper = styled.div`
  padding-block: 90px;

  .title-group {
    h4 {
      text-align: center;
      font-weight: 700;
      text-decoration: underline;
    }
  }

  .post-group {
    margin-block: 60px;
    display: grid;
    grid-auto-flow: column dense;
    grid-gap: ${gridPoints.gutter}px;

    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);

    > :nth-of-type(3) {
      grid-column-end: span 1;
      grid-row-end: span 2;
    }

    @media (max-width: ${breakPoints.tablet}px) {
      grid-auto-flow: row dense;

      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(4, auto);

      > :nth-of-type(3) {
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

export const PostCardWrapper = styled(motion.div)<{ screen: ScreenType }>`
  border-style: solid;
  border-width: 1px;
  padding: 12px 16px;
  border-radius: ${radius['8']}px;
  width: 100%;
  height: 100%;

  h6 {
    font-weight: 700;
    margin-bottom: 8px;
  }

  .description {
    ${Subtitle2Class};
    margin-block: 4px;
  }

  .tag-group {
    margin-top: 8px;
    display: flex;
    align-items: center;

    .tag {
      ${CaptionClass};
      font-weight: 700;
      border-radius: ${radius['8']}px;
      padding: 3px 6px;
      margin-right: ${gridPoints.gutter}px;

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
