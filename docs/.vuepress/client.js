import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ router }) {
    router.afterEach((to) => {
      console.log("路由跳转到：", to.fullPath);
    });

  },
});
