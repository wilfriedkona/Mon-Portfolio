import { Project, Skill } from '@/types';

// Projets
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'site de réservation',
    description: 'Plateforme de réservation de tickets complète, conçue pour offrir une expérience fluide et moderne. Chaque ticket est accompagné d’un code QR unique, garantissant une sécurité et une praticité optimales. Dashboard administrateur puissant, qui permet une gestion intuitive des utilisateurs, des concerts et des artistes. Gérez facilement vos données avec des fonctionnalités de CRUD complètes (ajout, modification, suppression) pour les utilisateurs et les concerts. Notre interface est entièrement responsive, offrant une navigation optimale sur tous les appareils.',
    image: '/images/projects/ticket.png',
    videoUrl: '/videos/ticket.mp4',
    technologies: ['Handle Bare', 'Nest.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://myshowtime.onrender.com/',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Portfolio Personnel',
    description: 'Site portfolio responsive pour présenter mes projets et compétences',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/portfolio',
    demoUrl: 'https://portfolio-demo.com',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Application de Gestion de Tâches',
    description: 'Application permettant de gérer des tâches avec des listes, des échéances et des rappels',
    image: '/images/projects/task-app.jpg',
    technologies: ['React', 'Redux', 'Firebase'],
    githubUrl: 'https://github.com/username/task-app',
    demoUrl: 'https://task-app-demo.com',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Application Météo',
    description: 'Application montrant les prévisions météo basées sur la localisation',
    image: '/images/projects/weather.jpg',
    technologies: ['Vue.js', 'API REST', 'SCSS'],
    githubUrl: 'https://github.com/username/weather-app',
    demoUrl: 'https://weather-app-demo.com',
    featured: false
  },
  {
    id: 'project-5',
    title: 'Plateforme de Blog',
    description: 'Système de gestion de contenu pour blog avec authentification et commentaires',
    image: '/images/projects/blog.jpg',
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    githubUrl: 'https://github.com/username/blog-platform',
    demoUrl: 'https://blog-platform-demo.com',
    featured: false
  }
];

// Compétences
export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: 'html5', category: 'frontend', proficiency: 5 },
  { name: 'CSS3', icon: 'css3', category: 'frontend', proficiency: 5 },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', proficiency: 5 },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend', proficiency: 4 },
  { name: 'React', icon: 'react', category: 'frontend', proficiency: 4 },
  { name: 'Next.js', icon: 'nextjs', category: 'frontend', proficiency: 4 },
  { name: 'Vue.js', icon: 'vuejs', category: 'frontend', proficiency: 3 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', proficiency: 5 },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'backend', proficiency: 4 },
  { name: 'PHP', icon: 'php', category: 'backend', proficiency: 4 },
  { name: 'Python', icon: 'python', category: 'backend', proficiency: 3 },
  { name: 'Laravel', icon: 'laravel', category: 'backend', proficiency: 4 },
  { name: 'Flask', icon: 'flask', category: 'backend', proficiency: 3 },
  { name: 'NestJS', icon: 'nestjs', category: 'backend', proficiency: 3 },
  
  // Base de données
  { name: 'MySQL', icon: 'mysql', category: 'backend', proficiency: 4 },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend', proficiency: 3 },
  { name: 'SQLite', icon: 'sqlite', category: 'backend', proficiency: 4 },
  
  // Outils et autres
  { name: 'Git', icon: 'git', category: 'tools', proficiency: 4 },
  { name: 'Docker', icon: 'docker', category: 'tools', proficiency: 3 },
  { name: 'Figma', icon: 'figma', category: 'tools', proficiency: 3 },
  { name: 'VS Code', icon: 'vscode', category: 'tools', proficiency: 5 },
  { name: 'Tkinter', icon: 'python', category: 'other', proficiency: 3 },
  { name: 'Canva', icon: 'canva', category: 'other', proficiency: 5 },
  { name: 'Photoshop', icon: 'photoshop', category: 'other', proficiency: 3 },
  { name: 'Illustrator', icon: 'illustrator', category: 'other', proficiency: 4 }
];

// Fonction pour récupérer un projet par son slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // Simuler un délai de chargement pour démontrer l'animation
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const project = projects.find(p => p.id === slug);
  return project || null;
}

// Fonction pour récupérer tous les projets
export async function getAllProjects(): Promise<Project[]> {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return projects;
}

// Fonction pour récupérer les projets en vedette
export async function getFeaturedProjects(): Promise<Project[]> {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return projects.filter(project => project.featured);
}

// Fonction pour récupérer toutes les compétences
export async function getAllSkills(): Promise<Skill[]> {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return skills;
}

// Fonction pour récupérer les compétences par catégorie
export async function getSkillsByCategory(category: 'frontend' | 'backend' | 'tools' | 'other'): Promise<Skill[]> {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return skills.filter(skill => skill.category === category);
}