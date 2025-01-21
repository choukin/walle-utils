/**
 * 设置title,导航和侧边栏
 */
export default {
  theme: '',
  title: 'WALLE-UTILS',
  description: '基于真实项目经验提炼总结出来的常用工具',
  base: '/',
  port: '8080',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      {
        text: 'HOME',
        link: '/'
      },
      {
        text: 'API',
        link: '/lib/'
      }
    ],
    sidebar: {
      '/lib/': [
        '',
        'ua',
        'android'
      ]
    }
    }
  }