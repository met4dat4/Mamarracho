// @ts-check
import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie()],
});
