/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "/resume",
  assetPrefix: "/resume",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure CSS and static files are served correctly
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

export default nextConfig;
