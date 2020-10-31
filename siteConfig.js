module.exports = {
  siteUrl: "https://bimazing.work",
  postsPerPage: 12,
  siteTitleMeta: "BImazing",
  siteDescriptionMeta:
    "Learning BI. From Scratch. Real Cases.",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "BImazing",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://bimazing.work",
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://bimazing.work/",
      },
      {
        label: "Contact",
        url: "https://bimazing.work/contact",
      },
    ],
  },
  footer: {
    copyright: "BImazing",
    navigation: [
      {
        label: "Home",
        url: "https://bimazing.work/",
      },
      {
        label: "Sitemap",
        url: "https://bimazing.work/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://bimazing.work/rss.xml",
      },
      {
        label: "Contact",
        url: "https://bimazing.work/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to BImazing",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to BImazing.",
  },
  socialLinks: {
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com",
    github: "https://github.com/draftbox-co",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact BImazing",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "BImazing",
    description:
      "Learning BI. From Scratch. Real Cases.",
  },
  twitterCard: {
    title: "BImazing",
    description:
      "Learning BI. From Scratch. Real Cases.",
    imageUrl: "twitterImage.png",
    username: "",
  },
  facebookCard: {
    title: "BImazing",
    description:
      "Learning BI. From Scratch. Real Cases.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "BImazing",
  siteDescription:
    "Learning BI. From Scratch. Real Cases.",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
