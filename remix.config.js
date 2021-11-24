const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/material-palenight.json");

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "server/build",
  mdx: async () => {
    return {
      remarkPlugins: [[remarkCodeHike, { theme }]],
    };
  },
};
