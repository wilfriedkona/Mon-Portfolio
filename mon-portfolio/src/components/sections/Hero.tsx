"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  // Gestion du survol pour l'assombrissement progressif
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

  // Animations au chargement
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
      style={{ backgroundImage: "url('/images/background.jpg')" }} // Chemin vers ton image de fond
    >
      {/* Petite image en haut à gauche */}
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
        {/* Texte et boutons - à gauche en desktop, en bas en mobile */}
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:pr-8">
          <h1 className="hero-title opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-600 transform translate-y-10 transition-all duration-700">
            Salut, je suis <span className="block text-white">Wilfried KONAN</span>
          </h1>

          <h2 className="hero-subtitle opacity-0 text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 transform translate-y-10 transition-all duration-700 delay-300">
            Développeur Web Full Stack
          </h2>

          <p className="hero-paragraph opacity-0 text-lg mb-8 text-gray-600 transform translate-y-10 transition-all duration-700 delay-500">
            Je crée des applications web modernes et performantes avec React, Next.js et TypeScript.
            Passionné par le développement web, je m'efforce toujours d'apprendre de nouvelles
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

        {/* Image - à droite en desktop, en haut en mobile */}
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

      {/* CSS pour les animations */}
      <style jsx global>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
