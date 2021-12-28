import React from 'react';
import dayjs from 'dayjs';
import useTheme from '@/hooks/useTheme';
import { PostCardWrapper } from './styled';

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
  const [, screen] = useTheme();
  return (
    <PostCardWrapper
      screen={screen}
      to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
    >
      <h6>{node.frontmatter.title}</h6>
      <p className="description">{node.frontmatter.description}</p>
      <p className="description">
        {dayjs(node.frontmatter.date).format('YYYY-MM-DD')} ∙ {node.timeToRead}{' '}
        min
      </p>
      <div className="tag-group">
        {node.frontmatter.tags.map((tag, idx) => (
          <p key={idx} className="tag">
            #{tag}
          </p>
        ))}
      </div>
    </PostCardWrapper>
  );
};

export default PostCard;
