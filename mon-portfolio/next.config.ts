import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration essentielle pour Netlify
  output: 'export', // Active l'exportation statique (requis pour Netlify)
  trailingSlash: true, // Netlify gère mieux les URLs avec slash final
  
  // Spécifie le répertoire source si vous utilisez 'src/'
  dir: './src',
  
  // Désactive les optimisations incompatibles avec l'export statique
  images: {
    unoptimized: true, // Netlify n'a pas l'optimisation d'images Next.js
  },
  
  // Configuration optionnelle pour les redirections
  async redirects() {
    return [
      {
        source: '/blog/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
    ];
  },
  
  // Configuration optionnelle pour les rewrites (si nécessaire)
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },
};

export default nextConfig;