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
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'ko_KR',
          url: 'https://funes-days.com',
          site_name: 'funes-days',
          title: 'funes-days',
          description: '기억의 천재 푸네스와 함께하는 되새김의 여정',
          canonical: 'https://funes-days.com',
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
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
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: f => `static/${f.hash}/${f.name}`,
              ignoreFileExtensions: ['jpg', 'png', 'jpeg'],
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
        fonts: ['Fira Code:400,700', 'Material Icons'],
        display: 'swap',
      },
    },
  ],
};
