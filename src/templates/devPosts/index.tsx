import React from 'react';
import { graphql } from 'gatsby';
import PostCard from '@/components/pages/home/postCard';
import HomeLayout from '@/layout/home';
import Header from '@/components/atoms/header';
import { DevListWrapper } from './styled';
import Pagination from '@/components/templates/pagination';
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
      pageInfo: Pagination;
    };
  };
}

const DevList: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { edges, pageInfo } = data.allMarkdownRemark;
  return (
    <HomeLayout title="Dev Posts">
      <Header backgroundColor="transparent" />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1634247030997-6ea23b24ba63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80")',
          zIndex: 0,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <DevListWrapper screen={screen}>
        <div className="title-group">
          <h3>Dev Posts</h3>
        </div>
        <div className="post-list">
          {edges.map(post => (
            <PostCard key={post.node.id} node={post.node} />
          ))}
        </div>
        <Pagination {...pageInfo} path="dev" />
      </DevListWrapper>
    </HomeLayout>
  );
};

export default DevList;

export const query = graphql`
  query DevListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
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
