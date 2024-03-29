import React from 'react';
import dayjs from 'dayjs';
import useTheme from '@/hooks/useTheme';
import { PostCardWrapper } from './styled';
import { NormalShowingVariants } from '@/framer/variants';
import { Link } from 'gatsby';
import {
  motion,
  useSpring,
  useTransform,
  useVelocity,
  useViewportScroll,
} from 'framer-motion';

interface Props {
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
}

const PostCard: React.FC<Props> = ({ node }) => {
  const [, screen, theme, ReversedThemeClass] = useTheme();
  const { scrollYProgress } = useViewportScroll();
  const y = useVelocity(
    useSpring(useTransform(scrollYProgress, [0, 1], [20, 0]), {
      restSpeed: 0.1,
      stiffness: 30,
      damping: 10,
    }),
  );
  const opacity = useTransform(y, [-20, 0, 20], [0.1, 1, 0.1]);

  return (
    <Link to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}>
      <PostCardWrapper
        reversed={ReversedThemeClass}
        screen={screen}
        themes={theme}
        variants={NormalShowingVariants}
      >
        <motion.div layout={true} style={{ y, opacity }}>
          <h1
            className="title"
            style={{
              fontSize: '47px',
              letterSpacing: 0,
            }}
          >
            {node.frontmatter.title}
          </h1>
          <h2
            className="description"
            style={{
              fontSize: '33px',
              letterSpacing: '0.25px',
            }}
          >
            {node.frontmatter.description}
          </h2>
          <p className="date">
            {dayjs(node.frontmatter.date).format('YYYY-MM-DD')} ∙{' '}
            {node.timeToRead} min
          </p>
          <div className="tag-group">
            {node.frontmatter.tags.map((tag, idx) => (
              <p key={idx} className="tag">
                #{tag}
              </p>
            ))}
          </div>
        </motion.div>
      </PostCardWrapper>
    </Link>
  );
};

export default PostCard;
