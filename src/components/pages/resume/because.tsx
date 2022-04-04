import React from 'react';
import { BecauseWrapper } from './styled';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import useWrite from '@/hooks/useWrite';
import useIntersect from '@/hooks/useIntersect';

const text = '가 필요하죠. 우리 서로가 그렇듯이.';

const Because: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6, 0.99, 1], [0, 1, 1, 0]),
    {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    },
  );
  const { textState, writeText, reset } = useWrite();
  const callIntersect = useIntersect(false, writeText(text, 200), reset);

  return (
    <BecauseWrapper>
      <div className="mac" />
      <motion.div
        className="language"
        style={{
          opacity,
        }}
      >
        <div ref={callIntersect}>
          <h1>컴퓨터와 사람 사이엔</h1>
          <h1>
            <strong>언어</strong>
            {textState}
          </h1>
        </div>
      </motion.div>
    </BecauseWrapper>
  );
};

export default Because;
