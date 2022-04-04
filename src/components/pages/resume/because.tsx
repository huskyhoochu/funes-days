import React from 'react';
import { BecauseWrapper } from './styled';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

const Because: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6, 0.9, 1], [0, 1, 1, 0]),
    {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    },
  );

  return (
    <BecauseWrapper>
      <div className="mac">
        <motion.div
          className="language"
          style={{
            opacity,
          }}
        >
          <motion.h1
            style={{
              opacity,
            }}
          >
            <strong>언어</strong>
          </motion.h1>
        </motion.div>
      </div>
    </BecauseWrapper>
  );
};

export default Because;
