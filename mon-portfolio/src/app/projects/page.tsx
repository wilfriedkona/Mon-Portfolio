"use client"

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/sections/ProjectCard';
import { Project } from '@/types';
import Image from 'next/image';
// import { main } from 'framer-motion/client';

const allProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Site de Réservation de Ticket',
    description: 'Une plateforme de réservation de ticket complète avec génération de code QR unique pour chaque ticket',
    image: '/images/projects/ticket.png',
    technologies: ['Handle Bare', 'Nest.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ticket-reservation',
    demoUrl: 'https://ticket-demo.com',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['HTML', 'CSS', 'Mysql', 'JavaScript'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Dashboard Analytics',
    description: 'Une interface d\'analyse de données avec visualisations dynamiques et rapports personnalisables',
    image: '/images/projects/ecommerce.png',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/dashboard',
    demoUrl: 'https://dashboard-demo.com',
    featured: true
  },
  {
    id: 'project-4',
    title: 'Application de Gestion de Tâches',
    description: 'Une application de gestion de tâches avec fonctionnalités de collaboration en temps réel',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    githubUrl: 'https://github.com/username/task-manager',
    demoUrl: 'https://tasks-demo.com',
    featured: true
  },
  {
    id: 'project-5',
    title: 'Portfolio Photographe',
    description: 'Site vitrine pour photographe avec galerie dynamique et système de réservation de séance',
    image: '/images/projects/portfolio.png',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
    githubUrl: 'https://github.com/username/photo-portfolio',
    demoUrl: 'https://photo-portfolio-demo.com',
    featured: true
  },
  {
    id: 'project-6',
    title: 'Application Météo',
    description: 'Application météo avec prévisions détaillées et notifications personnalisées',
    image: '/images/projects/weather.png',
    technologies: ['React Native', 'Redux', 'API REST', 'Expo'],
    githubUrl: 'https://github.com/username/weather-app',
    demoUrl: 'https://weather-demo.com',
    featured: true
  },
];

export default function ProjectsPage() {
  // État pour les filtres sélectionnés
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [isAnimating, setIsAnimating] = useState(false);

  // Extraire toutes les technologies uniques de tous les projets
  const allTechnologies = Array.from(
    new Set(
      allProjects.flatMap(project => project.technologies)
    )
  ).sort();

  // Grouper les technologies par catégorie pour une meilleure organisation
  const techCategories = {
    'Frontend': ['React', 'Handle Bare', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    'Backend': ['Node.js', 'PHP', 'Python', 'Flask', 'Nest.js', 'Mysql', 'MongoDB', 'Sqlite', 'Laravel'],
    'Mobile': ['React Native', 'Expo'],
    'Autres': ['TypeScript', 'API REST']
  };

  // Filtrer les projets quand une technologie est sélectionnée
  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      if (selectedTech) {
        setFilteredProjects(
          allProjects.filter(project => 
            project.technologies.includes(selectedTech)
          )
        );
      } else {
        setFilteredProjects(allProjects);
      }
      setIsAnimating(false);
    }, 300);
  }, [selectedTech]);

  // Fonction pour gérer la sélection d'une technologie
  const handleTechSelect = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

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
    {
      name: 'canva', icon: '/images/skills/canva.jpg',
      category: 'frontend',
      proficiency: 0
    },
    {
      name: 'photoshop', icon: '/images/skills/ps.jpg',
      category: 'frontend',
      proficiency: 0
    },
    {
      name: 'illustrator', icon: '/images/skills/ai.jpg',
      category: 'frontend',
      proficiency: 0
    },
    // Ajoutez toutes les autres compétences ici
  ];
  
  // Composant pour la section des compétences
  const SkillsCarousel = () => {
    return (
      <section className="py-2 bg-gray-50 dark:bg-blue-900 overflow-hidden">
        <div className="max-w-9xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center"> </h2>
          
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


  return (
    
    <div className="relative py-20 min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-blue-900">
      {/* Image de fond avec opacity */}
            <div className="absolute inset-0 opacity-10 dark:opacity-25">
              <Image 
                src="/images/signature.png" 
                alt="Background de compétences" 
                layout="fill" 
                objectFit="cover" 
                quality={50}
              />
            </div>
      <div className="relative z-1 max-w-9xl mx-auto px-4">
        {/* En-tête de la page avec fond décoratif */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90  z-1"></div>
          <div className="absolute inset-0 opacity-100 z-0">
            <Image 
              src="/images/background.jpg" 
              alt="Background code"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-1 py-12 px-8 text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-shadow-black">Mes Projets</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Découvrez mes réalisations récentes et explorez les différentes technologies que j'utilise pour créer des applications web modernes et performantes.
            </p>
          </div>
        </div>

        {/* Section de filtrage par technologie */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-600">Filtrer par technologie</h2>
          
          <div className="space-y-2">
            {Object.entries(techCategories).map(([category, technologies]) => (
              <div key={category} className="space-y-2 text-black font-bold">
                <h3 className="text-lg font-bold text-gray-700 dark:text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.filter(tech => allTechnologies.includes(tech)).map(tech => (
                    <button
                      key={tech}
                      onClick={() => handleTechSelect(tech)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedTech === tech 
                          ? 'bg-blue-600 font-bold text-white shadow-md' 
                          : 'bg-gray-100 dark:bg-gray-300 hover:bg-gray-200 dark:hover:bg-blue-600'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {selectedTech && (
            <div className="mt-4 flex items-center">
              <p className="text-gray-600 dark:text-gray-300">
                {filteredProjects.length} projet(s) utilisant <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedTech}</span>
              </p>
              <button 
                onClick={() => setSelectedTech(null)}
                className="ml-8 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Réinitialiser le filtre
              </button>
            </div>
          )}
        </div>

        {/* Grille de projets avec animation de transition */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Aucun projet ne correspond au filtre sélectionné.
              </p>
            </div>
          )}
        </div>
      </div>
      <SkillsCarousel />
    </div>
    
  );
}