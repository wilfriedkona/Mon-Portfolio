"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  // États pour gérer l'animation de texte
  const [subtitle, setSubtitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Liste des rôles à afficher en boucle
  const roles = [
    "Développeur Web Full-Stack Junior 🖥️",
    "Développeur Mobile 📱",
    "Infographe Designer UI / UX 🎨",
    "E-Administration 📋", 
    "Transformation Digitale 📈", 
    "Chef de Projet Web 🖥️"
  ];

  // Référence pour l'image avec effet de survol
  const imageRef = useRef<HTMLDivElement>(null);

  // Gestion du survol pour l'assombrissement progressif de l'image
  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.transition = "1.5s";
      imageRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transition = "1.5s";
      imageRef.current.style.backgroundColor = "transparent";
    }
  };

  // Hook pour gérer l'animation de texte dynamique
  useEffect(() => {
    // Récupération du rôle actuel
    const currentRole = roles[currentRoleIndex];
    
    // Définition des vitesses de frappe et de suppression
    const typingSpeed = isDeleting ? 50 : 100; // Suppression plus rapide que l'écriture
    let timeout: NodeJS.Timeout;

    // Logique d'animation du texte
    if (!isDeleting && subtitle === currentRole) {
      // Texte completement écrit, pause avant suppression
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subtitle === "") {
      // Texte completement supprimé, passer au rôle suivant
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Animation d'écriture ou de suppression
      timeout = setTimeout(() => {
        setSubtitle(current => 
          isDeleting 
            ? current.slice(0, current.length - 1) // Suppression lettre par lettre
            : currentRole.slice(0, current.length + 1) // Écriture lettre par lettre
        );
      }, typingSpeed);
    }

    // Nettoyage du timeout
    return () => clearTimeout(timeout);
  }, [subtitle, isDeleting, currentRoleIndex]);

  // Animations au chargement des éléments
  useEffect(() => {
    const animateElements = () => {
      const smallLogo = document.querySelector(".small-logo");
      const title = document.querySelector(".hero-title");
      const subtitle = document.querySelector(".hero-subtitle");
      const paragraph = document.querySelector(".hero-paragraph");
      const buttons = document.querySelector(".hero-buttons");
      const heroImage = document.querySelector(".hero-image-container");

      const elements = [smallLogo, title, subtitle, paragraph, buttons, heroImage];

      elements.forEach((el, index) => {
        if (el) {
          setTimeout(() => {
            el.classList.add("animate-in");
          }, 300 * (index + 1));
        }
      });
    };

    animateElements();
  }, []);

  return (
    <section
      className="min-h-screen pt-20 flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* Logo en haut à gauche */}
      <div className="small-logo absolute top-0 left-0 opacity-0 transform translate-y-10 transition-all duration-700">
        <Image
          src="/images/signature.png"
          alt="Logo"
          width={300}
          height={60}
          priority
        />
      </div>

      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row px-4 py-10">
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:pr-8">
          <h1 className="hero-title opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-600 transform translate-y-10 transition-all duration-700 text-shadow-black">
            Bonjour, je suis <span className="block text-white">Wilfried KONAN</span>
          </h1>

          {/* Animation de texte dynamique */}
          <h2 className="hero-subtitle opacity-0 text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 transform translate-y-10 transition-all duration-700 delay-300">
            {subtitle}
            <span className="animate-blink">|</span>
          </h2>

          {/* Reste du composant inchangé */}
          <p className="hero-paragraph opacity-0 text-lg mb-8 text-gray-600 transform translate-y-10 transition-all duration-700 delay-500">
            Je crée des applications web et mobile , modernes et performantes.
            Passionné par le développement, je m'efforce toujours d'apprendre de nouvelles
            technologies et de créer des expériences utilisateur exceptionnelles.
          </p>

          <div className="hero-buttons opacity-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform translate-y-10 transition-all duration-700 delay-700">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Image avec effet de survol */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <div
            className="hero-image-container relative w-full h-100 sm:h-100 md:h-96 lg:h-[700px] opacity-0 transform translate-y-10 transition-all duration-700 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl shadow-white p-4 bg-gray-800 text-white rounded-lg"
            ref={imageRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/images/dev.jpeg"
              alt="Votre profil"
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-20 rounded-xl transition-opacity duration-700 ease-in-out hover:opacity-40" />
          </div>
        </div>
      </div>

      {/* Styles globaux pour les animations */}
      <style jsx global>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;