import { Project, Skill } from '@/types';

// Projets
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Application de réservation ( En ligne )',
    description: 'Plateforme de réservation de tickets complète, conçue pour offrir une expérience fluide et moderne. Chaque ticket est accompagné d’un code QR unique, garantissant une sécurité et une praticité optimales. Dashboard administrateur puissant, qui permet une gestion intuitive des utilisateurs, des concerts et des artistes. Gérez facilement vos données avec des fonctionnalités de CRUD complètes (ajout, modification, suppression) pour les utilisateurs et les concerts. Notre interface est entièrement responsive, offrant une navigation optimale sur tous les appareils.',
    image: '/images/projects/ticket.png',
    videoUrl: '/videos/ticket.mp4',
    technologies: ['Handle Bare', 'Nest.js', 'TypeScript', 'Tailwind CSS'],
    // githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://myshowtime.onrender.com/',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Application Dashboard Admin (Pas encore en ligne)',
    description: "Un Dashboard Admin pour la gestion des utilisateurs (CRUD Users) avec authentification securisé (Connexion / Inscription)",
    image: '/images/projects/flask.png',
    videoUrl: '/videos/flask.mp4',
    technologies: ['Flask', 'Tailwind CSS', 'CSS', 'Python', 'Sqlite'],
    // githubUrl: 'https://github.com/username/portfolio',
    demoUrl: '/videos/flask.mp4',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Application de Film (Pas encore en ligne)',
    description: 'Une plateforme de visualisatioin de film via API avec Dashboard Admin (CRUD Films & Users) et Authentification Sécurisé (Connexion / Inscription)',
    image: '/images/projects/film.png',
    videoUrl: '/videos/film.mp4',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Rest'],
    // githubUrl: 'https://github.com/username/task-app',
    demoUrl: '/videos/film.mp4',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Application Blog (Pas encore en ligne)',
    description: 'Une plateforme de Blog (Reseau Social) avec partage de textes et medias par user. Commentaire intégré, Dashboard Admin, Authentification(Connexion / Inscription) ',
    image: '/images/projects/blog.png',
    videoUrl: '/videos/blog.mp4',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    // githubUrl: 'https://github.com/username/weather-app',
    demoUrl: '/videos/blog.mp4',
    featured: false
  },
  {
    id: 'project-5',
    title: 'Application E-commerce (Pas encore en ligne)',
    description: "Une plateforme e-commerce l'un de mes tous premiers projets d'intégration ",
    image: '/images/projects/ecommerce.png',
    // videoUrl: '/videos/ticket.mp4',
    technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'Mysql'],
    // githubUrl: 'https://github.com/username/blog-platform',
    demoUrl: '',
    featured: false
  },
  {
    id: 'project-6',
    title: 'Application mobile Clone Trello (Pas encore en ligne)',
    description: "Application Mobile pour la gestion et la repartition ordonnée des taches de Projet avec l'API de Trello ",
    image: '/images/projects/trello.png',
    videoUrl: '/videos/trello.mp4',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Expo'],
    // githubUrl: 'https://github.com/username/blog-platform',
    demoUrl: '/videos/trello.mp4',
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