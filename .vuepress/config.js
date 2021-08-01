// config.js

module.exports = {
    title: "Easy മലയാളം",
    description: "Easy Malayalam Website",
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
    ],
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Blog", link: "/blog/" },
            { text: "Mega Quiz", link: "/Mega-Quiz/" },
            { text: "Resources-Malayalam", link: "/Resources-Malayalam/" },
            { text: "Explained", link: "/explained/" },
            { text: "FAQs", link: "/FAQs/" },
            { text: "Test", link: "/smallquizzes/" },
            { text: "Logs", link: "/logs/" },
        ],

    },
};