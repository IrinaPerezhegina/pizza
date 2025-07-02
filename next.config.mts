import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    config.externals = [...config.externals, "bcrypt"];

    // if (!isServer) {
    //   config.node = {
    //     fs: "empty",
    //   };
    // }
    return config;
  },
};

export default nextConfig;
