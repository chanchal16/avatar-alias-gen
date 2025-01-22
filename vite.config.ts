import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "randomizeit",
      fileName: (format) => `randomize-it.${format}.js`,
    },
    rollupOptions: {
      external: [], // Add any external dependencies here
      output: {
        globals: {}, // Specify global variable names for external dependencies
      },
    },
  },
});
