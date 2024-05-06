import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-TW",
  title: "數位學習平台操作手冊",
  description: "歡迎使用數位學習平台，這裡是平台的操作文件",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
