import { defineConfig } from "vitepress";

export default defineConfig({
  // base: "/sample/",
  lang: "zh-CN",
  title: "VitePress 示例",
  description: "一步一步理解 VitePress 的工作原理",

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "示例文档", link: "/sample" },
    ],

    // 侧边栏
    sidebar: {
      "/": [
        {
          text: "入门",
          items: [
            { text: "首页", link: "/" },
            { text: "示例文档", link: "/sample" },
          ],
        },
      ],
    },
  },
});
