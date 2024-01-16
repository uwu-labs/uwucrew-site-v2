import { defineConfig } from "astro/config";
import partytown from '@astrojs/partytown';
import react from "@astrojs/react";
import compressor from "astro-compressor";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://uwucrew.art",
  integrations: [react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compressor(), robotsTxt()]
});