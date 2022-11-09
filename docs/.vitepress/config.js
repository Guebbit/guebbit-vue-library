/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
module.exports = {
  lang: 'en-US',
  title: '🌙 Moon',
  description: 'A lightweight Vue 3 component library',

  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/ulissesferreira/moon',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Components',
        children: [
          { text: 'Button', link: '/guide/button/button' },
          { text: 'Checkbox', link: '/guide/checkbox/checkbox' },
        ],
      },
      {
        text: 'Blocks',
        children: [
          { text: 'Panel', link: '/guide/blocks/panel/panel' },
        ],
      },
    ],
  },
}
