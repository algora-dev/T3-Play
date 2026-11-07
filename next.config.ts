import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/tokens", destination: "/", permanent: true },
      { source: "/activetoown", destination: "/documents", permanent: true },
      { source: "/thevision", destination: "/about", permanent: true },
      { source: "/error", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
