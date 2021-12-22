import { css } from '@emotion/css';
import { H5Class } from '@/styles/typography';

export const HeaderClass = (ThemeClass: string) => css`
  ${ThemeClass};
  ${H5Class};
  height: 60px;
  font-weight: 700;
  padding-block: 16px;

  .inner-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home {
      height: 28px;
    }

    .nav {
      ul {
        display: flex;
        align-items: center;

        li {
          margin-left: 16px;
          height: 28px;

          button {
            height: 100%;

            .material-icons-outlined {
              ${H5Class};
            }
          }
        }
      }
    }
  }
`;
