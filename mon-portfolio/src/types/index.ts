export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    videoUrl?: string; 
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured: boolean;
  }
  
  export interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'tools' | 'other';
    proficiency: number; // 1-5
  }