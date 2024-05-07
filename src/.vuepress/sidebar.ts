import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "個人學習歷程",
      icon: "book",
      prefix: "portfolio/",
      link: "portfolio/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "平台管理中心",
      icon: "gears",
      prefix: "backstage/",
      link: "backstage/",
      collapsible: true,
      children: "structure",
    },
  ],
});
