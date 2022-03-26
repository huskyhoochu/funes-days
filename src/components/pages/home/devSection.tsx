import React from 'react';
import PostCard from '@/components/pages/home/postCard';
import { ContainerWrapper } from '@/styles/container';
import { DevSectionWrapper } from './styled';
import { motion } from 'framer-motion';
import { PropagationShowingVariants } from '@/framer/variants';

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

const DevSection: React.FC<Props> = ({ posts }) => {
  return (
    <DevSectionWrapper>
      <ContainerWrapper>
        <div className="title-group">
          <h4>Latest Updates</h4>
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
      </ContainerWrapper>
    </DevSectionWrapper>
  );
};

export default DevSection;
