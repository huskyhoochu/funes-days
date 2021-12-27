import styled from '@emotion/styled';
import { breakPoints, gridPoints } from '@/styles/screen';
import {
  Body2Class,
  CaptionClass,
  H5Class,
  H6Class,
  Subtitle1Class,
} from '@/styles/typography';

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

      @media (max-width: ${breakPoints.tablet}px) {
        ${H6Class};
      }

      @media (max-width: ${breakPoints.mobile}px) {
        ${Body2Class};
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
