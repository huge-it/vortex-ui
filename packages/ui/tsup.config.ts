import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: false, // Disabled due to Vercel worker OOM crashes with MUI types
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@mui/material", "@emotion/react", "@emotion/styled"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
