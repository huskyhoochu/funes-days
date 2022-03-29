import React from 'react';
import PostCard from '@/components/pages/home/postCard';
import { LatestSectionWrapper } from './styled';
import { motion } from 'framer-motion';
import { PropagationShowingVariants } from '@/framer/variants';
import useTheme from '@/hooks/useTheme';
import { Theme } from '@/styles/theme';

interface Props {
  posts: {
    node: {
      id: string;
      timeToRead: number;
      frontmatter: {
        title: string;
        description: string;
        date: string;
        slug: string;
        category: PostCategory;
        tags: string[];
      };
    };
  }[];
}

const LatestSection: React.FC<Props> = ({ posts }) => {
  const [ThemeClass, screen, theme, ReversedThemeClass] = useTheme();

  return (
    <LatestSectionWrapper
      themeClass={ThemeClass}
      reversedThemeClass={ReversedThemeClass}
    >
      <div className="title-group">
        <h3>Latest Updates</h3>
      </div>
      <motion.div
        className="post-group"
        variants={PropagationShowingVariants}
        initial="hide"
        animate="show"
      >
        {posts.map(post => (
          <PostCard key={post.node.id} node={post.node} />
        ))}
      </motion.div>
      <svg
        id="wave-top"
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={Theme[screen][theme].text}
          d="M0,65L40,65C80,65,160,65,240,69.3C320,74,400,82,480,88.8C560,95,640,100,720,95.3C800,91,880,78,960,71.5C1040,65,1120,65,1200,69.3C1280,74,1360,82,1440,75.8C1520,69,1600,48,1680,34.7C1760,22,1840,17,1920,21.7C2000,26,2080,39,2160,41.2C2240,43,2320,35,2400,32.5C2480,30,2560,35,2640,39C2720,43,2800,48,2880,49.8C2960,52,3040,52,3120,52C3200,52,3280,52,3360,49.8C3440,48,3520,43,3600,41.2C3680,39,3760,39,3840,45.5C3920,52,4000,65,4080,75.8C4160,87,4240,95,4320,95.3C4400,95,4480,87,4560,80.2C4640,74,4720,69,4800,60.7C4880,52,4960,39,5040,41.2C5120,43,5200,61,5280,62.8C5360,65,5440,52,5520,45.5C5600,39,5680,39,5720,39L5760,39L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"
        />
      </svg>
    </LatestSectionWrapper>
  );
};

export default LatestSection;
