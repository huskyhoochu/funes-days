import React from 'react';
import { WhyMeWrapper } from './styled';
import { NormalShowingVariants } from '@/framer/variants';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

const WhyMe: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.05, 0.15, 0.27], [1, 1, 1, 0]),
    {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    },
  );
  const reversed = useSpring(useTransform(scrollYProgress, [0, 0.05], [0, 1]), {
    restSpeed: 0.1,
    stiffness: 30,
    damping: 10,
  });
  const bookOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.05, 0.15, 0.27], [0, 0, 1, 0]),
    {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    },
  );
  const brighter = useSpring(
    useTransform(scrollYProgress, [0.2, 0.27], [0, 1]),
    {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    },
  );

  return (
    <WhyMeWrapper>
      <motion.div
        className="why"
        variants={NormalShowingVariants}
        initial="hide"
        animate="show"
        style={{ opacity }}
      >
        <h1>왜 굳이</h1>
        <h1>
          <motion.strong
            initial={false}
            style={{
              opacity: reversed,
            }}
          >
            국문과 출신
          </motion.strong>
          &nbsp;개발자가
        </h1>
        <h1>필요하죠?</h1>
      </motion.div>
      <motion.div
        className="books"
        initial={false}
        style={{
          opacity: bookOpacity,
        }}
      />
      <motion.div
        className="bright"
        style={{
          opacity: brighter,
        }}
      />
    </WhyMeWrapper>
  );
};

export default WhyMe;
