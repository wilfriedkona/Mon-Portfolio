// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import Navbar from '@/components/ui/Navbar';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Wilfried KONAN | Développeur Web',
//   description: 'Portfolio de développement web et projets personnels',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="fr">
//       <body className={inter.className}>
//         <Navbar />
//         <main className="pt-16">
//           {children}
//         </main>
//         <footer className="bg-black text-white py-8">
//           <div className="max-w-7xl mx-auto px-4 text-center">
//             <p>© {new Date().getFullYear()} Wilfried Koadjauh KONAN. Tous droits réservés. wilfried.konan@epitech.eu</p>
//           </div>
//         </footer>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wilfried KONAN | Développeur Web',
  description: 'Portfolio de développement web et projets personnels',
};

// Définir l'année comme constante
const CURRENT_YEAR = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© {CURRENT_YEAR} Wilfried Koadjauh KONAN. Tous droits réservés. wilfried.konan@epitech.eu</p>
          </div>
        </footer>
      </body>
    </html>
  );
}