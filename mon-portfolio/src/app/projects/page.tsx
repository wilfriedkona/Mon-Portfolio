"use client"

import ProjectCard from '@/components/sections/ProjectCard';
import { Project } from '@/types';
import { useState } from 'react';

// Simulez des données (à remplacer par vos propres données)
const allProjects: Project[] = [
  // Projets...
];

export default function ProjectsPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Mes projets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}