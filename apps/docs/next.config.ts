import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["vortex-ui"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "vortex-ui": path.resolve(__dirname, "../../packages/ui/src/index.ts"),
    };
    return config;
  },
};

export default withSerwist(nextConfig);
