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
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Resources-Malayalam', link: '/Resources-Malayalam/' },
            { text: 'Other-Languages', link: '/Other-Languages/' },
        ],


        sidebar: [
            '/',
            '/blog/'
        ]
    }
}