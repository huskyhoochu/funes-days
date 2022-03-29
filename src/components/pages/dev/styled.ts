import styled from '@emotion/styled';
import {
  Body1Class,
  Body2Class,
  H4Class,
  H6Class,
  Subtitle2Class,
} from '@/styles/typography';
import { breakPoints, gridPoints } from '@/styles/screen';
import { css } from '@emotion/react';
import radius from '@/styles/radius';
import { Gray } from '@/styles/theme';

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
  }
`;

export const MarkdownWrapper = styled.div<{ screen: ScreenType }>`
  padding-block: 120px;
  position: relative;
  display: flex;

  .title-group {
    h3 {
      font-weight: 700;
      margin-bottom: 16px;
    }

    .tag-group {
      margin-block: 16px;
      display: flex;
      align-items: center;

      .tag {
        ${H6Class};
        font-weight: 700;
        border-radius: ${radius['8']}px;
        padding: 4px 8px;
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
  }

  .md-content {
    position: relative;
    margin-block: 60px;
    ${Body1Class};
    overflow-x: auto;

    .caption {
      text-align: center;
      ${Body2Class};
    }

    a {
      text-decoration: underline;
    }

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-top: 60px;
      font-weight: 700;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin-bottom: 16px;
    }

    p {
      text-align: justify;
      line-height: 2;
    }

    blockquote {
      margin-block: ${gridPoints.gutter * 2}px;
      margin-inline: ${gridPoints.gutter * 3}px;
      border-left-style: solid;
      border-left-width: 4px;
      padding-left: ${gridPoints.gutter}px;

      @media (max-width: ${breakPoints.mobile}px) {
        margin-inline: ${gridPoints.gutter}px;
      }
    }

    .gatsby-highlight {
      margin-block: 32px;

      @media (min-width: ${breakPoints.desktop}px) {
        > pre {
          max-width: ${gridPoints.col * 12 + gridPoints.gutter * 11}px;
        }
      }

      @media (max-width: ${breakPoints.desktop}px) {
        > pre {
          max-width: ${gridPoints.col * 6 + gridPoints.gutter * 5}px;
        }
      }

      @media (max-width: ${breakPoints.tablet}px) {
        > pre {
          max-width: ${breakPoints.tablet}px;
        }
      }

      > pre {
        border-radius: ${radius['8']}px;
      }
    }

    .anchor {
      fill: ${props => (props.screen === 'light' ? Gray['600'] : Gray['200'])};
    }
  }

  .toc-group {
    position: sticky;
    top: 120px;
    right: 0;
    min-width: 200px;
    max-width: 300px;
    height: 100%;
    margin-inline: ${gridPoints.gutter}px;
    line-height: 2;
    word-break: keep-all;
    ${Subtitle2Class};

    @media (max-width: ${breakPoints.tablet}px) {
      display: none;
    }

    h5 {
      font-weight: 700;
    }

    li {
      margin-bottom: 8px;

      &.active {
        > p,
        > a {
          text-decoration: underline;
        }
      }

      p {
        margin-bottom: 8px;
      }

      ul {
        margin-left: ${gridPoints.gutter}px;
      }
    }
  }
`;
