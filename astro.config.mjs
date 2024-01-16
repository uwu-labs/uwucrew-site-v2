import { defineConfig } from "astro/config";
import partytown from '@astrojs/partytown';
import react from "@astrojs/react";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compressor()]
});