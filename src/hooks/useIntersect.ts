import { useCallback } from 'react';

const useIntersect = (
  isOnlyOnce: boolean,
  callback: () => void,
  resetFn: () => void,
) => {
  return useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callback();
            if (isOnlyOnce) {
              observer.unobserve(node);
            }
          } else {
            resetFn();
          }
        }
      });

      observer.observe(node);
    }
  }, []);
};

export default useIntersect;
