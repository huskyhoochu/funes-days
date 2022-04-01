import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';
import PostLayout from '@/layout/post';
import { NarrowContainerWrapper } from '@/styles/container';
import { MarkdownWrapper } from '@/components/pages/dev/styled';
import useTheme from '@/hooks/useTheme';
import useActiveToc from '@/hooks/useActiveToc';
import Navigator from '@/components/templates/navigator';

interface Props {
  data: {
    markdownRemark: PostNode;
    sitePage: {
      pageContext: PageContext;
    };
  };
}

const DevTemplate: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead, tableOfContents } = markdownRemark;
  const mdContentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  useActiveToc(mdContentRef, tocRef);

  return (
    <PostLayout title={frontmatter.title}>
      <MarkdownWrapper screen={screen}>
        <NarrowContainerWrapper>
          <div className="title-group">
            <h3 className="title">{frontmatter.title}</h3>
            <p className="description">{frontmatter.description}</p>
            <p className="date">
              {dayjs(frontmatter.date).format('YYYY-MM-DD')} ∙ {timeToRead} min
            </p>
          </div>
          <div className="tag-group">
            {frontmatter.tags.map((tag, idx) => (
              <p key={idx} className="tag">
                #{tag}
              </p>
            ))}
          </div>
          <div
            ref={mdContentRef}
            className="md-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Navigator
            currentListPath="/dev"
            pageContext={data.sitePage.pageContext}
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

export default DevTemplate;

export const pageQuery = graphql`
  query ($slug: String!, $fullPath: String!) {
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
      }
    }
    sitePage(path: { eq: $fullPath }) {
      pageContext
    }
  }
`;
