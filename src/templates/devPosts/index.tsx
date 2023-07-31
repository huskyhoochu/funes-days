import React from 'react';
import { graphql } from 'gatsby';
import PostCard from '@/components/pages/home/postCard';
import ListLayout from '@/layout/list';
import { DevListWrapper } from './styled';
import Pagination from '@/components/templates/pagination';
import useTheme from '@/hooks/useTheme';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: PostNode;
      }[];
      pageInfo: Pagination;
    };
  };
}

const DevList: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { edges, pageInfo } = data.allMarkdownRemark;
  return (
    <ListLayout
      title="Dev Posts"
      category="dev"
      backgroundUrl="https://images.unsplash.com/photo-1634247030997-6ea23b24ba63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      posts={edges}
    >
      <DevListWrapper screen={screen}>
        <div className="title-group">
          <p>Dev Posts</p>
        </div>
        <div className="post-list">
          {edges.map(post => (
            <PostCard key={post.node.id} node={post.node} />
          ))}
        </div>
        <Pagination {...pageInfo} path="dev" />
      </DevListWrapper>
    </ListLayout>
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
