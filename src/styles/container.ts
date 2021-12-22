import { css } from '@emotion/css';
import { breakPoints, gridPoints, screenPoint } from '@/styles/screen';

export const ContainerClass = css({
  margin: '0 auto',
  paddingInline: gridPoints.gutter,
});

export const NarrowContainerClass = css({
  margin: '0 auto',
  paddingInline: gridPoints.gutter,
  [`@media (min-width: ${breakPoints.desktop}px)`]: {
    maxWidth: screenPoint,
  },
  [`@media (min-width: ${breakPoints.tablet}px)`]: {
    width: '100%',
  },
});
