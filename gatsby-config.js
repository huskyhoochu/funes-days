module.exports = {
  siteMetadata: {
    siteUrl: 'https://funes-days.com',
    title: 'funes-days',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-BPT16P1WFP',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: -90,
              maintainCase: false,
              isIconAfterHeader: true,
              elements: ['h4', 'h6'],
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: './src/markdown/',
      },
      __key: 'markdown-pages',
    },
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'IBM Plex Mono:400,400i,700,700i',
          'Noto Sans KR:400,700',
          'Material Icons',
        ],
        display: 'swap',
      },
    },
  ],
};
