import React from 'react';
import { graphql } from 'gatsby';
import PostCard from '@/components/pages/home/postCard';
import HomeLayout from '@/layout/home';
import Header from '@/components/atoms/header';
import { DevListWrapper } from './styled';

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
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        currentPage: number;
        pageCount: number;
        itemCount: number;
      };
    };
  };
}

const DevList: React.FC<Props> = ({ data }) => {
  const { edges, pageInfo } = data.allMarkdownRemark;
  console.log(pageInfo);

  return (
    <HomeLayout title="개발 포스트">
      <Header backgroundColor="transparent" />
      <DevListWrapper>
        <div className="title-group">
          <h3>Dev Posts</h3>
        </div>
        <div className="post-list">
          {edges.map(post => (
            <PostCard key={post.node.id} node={post.node} />
          ))}
        </div>
      </DevListWrapper>
    </HomeLayout>
  );
};

export default DevList;

export const query = graphql`
  query DevListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false }, category: { eq: "dev" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
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
      pageInfo {
        hasPreviousPage
        hasNextPage
        currentPage
        pageCount
        itemCount
      }
    }
  }
`;
