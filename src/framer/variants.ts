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
