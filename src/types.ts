// Define the interface for a project
export interface Project {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    tags: string[];
    link?: string;
    image: string;
    repo?: string;
    video?: string;
    images?: string[];
    achievements: string[];
    story: string[];
}

// Define the interface for a tech stack item
export interface TechStackItem {
    name: string;
    icon: string;
    tag: string;
    image: string;
    description: string;
    link: string;
    since: string;
    intro: string[];
    experience: string[];
}

export interface TechStackItemWithProjects extends TechStackItem {
    projects: Project[];
}