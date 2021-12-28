import React from 'react';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';
import PostLayout from '@/layout/post';
import { NarrowContainerWrapper } from '@/styles/container';
import { MarkdownWrapper } from '@/components/pages/dev/styled';
import useTheme from '@/hooks/useTheme';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      timeToRead: number;
      frontmatter: {
        title: string;
        description: string;
        date: string;
        tags: string[];
        slug: string;
      };
    };
  };
}

const DevTemplate: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <PostLayout title={frontmatter.title}>
      <MarkdownWrapper screen={screen}>
        <NarrowContainerWrapper>
          <div className="title-group">
            <h3>{frontmatter.title}</h3>
            <h5>
              {dayjs(frontmatter.date).format('YYYY-MM-DD')} ∙ {timeToRead} min
            </h5>
            <p className="description">{frontmatter.description}</p>
            <div className="tag-group">
              {frontmatter.tags.map((tag, idx) => (
                <p key={idx} className="tag">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </NarrowContainerWrapper>
      </MarkdownWrapper>
    </PostLayout>
  );
};

export default DevTemplate;

export const pageQuery = graphql`
  query ($frontmatter__slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
