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

const text = '가 필요하죠.';

const Because: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.3, 0.45, 0.53, 0.55], [0, 1, 1, 0]),
    {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    },
  );
  const afterOpacity = useSpring(
    useTransform(scrollYProgress, [0.53, 0.55], [0, 1]),
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
      <motion.div className="language">
        <div ref={callIntersect}>
          <motion.h1
            style={{
              opacity,
            }}
          >
            컴퓨터와 사람 사이엔
          </motion.h1>
          <h1>
            <strong>언어</strong>
            {textState}
          </h1>
          <motion.h1
            style={{
              opacity: afterOpacity,
            }}
          >
            동료와 동료 사이도 그렇잖아요.
          </motion.h1>
        </div>
      </motion.div>
    </BecauseWrapper>
  );
};

export default Because;
