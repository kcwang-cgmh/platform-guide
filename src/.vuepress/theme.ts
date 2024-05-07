import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  darkmode: "disable",
  print: false,
  iconAssets: "fontawesome-with-brands",
  logo: "/images/logo.png",
  docsDir: "src",
  author: {
    name: "長庚醫科-王克勤",
  },
  pageInfo: ['Author', 'Date', 'Category', 'Tag'],

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "長庚紀念醫院數位學習平台操作手冊",
  copyright: "Copyright © 長庚醫學科技股份有限公司",
  displayFooter: true,

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
