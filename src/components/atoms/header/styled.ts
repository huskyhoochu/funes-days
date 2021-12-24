import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import { H5Class } from '@/styles/typography';
import { breakPoints } from '@/styles/screen';

export const HeaderWrapper = styled.header<{ themeClass: SerializedStyles }>`
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

  .inner-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home {
      height: 28px;
    }

    .right-section {
      display: flex;
      align-items: center;

      .nav {
        margin-right: 16px;
        @media (max-width: ${breakPoints.mobile}px) {
          display: none;
        }

        ul {
          display: flex;
          align-items: center;

          li {
            margin-left: 16px;
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
