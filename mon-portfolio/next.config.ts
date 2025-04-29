import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Critical pour Netlify
  images: { unoptimized: true }, // Désactive l'optimisation native
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // Optionnel si sous-domaine
  // Active le App Router (Next.js 13+)
  experimental: { appDir: true }
};

export default nextConfig;