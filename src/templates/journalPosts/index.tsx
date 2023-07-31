import React from 'react';
import { graphql } from 'gatsby';
import PostCard from '@/components/pages/home/postCard';
import { DevListWrapper } from '../devPosts/styled';
import Pagination from '@/components/templates/pagination';
import useTheme from '@/hooks/useTheme';
import ListLayout from '@/layout/list';

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

const JournalList: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { edges, pageInfo } = data.allMarkdownRemark;
  return (
    <ListLayout
      title="Journal Posts"
      category="journal"
      backgroundUrl="https://images.unsplash.com/photo-1625499940894-8796928bf9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80"
      posts={edges}
    >
      <DevListWrapper screen={screen}>
        <div className="title-group">
          <h2>Journal Posts</h2>
        </div>
        <div className="post-list">
          {edges.map(post => (
            <PostCard key={post.node.id} node={post.node} />
          ))}
        </div>
        <Pagination {...pageInfo} path="journal" />
      </DevListWrapper>
    </ListLayout>
  );
};

export default JournalList;

export const query = graphql`
  query JournalListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { draft: { eq: false }, category: { eq: "journal" } }
      }
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
