import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { ActiveScrollSection } from '@/components/templates/section';
import Intro from '@/components/pages/home/intro';
import Header from '@/components/atoms/header';
import HomeLayout from '@/layout/home';
import LatestUpdateSection from '@/components/pages/home/LatestSection';
import useTheme from '@/hooks/useTheme';

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
  const [, , , ReversedThemeClass] = useTheme();
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const { allMarkdownRemark } = data;

  return (
    <HomeLayout title="main">
      <Header backgroundColor="transparent" />
      <ActiveScrollSection forwardedRef={firstSectionRef} index={0}>
        <LatestUpdateSection posts={allMarkdownRemark.edges} />
      </ActiveScrollSection>
      <ActiveScrollSection forwardedRef={firstSectionRef} index={0}>
        <Intro themeClass={ReversedThemeClass} />
      </ActiveScrollSection>
    </HomeLayout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 7
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
