import styled from '@emotion/styled';
import { H4Class } from '@/styles/typography';

export const PaginationWrapper = styled.div`
  ${H4Class};
  margin-block: 32px;

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
