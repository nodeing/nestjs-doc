import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "牛马程序员",
  description: "这里是牛马程序员官网",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/article/index.html" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/nodeing/niuma-template" },
    ],
  },
});
