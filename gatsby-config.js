module.exports = {
  siteMetadata: {
    title: `bimazing`,
    name: `bimazing`,
    siteUrl: `https://bimazing.work`,
    description: `Learning BI. From Scratch. Real Cases.`,
    hero: {
      heading: `Learning BI. From Scratch. Real Cases.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `github`,
        url: `https://github.com/learnbi`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "bimazing-gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bimazing`,
        short_name: `bimazing`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
      },
    },
  ],
};