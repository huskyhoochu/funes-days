import React, { useCallback } from 'react';
import Soo from '@/assets/soo.jpg';
import { HelloWrapper } from './styled';
import {
  motion,
  useCycle,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import {
  NormalShowingVariants,
  PropagationShowingVariants,
} from '@/framer/variants';

const Hello: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const [isToggle, setToggle] = useCycle(false, true);
  const opacity = useSpring(useTransform(scrollYProgress, [0.9, 1], [0, 1]), {
    restSpeed: 0.1,
    stiffness: 30,
    damping: 10,
  });

  const helloIntersect = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setToggle(1);
            } else {
              setToggle(0);
            }
          }
        },
        {
          threshold: 1,
        },
      );

      observer.observe(node);
    }
  }, []);

  return (
    <HelloWrapper
      style={{
        opacity,
      }}
    >
      <div className="outer">
        <motion.div
          className="hello"
          ref={helloIntersect}
          variants={PropagationShowingVariants}
          initial="hide"
          animate={isToggle ? 'show' : 'hide'}
        >
          <motion.img
            src={Soo}
            className="soo"
            alt="soo"
            variants={NormalShowingVariants}
          />
          <motion.h2 variants={NormalShowingVariants}>
            안녕하세요, 승형수입니다.
          </motion.h2>
          <motion.h4 variants={NormalShowingVariants}>
            본질은 소통에 있다고 믿는 개발자입니다.
          </motion.h4>
          <motion.div className="links" variants={NormalShowingVariants}>
            <a
              href="https://github.com/huskyhoochu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/%ED%98%95%EC%88%98-%EC%8A%B9-697aaa173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:dfg1499@gmail.com">email</a>
          </motion.div>
        </motion.div>
      </div>
    </HelloWrapper>
  );
};

export default Hello;
