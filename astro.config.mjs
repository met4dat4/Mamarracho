// @ts-check
import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), preact({ compat: true })],
});
