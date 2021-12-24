import { Variants } from 'framer-motion';

export const NormalShowingVariants: Variants = {
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
};

export const NormalHorizontalVariants: Variants = {
  show: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
  hide: {
    x: '100%',
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
};
