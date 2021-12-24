import { Variants } from 'framer-motion';

export const ShowingHierarchyVariants: Variants = {
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'spring',
      duration: 0.6,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      type: 'spring',
      duration: 0.6,
    },
  },
};
