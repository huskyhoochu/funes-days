import React from 'react';
import dayjs from 'dayjs';
import useTheme from '@/hooks/useTheme';
import { PostCardWrapper } from './styled';
import { NormalShowingVariants } from '@/framer/variants';
import { Link } from 'gatsby';

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
  return (
    <Link to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}>
      <PostCardWrapper
        reversedThemeClass={ReversedThemeClass}
        screen={screen}
        themes={theme}
        variants={NormalShowingVariants}
      >
        <h3 className="title">{node.frontmatter.title}</h3>
        <p className="description">{node.frontmatter.description}</p>
        <p className="description">
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
      </PostCardWrapper>
    </Link>
  );
};

export default PostCard;
