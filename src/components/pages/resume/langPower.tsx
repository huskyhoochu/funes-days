import React, { useCallback } from 'react';
import { LangPowerWrapper } from './styled';
import {
  motion,
  useSpring,
  useTransform,
  useVelocity,
  useViewportScroll,
} from 'framer-motion';

const LangPower: React.FC = () => {
  const wordIntersect = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            } else {
              entry.target.classList.remove('active');
            }
          }
        },
        {
          threshold: 0.3,
        },
      );

      const words = Array.from(node.children);
      words.forEach(word => {
        observer.observe(word);
      });
    }
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const y = useVelocity(
    useSpring(useTransform(scrollYProgress, [0.55, 0.9], [20, 0]), {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    }),
  );

  return (
    <LangPowerWrapper>
      <div className="words" ref={wordIntersect}>
        <h1>정확한</h1>
        <h1>신뢰할 수 있는</h1>
        <h1>배려의</h1>
        <h1>용기를 주는</h1>
        <h1>친절한</h1>
        <h1>실수를 인정하는</h1>
        <h1>겸손한</h1>
        <h1>영감을 주는</h1>
        <h1>알맞은</h1>
      </div>
      <motion.div className="needs" style={{ y }}>
        <h1>
          <strong>언어</strong>를
        </h1>
        <h1>쓰는 사람이</h1>
        <h1>팀에는</h1>
        <h1>필요합니다.</h1>
      </motion.div>
    </LangPowerWrapper>
  );
};

export default LangPower;
