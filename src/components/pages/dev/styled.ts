import styled from '@emotion/styled';
import { Body1Class, Body2Class, H6Class } from '@/styles/typography';
import { breakPoints, gridPoints } from '@/styles/screen';
import { css } from '@emotion/react';
import radius from '@/styles/radius';

export const MarkdownWrapper = styled.div<{ screen: ScreenType }>`
  padding-block: 120px;

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

  .content {
    margin-block: 60px;
    ${Body1Class};

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
      margin-top: 32px;
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
  }
`;
