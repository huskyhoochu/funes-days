import { css } from '@emotion/css';
import { Theme } from '@/styles/theme';
import { breakPoints, gridPoints } from '@/styles/screen';
import radius from '@/styles/radius';

export const ModalClass = css({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.modal-background': {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  '.modal-body': {
    backgroundColor: Theme.dark.beige.background,
    zIndex: 1,
    paddingBlock: 16,
    paddingInline: 24,
    marginInline: gridPoints.gutter,
    borderRadius: radius['12'],
    [`@media (min-width: ${breakPoints.tablet}px)`]: {
      maxWidth: `calc(${gridPoints.col * 6}px + ${gridPoints.gutter * 5}px)`,
    },
    [`@media (min-width: ${breakPoints.mobile}px)`]: {
      width: '100%',
    },
    '.title-group': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 8,
      marginBottom: 16,
      borderBottom: `1px solid ${Theme.dark.beige.text}`,
      '.material-icons-outlined': {
        fontSize: 33,
      },
    },
    '.content': {},
  },
});
