import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 500vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Démo
            </a>
          )}
          <Link 
            href={`/projects/${project.id}`}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition ml-auto"
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;