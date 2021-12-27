import React from 'react';
import PostLayout from '@/layout/post';
import { graphql } from 'gatsby';
import { NarrowContainerWrapper } from '@/styles/container';
import { MarkdownWrapper } from './styled';

interface Props {
  data: {
    markdownRemark: {
      html: string;
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
  console.log(data);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <PostLayout title={frontmatter.title}>
      <MarkdownWrapper>
        <NarrowContainerWrapper>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
      frontmatter {
        title
        description
        date
        slug
      }
    }
  }
`;
