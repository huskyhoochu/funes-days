import styled from '@emotion/styled';
import { H4Class, H5Class, H6Class } from '@/styles/typography';
import { breakPoints } from '@/styles/screen';

export const PaginationWrapper = styled.div`
  ${H4Class};
  margin-block: 64px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${breakPoints.tablet}px) {
        ${H5Class};
        width: 36px;
        height: 36px;
      }

      @media (max-width: ${breakPoints.mobile}px) {
        ${H6Class};
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        &.active {
          font-weight: 700;
        }
      }
    }
  }
`;
