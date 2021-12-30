import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';
import PostLayout from '@/layout/post';
import { NarrowContainerWrapper } from '@/styles/container';
import { MarkdownWrapper } from '@/components/pages/dev/styled';
import useTheme from '@/hooks/useTheme';
import useActiveToc from '@/hooks/useActiveToc';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      timeToRead: number;
      tableOfContents: string;
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
  const { frontmatter, html, timeToRead, tableOfContents } = markdownRemark;
  const mdContentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  useActiveToc(mdContentRef, tocRef);

  return (
    <PostLayout title={frontmatter.title}>
      <MarkdownWrapper screen={screen}>
        <NarrowContainerWrapper>
          <div className="title-group">
            <h3>{frontmatter.title}</h3>
            <h5>{frontmatter.description}</h5>
            <h5>
              {dayjs(frontmatter.date).format('YYYY-MM-DD')} ∙ {timeToRead} min
            </h5>
            <div className="tag-group">
              {frontmatter.tags.map((tag, idx) => (
                <p key={idx} className="tag">
                  #{tag}
                </p>
              ))}
            </div>
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

export default DevTemplate;

export const pageQuery = graphql`
  query ($frontmatter__slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $frontmatter__slug } }) {
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
  }
`;
