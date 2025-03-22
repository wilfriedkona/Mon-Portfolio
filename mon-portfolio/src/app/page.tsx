import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import { Project } from '@/types';

// Simulez des données (à remplacer par vos propres données)
const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com',
    featured: true
  },
  // Autres projets...
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
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
      
      {/* Autres sections comme Skills, Contact rapide, etc. */}
    </main>
  );
}