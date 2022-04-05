import styled from '@emotion/styled';
import {
  Body1Class,
  Body2Class,
  CaptionClass,
  H4Class,
  H5Class,
  H6Class,
  Subtitle1Class,
  Subtitle2Class,
} from '@/styles/typography';
import { breakPoints, gridPoints } from '@/styles/screen';
import { css } from '@emotion/react';
import radius from '@/styles/radius';
import { Gray } from '@/styles/theme';

export const MarkdownWrapper = styled.div<{ screen: ScreenType }>`
  padding-block: 120px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .title-group {
    .title {
      font-weight: 700;
      margin-bottom: 8px;

      @media (max-width: ${breakPoints.tablet}px) {
        ${H4Class};
      }
    }

    .description {
      ${H5Class};
      margin-bottom: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-height: 1.5em;
      max-height: 4.5em;

      @media (max-width: ${breakPoints.desktop}px) {
        ${H6Class};
      }

      @media (max-width: ${breakPoints.tablet}px) {
        ${Body1Class};
        margin-bottom: 24px;
      }
    }

    .date {
      ${Subtitle1Class};
      margin-bottom: 4px;

      @media (max-width: ${breakPoints.desktop}px) {
        ${Subtitle2Class};
      }

      @media (max-width: ${breakPoints.tablet}px) {
        ${CaptionClass};
      }
    }
  }

  .tag-group {
    margin-top: 8px;
    display: flex;
    align-items: center;

    .tag {
      ${Subtitle2Class};
      font-weight: 700;
      border-radius: ${radius['8']}px;
      padding: 3px 6px;
      margin-right: ${gridPoints.gutter}px;

      @media (max-width: ${breakPoints.tablet}px) {
        ${CaptionClass};
      }

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

    h4 {
      padding-top: 60px;

      @media (max-width: ${breakPoints.tablet}px) {
        ${H5Class};
        padding-top: 40px;
      }
    }

    h6 {
      padding-top: 30px;

      @media (max-width: ${breakPoints.tablet}px) {
        ${Subtitle1Class};
        padding-top: 20px;
      }
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

    .language-text {
      ${props =>
        props.screen === 'light' &&
        css`
          background-color: rgba(255, 255, 255, 0.5);
          color: inherit;
        `};

      ${props =>
        props.screen === 'dark' &&
        css`
          background-color: rgba(0, 0, 0, 0.5);
          color: inherit;
        `};
    }

    ul {
      margin-bottom: 16px;

      li {
        list-style: disc inside;
        text-align: justify;
        line-height: 2;
      }

      ul,
      ol {
        margin-left: 16px;
      }
    }

    ol {
      margin-bottom: 16px;

      li {
        list-style: decimal inside;
        text-align: justify;
        line-height: 2;
      }

      ul,
      ol {
        margin-left: 16px;
      }
    }
  }

  .toc-group {
    position: sticky;
    top: 120px;
    right: 0;
    min-width: 200px;
    max-width: 300px;
    height: 100%;
    margin-left: 16px;
    margin-right: 64px;
    line-height: 2;
    word-break: keep-all;
    ${Subtitle2Class};

    @media (max-width: ${breakPoints.desktop}px) {
      min-width: 180px;
    }

    @media (max-width: ${breakPoints.tablet}px) {
      display: none;
    }

    h5 {
      font-weight: 700;

      @media (max-width: ${breakPoints.desktop}px) {
        ${H6Class};
      }
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
