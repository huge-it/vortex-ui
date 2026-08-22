import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    "dist/**",
    "storybook-static/**"
  ]),
]);

export default eslintConfig;
