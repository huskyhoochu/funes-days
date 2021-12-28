import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { AutoScrollSection } from '@/components/templates/section';
import Intro from '@/components/pages/home/intro';
import Header from '@/components/atoms/header';
import HomeLayout from '@/layout/home';
import DevSection from '@/components/pages/home/devSection';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          timeToRead: number;
          frontmatter: {
            title: string;
            description: string;
            date: string;
            tags: string[];
            slug: string;
            category: PostCategory;
          };
        };
      }[];
    };
  };
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);

  const { allMarkdownRemark } = data;
  const devPosts = allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.category === 'dev',
  );

  return (
    <HomeLayout title="main">
      <Header backgroundColor="transparent" />
      <AutoScrollSection forwardedRef={firstSectionRef} index={0}>
        <Intro />
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={secondSectionRef} index={1}>
        <DevSection posts={devPosts} />
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={thirdSectionRef} index={2}>
        <div
          style={{ paddingBlock: 60, height: '100%', backgroundColor: 'green' }}
        >
          <h3>3 Section 끝이야</h3>
        </div>
      </AutoScrollSection>
    </HomeLayout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 12
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            description
            date
            slug
            category
            tags
          }
        }
      }
    }
  }
`;
