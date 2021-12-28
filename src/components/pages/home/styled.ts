import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { breakPoints, gridPoints } from '@/styles/screen';
import {
  Body1Class,
  Body2Class,
  CaptionClass,
  H5Class,
  H6Class,
  Subtitle1Class,
  Subtitle2Class,
} from '@/styles/typography';
import radius from '@/styles/radius';
import { Gray } from '@/styles/theme';

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  height: 100%;

  @media (max-width: ${breakPoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60% 40%;
  }

  @media (max-width: ${breakPoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40% 60%;
  }

  .intro-img {
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .intro-text {
    padding-block: 60px;
    margin-inline: ${gridPoints.gutter}px;

    @media (max-width: ${breakPoints.tablet}px) {
      padding-block: 0;
      margin-block: ${gridPoints.gutter}px;
    }

    .content {
      ${H5Class};

      &:after {
        content: '';
        position: absolute;
        width: 12px;
        height: 36px;
        margin-inline: 4px;
        background-color: ${Gray['400']};
      }

      @media (max-width: ${breakPoints.tablet}px) {
        ${H6Class};

        &:after {
          width: 12px;
          height: 30px;
        }
      }

      @media (max-width: ${breakPoints.mobile}px) {
        ${Body2Class};

        &:after {
          width: 8px;
          height: 20px;
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

    .excerpt {
      ${H6Class};
      text-align: right;
      margin-block: 16px;

      @media (max-width: ${breakPoints.tablet}px) {
        ${Subtitle1Class};
      }

      @media (max-width: ${breakPoints.mobile}px) {
        ${CaptionClass};
      }
    }
  }
`;

export const DevSectionWrapper = styled.div`
  padding-block: 60px;

  .title-group {
    h4 {
      font-weight: 700;
    }
  }

  .post-group {
    margin-block: 60px;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${gridPoints.col * 4 + gridPoints.gutter * 3}px, 1fr)
    );

    @media (max-width: ${breakPoints.mobile}px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const PostCardWrapper = styled(Link)<{ screen: ScreenType }>`
  border-style: solid;
  border-width: 1px;
  padding: 12px 16px;
  border-radius: ${radius['8']}px;

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
      ${Body1Class};
      font-weight: 700;
      border-radius: ${radius['8']}px;
      padding: 3px 6px;

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
