import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import PostLayout from '@/layout/post';
import { NarrowContainerWrapper } from '@/styles/container';
import { MarkdownWrapper } from '@/components/pages/dev/styled';
import useTheme from '@/hooks/useTheme';
import useActiveToc from '@/hooks/useActiveToc';

interface Props {
  data: {
    markdownRemark: PostNode;
  };
}

const CareerTemplate: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents } = markdownRemark;
  const mdContentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  useActiveToc(mdContentRef, tocRef);

  return (
    <PostLayout
      title={frontmatter.title}
      description={frontmatter.description}
      slug={`/${frontmatter.slug}`}
      articleInfo={{
        publishedTime: frontmatter.date,
        authors: ['https://github.com/huskyhoochu'],
        tags: frontmatter.tags,
      }}
    >
      <MarkdownWrapper screen={screen}>
        <NarrowContainerWrapper>
          <div className="title-group">
            <Link to={`/${frontmatter.slug}`}>
              <h3 className="title">{frontmatter.title}</h3>
            </Link>
            <p className="description">{frontmatter.description}</p>
          </div>
          <div
            ref={mdContentRef}
            className="md-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </NarrowContainerWrapper>
        <div className="toc-group">
          <h5>Table of Contents</h5>
          <div
            ref={tocRef}
            dangerouslySetInnerHTML={{ __html: tableOfContents }}
          />
        </div>
      </MarkdownWrapper>
    </PostLayout>
  );
};

export default CareerTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        description
        date
        slug
        tags
        category
      }
    }
  }
`;
