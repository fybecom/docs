const { description } = require("../../package");

module.exports = {
  base: "/docs/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Fybe Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon.png" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon.ico" },
    ],
  ],

  // markdown: {
  //   toc: {
  //     includeLevel: [2, 3, 4, 5]
  //   }
  // },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/fybecom/docs",
    editLinks: true,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    nav: [
      {
        text: "Products",
        link: "/products/",
      },
    ],
    sidebar: {
      "/products/": [
        {
          title: "Products",
          collapsable: false,
          children: [
            "",
            {
              type: "group",
              title: "Compute Instances",
              collapsable: false,
              children: [
                "compute-instance/",
                "compute-instance/how-to/login",
                "compute-instance/how-to/custom-images",
                "compute-instance/how-to/creating-custom-images",
                "compute-instance/vpc/",
              ],
            },
            {
              type: "group",
              title: "Object Storage Spaces",
              collapsable: false,
              children: [
                "object-storage/",
                "object-storage/compatibility/",
              ],
            },
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
