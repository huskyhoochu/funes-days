import React from 'react';
import { graphql } from 'gatsby';
import Intro from '@/components/pages/home/intro';
import Header from '@/components/atoms/header';
import HomeLayout from '@/layout/home';
import LatestUpdateSection from '@/components/pages/home/LatestSection';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: PostNode;
      }[];
    };
  };
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const { allMarkdownRemark } = data;
  return (
    <HomeLayout title="main" posts={allMarkdownRemark.edges}>
      <Header backgroundColor="transparent" />
      <LatestUpdateSection posts={allMarkdownRemark.edges} />
      <Intro />
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
