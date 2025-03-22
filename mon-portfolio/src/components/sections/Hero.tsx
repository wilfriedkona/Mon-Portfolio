"use client"

import Link from 'next/link';
import { motion } from 'framer-motion'; // Si vous installez framer-motion

const Hero = () => {
  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-20 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Salut, je suis <span className="text-blue-600">Votre Nom</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300">
          Développeur Web Full Stack
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto md:mx-0">
          Je crée des applications web modernes et performantes avec React, Next.js et TypeScript.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Voir mes projets
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Me contacter
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;