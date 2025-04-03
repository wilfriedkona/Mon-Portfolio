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
    description: "Application Dashboard Admin\nUn tableau de bord administrateur sécurisé, conçu pour gérer les utilisateurs avec une authentification robuste. Cette application permet aux administrateurs de créer, lire, mettre à jour et supprimer (CRUD) des utilisateurs tout en assurant une gestion des rôles efficace.\n🔹 Technologies utilisées : Flask (backend), React (frontend), SQLite3 (base de données)\n mots de passe Haché avec bcrypt🔹 Sécurité : Authentification avec bcrypt, gestion des rôles\n🔹 Fonctionnalités principales :\n- Inscription et connexion sécurisées\n- Gestion des utilisateurs (CRUD)\n- Attribution et modification des rôles\n- Interface intuitive et moderne\n\nUn outil idéal pour l'administration et la gestion des accès utilisateurs. 🚀",
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
    description: "Une plateforme interactive de visualisation de films intégrant un Dashboard Admin puissant. Grâce à l'API Movie Database, les utilisateurs peuvent explorer une large sélection de films, tandis que les administrateurs disposent d'un panneau de contrôle avancé pour gérer les contenus et les utilisateurs.\n\n🔹 **Technologies utilisées** : Nest.js (backend), Handle Bars (frontend), MongoDB (base de données)\n🔹 **Authentification sécurisée** : Connexion et inscription protégées via bcrypt\n🔹 **Gestion complète** :\n   - 📽️ CRUD des films : Ajout, modification, suppression et affichage des films\n   - 👥 CRUD des utilisateurs : Gestion des comptes et des accès\n🔹 **Expérience fluide et moderne** : Interface intuitive et dynamique, optimisée pour une navigation rapide\n\nUn projet alliant performance et sécurité, idéal pour les passionnés de cinéma et les administrateurs exigeants ! 🎬🚀",
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
    description: "Une plateforme de blog interactive avec des fonctionnalités de réseau social, permettant aux utilisateurs de partager des textes et des médias en toute simplicité. Chaque publication peut être commentée, favorisant ainsi l'engagement et l'échange entre membres de la communauté.\n\n🔹 **Fonctionnalités clés** :\n   - 📝 Création et gestion de publications avec texte et médias\n   - 💬 Système de commentaires intégré\n   - 👤 Authentification sécurisée (inscription & connexion)\n   - 🎛️ Dashboard Admin pour la gestion des utilisateurs et du contenu\n\n🔹 **Technologies utilisées** : Laravel (backend), PHP, JavaScript, HTML, CSS\n\nUne plateforme moderne et évolutive, idéale pour partager du contenu et interagir avec une communauté dynamique ! 🚀",
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
    description: "Une plateforme e-commerce dynamique et fonctionnelle, conçue comme l'un de mes premiers projets d'intégration. Ce site permet aux utilisateurs de parcourir des produits, d'ajouter des articles à leur panier et de finaliser leurs achats en toute simplicité.\n\n🔹 **Fonctionnalités principales** :\n   - 🛍️ Affichage et gestion des produits\n   - 🛒 Panier interactif\n   - 🔐 Système d'authentification pour les utilisateurs\n   - 📦 Gestion des commandes\n\n🔹 **Technologies utilisées** : HTML, CSS, PHP, JavaScript, MySQL\n\nUn projet formateur, combinant les bases du développement web avec les principes fondamentaux d'un site e-commerce. 🚀",
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
    description: "Une application mobile innovante pour la gestion et la répartition ordonnée des tâches de projet, intégrant l'API Trello pour une synchronisation fluide avec vos espaces de travail. Cette application permet aux utilisateurs de créer, assigner et suivre les tâches en temps réel, tout en offrant une interface simple et efficace pour une gestion optimale des projets.\n\n🔹 **Fonctionnalités principales** :\n   - 🗂️ Gestion des tâches et projets via l'API Trello\n   - ✅ Assignation et suivi des tâches en temps réel\n   - 📱 Interface mobile fluide et responsive\n   - ⚙️ Répartition ordonnée des tâches et priorisation\n\n🔹 **Technologies utilisées** : React, Next.js, TypeScript, Tailwind CSS, Expo\n\nUne solution mobile idéale pour les équipes collaboratives, alliant productivité et flexibilité grâce à l'intégration de Trello. 🚀",
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