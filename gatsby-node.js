const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { category: { eq: "dev" } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                category
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const postsPerPage = 12;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/dev' : `/dev/${i + 1}`,
      component: path.resolve('./src/templates/devPosts/index.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach(({ node }, idx) => {
    createPage({
      path: `/${node.frontmatter.category}/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/post/index.tsx'),
      context: {
        slug: node.frontmatter.slug,
        fullPath: `/${node.frontmatter.category}/${node.frontmatter.slug}`,
        next: `/${node.frontmatter.category}/${
          idx === posts.length - 1 ? null : posts[idx + 1].node.frontmatter.slug
        }`,
        prev: `/${node.frontmatter.category}/${
          idx === 0 ? null : posts[idx - 1].node.frontmatter.slug
        }`,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
