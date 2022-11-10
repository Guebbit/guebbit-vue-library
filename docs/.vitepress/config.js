/**
 * This can be used as an example
 * https://github.com/vuejs/vitepress/blob/master/docs/.vitepress/config.js
 */
module.exports = {
  lang: 'en-US',
  title: 'Guebbit Vue Component Library',
  description: 'A lightweight Vue 3 component library',

  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/Guebbit/guebbit-vue-library',
      },
    ],
    sidebar: [
      {
        text: 'Blocks',
        items: [
          {
            text: 'Panels',
            items: [
              { text: 'Panel (basic)', link: '/guide/blocks/panel' },
            ],
          },
        ],
        collapsible: true,
        // collapsed: true,
      },
    ],
  },
}
