const { defaultTheme } = require("@vuepress/theme-default");
const { viteBundler } = require("@vuepress/bundler-vite");

module.exports = {
  base: "/sample/",
  lang: "zh-CN",
  title: "VuePress 示例",
  description: "一步一步理解 VuePress 的工作原理",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VuePress 示例",
      description: "一步一步理解 VuePress 的工作原理",
    },
  },

  bundler: viteBundler(),

  theme: defaultTheme({
    // 顶部导航栏
    navbar: [
      { text: "首页", link: "/" },
      { text: "示例文档", link: "/sample.html" },
    ],

    // 侧边栏
    sidebar: {
      "/": [
        {
          text: "入门",
          children: ["/README.md", "/sample.md"],
        },
      ],
    },
  }),
};

