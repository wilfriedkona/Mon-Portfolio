"use client";

import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import { Project, Skill } from '@/types';
import { motion } from 'framer-motion';

// Définition des projets
const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Application My Show Time',
    description: 'Une plateforme de reservation de ticket complète avec génération de code QR unique pour chaque ticket / Dashboard Admin.',
    image: '/images/projects/ticket.png',
    technologies: ['React', 'Nest.js', 'TypeScript', 'Tailwind CSS'],


    featured: true
  },
  {
    id: 'project-2',
    title: 'Application Blog',
    description: 'Une plateforme de Blog complète avec compte utilisateur et gestion de commentaire / Dashboard Admin',
    image: '/images/projects/ecommerce.png',
    technologies: ['Laravel', 'Mysql', 'php', 'HTML', 'CSS', 'JS', 'Tailwind CSS'],


    featured: true
     },
     {
    id: 'project-3',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],


    featured: true
     },
     {
    id: 'project-4',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],


    featured: true
     },
     {
    id: 'project-5',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    // githubUrl: 'https://github.com/username/ecommerce',
    // demoUrl: 'https://ecommerce-demo.com',
    featured: true
     },
     {
    id: 'project-6',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    // githubUrl: 'https://github.com/username/ecommerce',
    // demoUrl: 'https://ecommerce-demo.com',
    featured: true
    },
];

// Définition des compétences
const skills: Skill[] = [
  {
    name: 'html5', icon: '/images/skills/html.png',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'css3', icon: '/images/skills/css.png',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'javascript', icon: '/images/skills/js.png',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'typescript', icon: '/images/skills/typescript.svg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'react', icon: '/images/skills/react.png',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'nextjs', icon: '/images/skills/next-js.webp',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'vuejs', icon: '/images/skills/vuejs.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'tailwind', icon: '/images/skills/tailwind.png',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'nodejs', icon: '/images/skills/node-js.png',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'php', icon: '/images/skills/php.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'python', icon: '/images/skills/python.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'laravel', icon: '/images/skills/laravel.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'flask', icon: '/images/skills/flask.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'nestjs', icon: '/images/skills/nest.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'mysql', icon: '/images/skills/mysql.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'mongodb', icon: '/images/skills/mongo.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'sqlite', icon: '/images/skills/sqlite.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'git', icon: '/images/skills/git.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'docker', icon: '/images/skills/docker.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'figma', icon: '/images/skills/figma.jpg',
    category: 'frontend',
    proficiency: 0
  },
  {
    name: 'vscode', icon: '/images/skills/vscode.jpg',
    category: 'frontend',
    proficiency: 0
  },
  // Ajoutez toutes les autres compétences ici
];

// Composant pour la section des compétences
const SkillsCarousel = () => {
  return (
    <section className="py-4 bg-gray-50 dark:bg-blue-900 overflow-hidden">
      <div className="max-w-9xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Mes Compétences</h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="animate-slide-right flex items-center space-x-8">
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`} 
                className="flex-shrink-0 w-24 h-24 rounded-full bg-white shadow-md p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-right {
          display: flex;
          animation: slideRight 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Composant pour la section des projets
const ProjectsSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setInView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="projects-section" 
      className="py-20 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-black dark:to-blue-900"
    >
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projets en vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Voir tous les projets
          </a>
        </div>
      </div>
    </section>
  );
};

// Page d'accueil principale
export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <SkillsCarousel />
      {/* Autres sections comme Contact rapide, etc. */}
    </main>
  );
}