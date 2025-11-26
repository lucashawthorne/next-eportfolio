import { join } from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Eportfolio",
  assetPrefix: "/Eportfolio/",
  distDir: "out",
};

export default nextConfig;