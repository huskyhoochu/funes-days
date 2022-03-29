import styled from '@emotion/styled';
import { breakPoints } from '@/styles/screen';
import { H4Class } from '@/styles/typography';

export const DevListWrapper = styled.div`
  padding-block: 90px;

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
    margin-block: 60px;
    display: grid;
    grid-gap: 1px;
  }
`;
