import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import activeIndexState from '@/store/activeIndex';

const useActivePage = (ref: React.RefObject<HTMLDivElement>, index: number) => {
  const setRecoilState = useSetRecoilState(activeIndexState);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setRecoilState(index);
            }
          }
        },
        {
          threshold: 0.5,
        },
      );

      observer.observe(ref.current);
    }
  }, [index, ref, setRecoilState]);
};

export default useActivePage;
