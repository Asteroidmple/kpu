// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Archive";
export const SITE_TITLE = "路易斯小石站";
export const SITE_DESCRIPTION = "BLOG with ZHIHU";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "LouisSHI";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "untagged",
  tagCard: "Tags",
  tagPage: "Tag - ",
  noCategory: "uncategorized",
  categoryCard: "Categories",
  categoryPage: "Category - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页/Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于/About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博文/Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部博文/All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "original",
        text: "原创文/Original Posts",
        href: "/blog/categories/original",
        svg: "cube",
        target: "_self",
      }, // Original category
      {
        id: "translate",
        text: "搬运文/Translate Posts",
        href: "/blog/categories/translate",
        svg: "heart",
        target: "_self",
      }, // Translate category
      
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "企划/Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友站/Friends",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "链接/Contact",
    href: "mailto:MCxiaoshi2333@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/3493273125522306",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "https://www.zhihu.com/people/ai-xin-jue-luo-xiaoxi",
    ariaLabel: "Zhihu",
    title: "Zhihu",
    svg: "zhihu",
  },
];
