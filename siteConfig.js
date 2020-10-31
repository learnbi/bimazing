module.exports = {
  siteUrl: "https://bimazing.work",
  postsPerPage: 12,
  siteTitleMeta: "[bi]mazing",
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
    copyright: "[bi]mazing",
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
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to [bi]mazing",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to [bi]mazing.",
  },
  socialLinks: {
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com",
    github: "https://github.com/learnbi",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact [bi]mazing",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "[bi]mazing",
    description:
      "Learning BI. From Scratch. Real Cases.",
  },
  twitterCard: {
    title: "[bi]mazing",
    description:
      "Learning BI. From Scratch. Real Cases.",
    imageUrl: "twitterImage.png",
    username: "",
  },
  facebookCard: {
    title: "[bi]mazing",
    description:
      "Learning BI. From Scratch. Real Cases.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "[bi]mazing",
  siteDescription:
    "Learning BI. From Scratch. Real Cases.",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl: "logo.png",
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
