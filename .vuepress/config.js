// config.js
const path = require("path");

module.exports = {
  title: "Easy മലയാളം",
  description: "Easy Malayalam Website",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css",
      },
    ],
  ],
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-186989669-1",
      },
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        adClient: "ca-pub-8159459534545926", // replace it with your adClient
      },
    ],
    [
      "@vuepress/register-components",
      {
        componentsDir: "./path/to/components",
      },
    ],
    [
      "disqus",
      {
        shortname: "https-easymalayalam-fun",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Services", link: "/services/" },
      { text: "Quizzes", link: "/quiz/" },
      { text: "Resources-Malayalam", link: "/Resources-Malayalam/" },
      { text: "Tweets", link: "/twitter/" },
      { text: "FAQs", link: "/FAQs/" },
      { text: "What's New", link: "/whatsnew/" },
      { text: "Credits", link: "/credits/" },
      { text: "Archive", link: "/archive/" },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": path.resolve(__dirname, "../imgs"),
      },
    },
  },
};
