import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Active le mode strict de React (optionnel)
  reactStrictMode: true,
  
  // Spécifie le répertoire source si vous utilisez 'src/'
  // (utile si votre structure est src/app/page.tsx)
  dir: './src',
  
  // Configuration pour le déploiement sur Vercel
  output: 'standalone', // ou 'export' si vous faites une exportation statique
  
  // Si vous déployez sous un sous-chemin (ex: /Mon-Portfolio)
  // basePath: '/Mon-Portfolio',
  
  // Configuration importante pour le routing avec app/ directory
  experimental: {
    appDir: true,
  },
  
  // Redirige les erreurs 404 vers la page d'accueil (optionnel)
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/',
        missing: [
          {
            type: 'header',
            key: 'next-router-prefetch',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
