// config.js


module.exports = {
    title: 'Easy മലയാളം',
    description: 'Easy Malayalam Website',
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-186989669-1'
            }
        ],
        [
      	     "vuepress-plugin-google-adsense",
      	      {
        	adClient: "ca-pub-8159459534545926", // replace it with your adClient
      	      }
    	]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Mega Quiz', link: '/Mega-Quiz/' },
            { text: 'Resources-Malayalam', link: '/Resources-Malayalam/' },
            { text: 'FAQs', link: '/FAQs/' },
            { text: 'Other-Languages', link: '/Other-Languages/' },
            { text: 'Small Quizzes', link: '/smallquizzes/' }
        ],


        sidebar: [
            '/',
            '/blog/',
            '/Mega-Quiz/',
	    '/FAQs/'
        ]
    }
}
