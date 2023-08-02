import { defineConfig } from "vitepress";
import siderbar from "./config/siderbar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello Nest",
  description:
    "这里是一个Nestjs学习资源网站|nestjs教程｜nestjs文档｜nestjs最佳实践｜nestjs中文网｜nestjs实战｜nestjs项目",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "实践", link: "/practice/" },
      { text: "文章", link: "/article/index.html" },
    ],
    sidebar: siderbar,
    outline: [1, 3],
    outlineTitle: "大纲",
    socialLinks: [
      { icon: "github", link: "https://github.com/nodeing/nestjs-doc" },
    ],
    footer: {
      message: "我的微信: nodeing-cn",
      copyright:
        "课程内容版权均归 洛邪 版权所有;ICP备案号：<a href='https://beian.miit.gov.cn/#/Integrated/index'>蜀ICP备2022017859号-2</a>",
    },
  },
});
