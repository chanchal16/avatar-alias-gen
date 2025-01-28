import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      outDir: "./dist",
    })
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "avataraliasgen",
      fileName: (format) => `avatar-alias-gen.${format}.js`,
    },
    rollupOptions: {
      external: [], // Add any external dependencies here
      output: {
        globals: {}, // Specify global variable names for external dependencies
      },
    },
  },
});
