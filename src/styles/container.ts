import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakPoints, gridPoints, screenPoint } from '@/styles/screen';

export const ContainerClass = css`
  margin: 0 auto;
  padding-inline: ${gridPoints.gutter}px;
`;

export const NarrowContainerClass = css`
  margin: 0 auto;
  padding-inline: ${gridPoints.gutter}px;

  @media (min-width: ${breakPoints.desktop}px) {
    max-width: ${screenPoint}px;
  }

  @media (min-width: ${breakPoints.tablet}px) {
    width: 100%;
  }
`;

export const ContainerWrapper = styled.div`
  ${ContainerClass};
`;

export const NarrowContainerWrapper = styled.div`
  ${NarrowContainerClass};
`;
