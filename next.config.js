import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "react-syntax-highlighter"
  ],
  pageExtensions: ["page.tsx"]
};

const withVanillaExtract = createVanillaExtractPlugin();

const config = withVanillaExtract(nextConfig);

export default config;
