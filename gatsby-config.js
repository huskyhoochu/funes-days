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
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Nanum Gothic Coding'],
        display: 'swap',
      },
    },
  ],
};
