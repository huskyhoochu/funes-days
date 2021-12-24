import React, { useCallback } from 'react';

const useScrollProperty = (ref: React.RefObject<HTMLDivElement>) => {
  return useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    let sectionTop = 0;
    let sectionBottom = 0;

    if (ref.current) {
      sectionTop = scrollTop + ref.current.getBoundingClientRect().top;
      sectionBottom = scrollTop + ref.current.getBoundingClientRect().bottom;
    }

    return {
      scrollTop,
      sectionTop,
      sectionBottom,
    };
  }, [ref]);
};

export default useScrollProperty;
