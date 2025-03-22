"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">VotreNom</Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition">Accueil</Link>
            <Link href="/projects" className="hover:text-blue-600 transition">Projets</Link>
            <Link href="/skills" className="hover:text-blue-600 transition">Compétences</Link>
            <Link href="/about" className="hover:text-blue-600 transition">À propos</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
          
          {/* Menu mobile - toggle button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>
        
        {/* Menu mobile - dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Accueil</Link>
              <Link href="/projects" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Projets</Link>
              <Link href="/skills" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Compétences</Link>
              <Link href="/about" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">À propos</Link>
              <Link href="/contact" className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;