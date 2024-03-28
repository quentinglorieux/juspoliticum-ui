import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  server: {
    port: 4321,
    host: true
  },
  output: "hybrid",
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ["modern-normalize"]
    }
  }
});
``;