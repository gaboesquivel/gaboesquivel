interface Project {
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
interface TechStackItem {
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

declare const projects: Project[];

declare const techStack: TechStackItem[];

export { projects, techStack };
