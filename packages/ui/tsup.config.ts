import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Enable types generation for npm publishing
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@mui/material", "@emotion/react", "@emotion/styled", "next"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
