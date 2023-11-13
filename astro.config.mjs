import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.webyousoon.com/",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "monthly",
      priority: 1,
      lastmod: new Date(),
    }),
  ],
});
