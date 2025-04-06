import { GitContributors } from "C:/Users/btric/OneDrive/Documents/Robert Important Files/tohedev/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/btric/OneDrive/Documents/Robert Important Files/tohedev/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
