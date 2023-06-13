import { defineUserConfig } from 'vuepress'

// pnpm i -D @vuepress/plugin-back-to-top@next
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// pnpm i -D @vuepress/plugin-medium-zoom@next
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '识图谱',
  description: '这是我的第一个 VuePress 站点',
  base: '/learn/',
  port: '8088',

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin({}),
  ],

  theme: defaultTheme({
    logo: '/images/favicon.png',
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    navbar: navbarFun(),
    sidebar: sidebarFun(),
  }),
})



/* 顶部导航栏 */
function navbarFun() {
    return [
        { text: '首页', link: '/' },
        { text: '营销学', link: '/marketing/' },
        { text: '商业学', link: '/bp/' },
        {
            text: '语言学习',
            children: [
                { text: '英语' , link: '/lang/en/'}
            ]
        },
        {
            text: '集合',
            children: [
                { text: '技能树', link: '/tree/' },
                { text: '健身与饮食', link: '/fitness/' },
                { text: '身体开发', link: '/bodyDev/' },
                { text: '写作', link: '/write/' },
                { text: '阅读', link: '/read/' },
                { text: '摄影', link: '/camera/' },
                { text: '导演类', link: '/director/' },
                { text: '旅游记录', link: '/trip/' },
                { text: '经济学', link: '/economics/' },
                { text: '育儿', link: '/kids/' },
            ]
        }
    ];
}

/* 侧边菜单栏 */
function sidebarFun() {
    return {
        '/tree/': [
            '/tree/life.md',
            '/tree/swim.md',
            '/tree/meditation.md',
            '/tree/rent.md',
            '/tree/study_method.md',
            '/tree/halloween.md',
            // '/tree/task.md',
        ],
        '/fitness/': [
            '/fitness/fitfood.md',
            '/fitness/back.md'
        ],
        '/bodyDev/': [
            '/bodyDev/memory.md',
            '/bodyDev/reading_note.md'
        ],
        '/camera/': [
            '/camera/pic_demos.md',
        ],
        '/lang/en/': [
            'categories.md'
        ],
        '/trip/': [
            'README.md',
            'task.md',
        ],
        '/kids/': [
            'README.md',
        ]
    };
}