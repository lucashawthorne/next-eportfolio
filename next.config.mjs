import { join } from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/eportfolio",
  assetPrefix: "/eportfolio/",
  distDir: "out",
};

export default nextConfig;