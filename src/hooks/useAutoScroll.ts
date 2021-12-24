import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import fullPageState from '@/store/fullPage';
import useScrollProperty from '@/hooks/useScrollProperty';
import curScrollState from '@/store/curScroll';
import scrollTo from '@/utils/scrollTo';

const useAutoScroll = (
  ref: React.RefObject<HTMLDivElement>,
  duration: number,
) => {
  const isMoving = useRecoilValue(fullPageState);
  const getScrollProperty = useScrollProperty(ref);
  const setIsMoving = useSetRecoilState(fullPageState);
  const [curScroll, setCurScroll] = useRecoilState(curScrollState);
  const [fireQueue, setFireQueue] = useState<number[]>([]);

  useEffect(() => {
    setCurScroll(document.documentElement.scrollTop);
  }, [setCurScroll]);

  useEffect(() => {
    const throttle = 200;
    const callMoveSection = async () => {
      const { scrollTop, sectionTop, sectionBottom } = getScrollProperty();
      // 자신의 영역에 스크롤이 진입했을 경우 오토 스크롤 작동
      if (scrollTop > sectionTop && scrollTop < sectionBottom) {
        if (!isMoving) {
          setIsMoving(true);
          if (curScroll < scrollTop) {
            // 현재 스크롤보다 이벤트 스크롤 값이 크면 하강
            // 목표 지점을 현재 스크롤 값으로 기록
            setCurScroll(sectionBottom);
            await scrollTo({
              currentY: sectionTop,
              targetY: sectionBottom,
              duration,
            });
          } else {
            // 반대 경우는 상승
            setCurScroll(sectionTop);
            await scrollTo({
              currentY: sectionBottom,
              targetY: sectionTop,
              duration,
            });
          }
          // 지정된 스크롤 이벤트 기간 + throttle 시간이 지난 뒤에 스크롤 이벤트 잠긐 해제
          const timeout = setTimeout(() => {
            setIsMoving(false);
            clearTimeout(timeout);
          }, duration + throttle);
        }
      } else {
        // 자신의 영역을 벗어났을 경우에는
        // 스크롤 이벤트 잠금이 유지되는 기간 동안 스크롤이 목표 지점에 위치하도록 강제함
        if (isMoving) {
          window.scrollTo({ top: curScroll });
        }
      }
    };

    window.addEventListener('scroll', callMoveSection);

    return () => {
      window.removeEventListener('scroll', callMoveSection);
    };
  }, [
    isMoving,
    getScrollProperty,
    ref,
    duration,
    curScroll,
    setIsMoving,
    setCurScroll,
  ]);

  useEffect(() => {
    const resetSection = () => {
      if (fireQueue.length < 2) {
        setFireQueue(state => [...state, 0]);
      }
    };

    window.addEventListener('resize', resetSection);

    return () => {
      window.removeEventListener('resize', resetSection);
    };
  }, [duration, getScrollProperty, fireQueue]);

  useEffect(() => {
    if (fireQueue.length > 1) {
      const { sectionTop } = getScrollProperty();
      scrollTo({
        currentY: curScroll,
        targetY: sectionTop,
        duration,
      }).then(() => {
        setFireQueue(state => [state.pop() as number]);
      });
    }
  }, [curScroll, duration, fireQueue.length, getScrollProperty]);
};

export default useAutoScroll;
