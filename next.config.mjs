/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Eportfolio",
  assetPrefix: "/Eportfolio/",
  trailingSlash: true,
};

export default nextConfig;
