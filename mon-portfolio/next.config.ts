import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs TS pendant la compilation
  },
};

export default nextConfig;