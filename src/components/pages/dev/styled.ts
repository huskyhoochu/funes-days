import styled from '@emotion/styled';
import { Body1Class, Body2Class } from '@/styles/typography';
import { gridPoints } from '@/styles/screen';

export const MarkdownWrapper = styled.div`
  ${Body1Class};
  line-height: 2;
  padding-block: 120px;

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

  p {
    text-align: justify;
  }

  blockquote {
    margin-block: ${gridPoints.gutter * 2}px;
    margin-inline: ${gridPoints.gutter * 3}px;
    border-left-style: solid;
    border-left-width: 2px;
    padding-left: ${gridPoints.gutter}px;
  }
`;
