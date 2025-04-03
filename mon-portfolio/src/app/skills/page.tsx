"use client"

import { useEffect, useState } from 'react';
import { getAllSkills } from '@/lib/data';
import { Skill } from '@/types';
import Image from "next/image";


export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const skillsData = await getAllSkills();
        setSkills(skillsData);
      } catch (error) {
        console.error("Erreur lors du chargement des compétences:", error);
      } finally {
        setIsLoading(false);
        setTimeout(() => setLoaded(true), 100);
      }
    };

    fetchSkills();
  }, []);

  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Outils' },
    { id: 'other', name: 'Autres' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-blue-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-blue-200/50 mb-4"></div>
          <div className="h-10 w-80 bg-blue-300/30 rounded-lg"></div>
        </div>
      </div>
    );
  }


  
  const getSkillIcon = (iconName: string) => {
    const iconMap: Record<string, string> = {
      html5: '/images/skills/html.png',
      css3: '/images/skills/css.png',
      javascript: '/images/skills/js.png',
      typescript: '/images/skills/typescript.svg',
      react: '/images/skills/react.png',
      nextjs: '/images/skills/next-js.webp',
      vuejs: '/images/skills/vuejs.jpg',
      tailwind: '/images/skills/tailwind.png',
      nodejs: '/images/skills/node-js.png',
      php: '/images/skills/php.jpg',
      python: '/images/skills/python.jpg',
      laravel: '/images/skills/laravel.jpg',
      flask: '/images/skills/flask.jpg',
      nestjs: '/images/skills/nest.jpg',
      mysql: '/images/skills/mysql.jpg',
      mongodb: '/images/skills/mongo.jpg',
      sqlite: '/images/skills/sqlite.jpg',
      git: '/images/skills/git.jpg',
      docker: '/images/skills/docker.jpg',
      figma: '/images/skills/figma.jpg',
      vscode: '/images/skills/vscode.jpg',
      photoshop: '/images/skills/ps.jpg',
      canva: '/images/skills/canva.jpg',
      illustrator: '/images/skills/ai.jpg',
      // ... autres mappings
      default: '/images/skills/default.svg'
    };
    
    return iconMap[iconName] || iconMap.default;
  };

  return (
    <div className="relative min-h-screen pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-black dark:to-blue-900 overflow-hidden">
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
      <div className="relative z-1 max-w-9xl mx-auto px-4 pt-28">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 transform -translate-y-4'}`}>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mon Arsenal Technologique
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            Voici mon écosystème de technologieset et mon niveau d'adaptation évolutif pour créer des expériences web exceptionnelles.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`
                bg-white dark:bg-gray-800/50 
                backdrop-blur-lg 
                border border-gray-100 dark:border-gray-700 
                rounded-2xl 
                shadow-2xl 
                overflow-hidden 
                transform transition-all duration-700 
                hover:scale-105 
                ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 mr-6 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <img 
                      src={getSkillIcon(skill.icon)}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/skills/default.svg';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {skill.category}
                    </p>
                  </div>
                </div>

                {/* Barre de progression améliorée */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Maîtrise</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.proficiency}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ 
                        width: loaded ? `${skill.proficiency * 20}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Étoiles de niveau
                <div className="flex mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-6 h-6 ${i < skill.proficiency ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Section statistiques */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1200 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">Frontend</h3>
            <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
              {skills.filter(s => s.category === 'frontend').length}
            </div>
            <p className="text-blue-700 dark:text-blue-300">Technologies maîtrisées</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">Backend</h3>
            <div className="text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">
              {skills.filter(s => s.category === 'backend').length}
            </div>
            <p className="text-purple-700 dark:text-purple-300">Technologies maîtrisées</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">Niveau Moyen</h3>
            <div className="text-5xl font-extrabold text-green-600 dark:text-green-400 mb-2">
              {(skills.reduce((acc, curr) => acc + curr.proficiency, 0) / skills.length).toFixed(1)}
            </div>
            <p className="text-green-700 dark:text-green-300">Sur une échelle de 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}