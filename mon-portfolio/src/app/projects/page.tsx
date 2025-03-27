"use client"

import ProjectCard from '@/components/sections/ProjectCard';
import { Project } from '@/types';
import { useState } from 'react';

// Simulez des données (à remplacer par vos propres données)
const allProjects: Project[] = [

  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },

  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },

  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },

  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },

  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },

  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },
  // Projets...
];

export default function ProjectsPage() {
  return (
    <div className="py-20 max-w-8xl mx-auto px-8 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-black dark:to-blue-900">
      <h1 className="text-4xl font-bold mb-8">Mes projets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}