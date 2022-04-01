import {
  H5Class,
  H6Class,
  Subtitle1Class,
  Subtitle2Class,
} from '@/styles/typography';
import styled from '@emotion/styled';
import { breakPoints } from '@/styles/screen';

export const NavigatorWrapper = styled.div`
  margin-block: 90px;

  @media (max-width: ${breakPoints.mobile}px) {
    margin-block: 60px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${H5Class};

    @media (max-width: ${breakPoints.tablet}px) {
      ${H6Class};
    }

    @media (max-width: ${breakPoints.mobile}px) {
      ${Subtitle1Class};
    }

    .btn {
      width: 300px;

      @media (max-width: ${breakPoints.desktop}px) {
        width: 200px;
      }

      @media (max-width: ${breakPoints.tablet}px) {
        width: 33%;
      }

      .arrow {
        ${H6Class};
        font-weight: 700;
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        @media (max-width: ${breakPoints.tablet}px) {
          ${Subtitle1Class};
        }

        @media (max-width: ${breakPoints.mobile}px) {
          ${Subtitle2Class};
        }
      }

      .title {
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-height: 1.5em;
        max-height: 3em;

        &:hover {
          text-decoration: underline;
        }

        &.end {
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
`;
