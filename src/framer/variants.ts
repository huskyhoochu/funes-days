import { Variants } from 'framer-motion';

export const PropagationShowingVariants: Variants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hide: {
    opacity: 0,
  },
};

export const NormalShowingVariants: Variants = {
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
  },
};

export const NormalHorizontalVariants: Variants = {
  show: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  hide: {
    x: '100%',
  },
};
