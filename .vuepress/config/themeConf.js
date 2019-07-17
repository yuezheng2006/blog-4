const sidebar = require('./sidebar')

module.exports = {
  //网站标题
  title: `Zsh's Blog`,
  // 主页描述
  description: 'Learn Web development together',
  // 要部署的仓库名字
  base: '/',
  // dest: './docs/.vuepress/dist',
  head: [['link', { rel: 'icon', href: '/avatar.jpg' }]],
  navbar: true,
  editLinks: true,
  repo: 'ITxiaohao/blog',
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  sidebarDepth: 2,
  nav: [
    { text: '导航', link: '/guide/' },
    {
      text: '大前端',
      items: [
        {
          text: '基础',
          items: [
            {
              text: 'JavaScript',
              link: '/passages/javascript-first/'
            },
            { text: 'ES6', link: '/passages/es6-promise/' }
          ]
        },
        {
          text: '框架',
          items: [
            {
              text: 'Vue',
              link: '/passages/vue-cli3/'
            },
            {
              text: '小程序',
              link: '/passages/miniprogram-note/'
            }
          ]
        },
        {
          text: '构建工具',
          items: [
            {
              text: 'Webpack4教程',
              link: '/passages/webpack4-learn-introduction/'
            }
          ]
        }
      ]
    },
    {
      text: '工具',
      items: [
        {
          text: '版本管理',
          items: [
            {
              text: 'Git',
              link: '/passages/git-commit/'
            }
          ]
        }
      ]
    }
  ]
}
