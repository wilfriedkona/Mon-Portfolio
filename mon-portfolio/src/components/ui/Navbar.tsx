"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le défilement et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu lors d'un clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-20 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-blue-900 to-black shadow-md py-2' 
        : 'bg-gradient-to-r from-blue-900/90 to-black/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-3xl text-white text-shadow-white">
            <span className="text-white text-5xl text-shadow-white">W</span>. <span className="text-white text-5xl text-shadow-white">K</span> .
          </Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" onClick={handleLinkClick}>Accueil</NavLink>
            <NavLink href="/projects" onClick={handleLinkClick}>Projets</NavLink>
            <NavLink href="/skills" onClick={handleLinkClick}>Compétences</NavLink>
            <NavLink href="/about" onClick={handleLinkClick}>À propos</NavLink>
            <NavLink href="/contact" onClick={handleLinkClick}>Contact</NavLink>
          </div>
          
          {/* Menu mobile - icône burger */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span className={`w-full h-0.5 bg-white rounded transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white rounded transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Menu mobile - dropdown avec animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-1 py-3">
            <NavLink href="/" mobile onClick={handleLinkClick}>Accueil</NavLink>
            <NavLink href="/projects" mobile onClick={handleLinkClick}>Projets</NavLink>
            <NavLink href="/skills" mobile onClick={handleLinkClick}>Compétences</NavLink>
            <NavLink href="/about" mobile onClick={handleLinkClick}>À propos</NavLink>
            <NavLink href="/contact" mobile onClick={handleLinkClick}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};


const NavLink = ({ href, children, mobile = false, onClick }) => {
  return (
    <Link 
      href={href}
      className={`
        relative font-medium text-gray-200 hover:text-white transition-colors duration-300
        ${mobile 
          ? 'py-3 px-4 block w-full hover:bg-blue-800/30 rounded-md' 
          : 'py-2 px-4 flex items-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full'
        }
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;