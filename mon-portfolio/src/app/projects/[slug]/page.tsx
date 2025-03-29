"use client"

import { useEffect, useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { Project } from '@/types';
import { getProjectBySlug } from '@/lib/data';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params); 
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const projectData = await getProjectBySlug(slug);
        setProject(projectData);
      } catch (error) {
        console.error("Erreur lors du chargement du projet:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
        <p className="mb-8">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
        <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 pt-28 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-black dark:to-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        {/* En-tête */}
        <Link 
          href="/projects" 
          className={`inline-flex items-center text-blue-600 mb-8 transition-all duration-500 ${
            animationComplete ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-4'
          }`}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Retour aux projets
        </Link>

        <div className={`relative overflow-hidden rounded-xl shadow-2xl mb-12 transition-all duration-700 ${
          animationComplete ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-8'
        }`}>
          
            {project.videoUrl ? (
              <video 
                src={project.videoUrl} 
                controls 
                className="w-full h-auto"
                poster={project.image}
              >
                Votre navigateur ne prend pas en charge la lecture de vidéos.
              </video>
            ) : (
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className={`md:col-span-2 transition-all duration-900 ${
            animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p className="text-lg mb-6">{project.description}</p>
              
              {/* Description longue - à remplacer par vos données réelles */}
              <p className="mb-6">
                Ce projet a été conçu pour répondre aux besoins spécifiques des utilisateurs en matière de {project.title.toLowerCase()}. 
                Il combine une interface utilisateur intuitive avec des fonctionnalités robustes pour offrir une expérience utilisateur optimale.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Fonctionnalités principales</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interface utilisateur responsive et moderne</li>
                <li>Optimisation des performances pour un chargement rapide</li>
                <li>Architecture évolutive permettant d'ajouter facilement de nouvelles fonctionnalités</li>
                <li>Intégration avec différentes API et services externes</li>
                <li>Tests automatisés pour garantir la qualité du code</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Défis techniques</h3>
              <p>
                La réalisation de ce projet a présenté plusieurs défis techniques intéressants, notamment 
                l'optimisation des performances et la gestion de l'état de l'application. Pour résoudre ces problèmes,
                j'ai utilisé des techniques modernes comme le code splitting, la mise en cache des données et 
                l'implémentation d'une architecture orientée composants.
              </p>
            </div>
          </div>
          
          {/* Sidebar avec informations et liens */}
          <div className={`transition-all duration-1100 ${
            animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                Informations
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Date</h4>
                    <p className="text-gray-600 dark:text-gray-300">2023 - 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Code className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Technologies</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.technologies.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Voir le code source
                  </a>
                )}
                
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Visiter le site
                  </a>
                )}
              </div>
            </div>
            
            <div className="mt-8 bg-white dark:bg-black rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Autres projets</h3>
              
              <div className="space-y-4">
                {/* Remplacer par vos données réelles */}
                <Link href="/projects/other-project-1" className="block p-3 bg-gray-600 hover:bg-gray-900 text-white rounded-lg transition">
                  <h4 className="font-medium">Application de gestion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, Node.js</p>
                </Link>
                <Link href="/projects/other-project-2" className="block p-3 bg-gray-600 hover:bg-gray-900 text-white rounded-lg transition">
                  <h4 className="font-medium">Site e-commerce</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Next.js, Tailwind CSS</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}