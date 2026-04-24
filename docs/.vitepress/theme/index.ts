import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    router.onAfterRouteChanged = (to) => {
      console.log("路由跳转到：", to);
    };
  },
} satisfies Theme;
