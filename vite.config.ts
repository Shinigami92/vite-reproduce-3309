import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [createVuePlugin()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    build: {
      assetsDir: "static",
      target: ["chrome63"],
    },
  };
});
