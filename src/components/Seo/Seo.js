import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = props => {
  const { data } = props;
  const pageTitle = props.pageTitle;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = config.shortSiteTitle + " - " + (postTitle || pageTitle)
  const description = postDescription ? postDescription : config.siteDescription;
  const image = postCover ? postCover : config.siteImage;
  const url = config.siteUrl + config.pathPrefix + postSlug;

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#"
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <meta name="google-site-verification" content={config.googleSiteVerification} />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${config.googleAnalyticsId}");
        `}
      </script>
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object
};

export default Seo;
