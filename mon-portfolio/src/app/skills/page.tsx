"use client"

import { useEffect, useState } from 'react';
import { getAllSkills } from '@/lib/data';
import { Skill } from '@/types';
import { CgNpm } from 'react-icons/cg';

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
        
        // Délai pour les animations
        setTimeout(() => {
          setLoaded(true);
        }, 100);
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-300 mb-4"></div>
          <div className="h-8 w-64 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  // Fonction pour générer la couleur du dégradé basée sur le niveau de compétence
  const getGradientColor = (proficiency: number) => {
    const colors = {
      1: 'from-blue-200 to-blue-300',
      2: 'from-blue-300 to-blue-400',
      3: 'from-blue-400 to-blue-500',
      4: 'from-blue-500 to-blue-600',
      5: 'from-blue-600 to-blue-700'
    };
    return colors[proficiency as keyof typeof colors];
  };

  // Fonction pour obtenir la largeur de la barre de progression
  const getProgressWidth = (proficiency: number) => {
    return `${proficiency * 20}%`;
  };

  // Obtenez l'icône appropriée pour la compétence
  const getSkillIcon = (iconName: string) => {
    try {
        const iconMap: Record<string, string> = {
      html5: '/images/skills/html.png',
      css3: '/images/skills/css.png',
      javascript: '/images/skills/js.png',
      typescript: '/images/skills/typescript.svg',
      react: '/images/skills/react.png',
      nextjs: '/images/skills/next-js.webp',
      vuejs: '/images/skills/vue.svg',
      tailwind: '/images/skills/tailwind.png',
      nodejs: '/images/skills/node-js.png',
      php: '/images/skills/php.svg',
      python: '/images/skills/python.svg',
      laravel: '/images/skills/laravel.svg',
      flask: '/images/skills/flask.svg',
      nestjs: '/images/skills/nestjs.svg',
      mysql: '/images/skills/mysql.svg',
      mongodb: '/images/skills/mongodb.svg',
      sqlite: '/images/skills/sqlite.svg',
      git: '/images/skills/git.svg',
      docker: '/images/skills/docker.svg',
      figma: '/images/skills/figma.svg',
      vscode: '/images/skills/vscode.svg',
    };
    
    // Vérifie si l'icône existe dans la map, sinon retourne l'icône par défaut
    return iconMap[iconName] ? iconMap[iconName] : '/images/skills/default.svg';
  } catch (error) {
    console.error("Erreur lors du chargement de l'icône:", error);
    return '/images/skills/default.svg';
  }
};

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-black dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 pt-28">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 transform -translate-y-4'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes compétences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            Voici un aperçu des technologies et outils que j'utilise pour créer des applications web modernes et performantes.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-xl transform hover:-translate-y-1 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <img 
                      src={getSkillIcon(skill.icon)}
                      alt={skill.name}
                      className="w-8 h-8"
                      onError={(e) => {
                        // Fallback si l'image ne charge pas
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/skills/default.svg';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {skill.category}
                    </p>
                  </div>
                </div>

                {/* Barre de progression */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Niveau</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.proficiency}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${getGradientColor(skill.proficiency)} transition-all duration-1000`}
                      style={{ 
                        width: loaded ? getProgressWidth(skill.proficiency) : '0%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Étoiles pour le niveau (alternative visuelle) */}
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < skill.proficiency ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section supplémentaire pour les statistiques */}
        <div className={`mt-20 py-12 px-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-1200 delay-500 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold mb-8 text-center">Statistiques de compétences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {skills.filter(s => s.category === 'frontend').length}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">technologies</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                {skills.filter(s => s.category === 'backend').length}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">technologies</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Niveau moyen</h3>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                {(skills.reduce((acc, curr) => acc + curr.proficiency, 0) / skills.length).toFixed(1)}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">sur 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}