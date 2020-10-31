let siteConfig;

// loading site config
try {
  siteConfig = require(`./siteConfig`);
} catch (e) {
  siteConfig = null;
}

// setting up plugins
let gatsbyPlugins = [
  {
    resolve: `@draftbox-co/gatsby-ghost-novela-theme`,
    options: {
      siteConfig: siteConfig,
      contentPosts: "content/posts",
    },
  },
];

module.exports = {
  plugins: gatsbyPlugins,
};
