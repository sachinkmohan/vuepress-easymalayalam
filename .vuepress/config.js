// config.js
const path = require("path");

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
			{
				text: "Quizzes",
				ariaLabel: "Quiz Menu",
				items: [
					{ text: "Mega Quiz", link: "/Mega-Quiz/" },
					{ text: "Other Quizzes", link: "/quiz/smallquizzes/" },
				],
			},
			{ text: "Resources-Malayalam", link: "/Resources-Malayalam/" },
			{ text: "Tweets", link: "/twitter/" },
			{ text: "FAQs", link: "/FAQs/" },
			{ text: "What's New", link: "/whatsnew/" },
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
