import { projects } from './projects';
import { techStack } from './tech';
import type { Tag, TechStackItemWithProjects } from './types';

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getTechStackByTag(tag: Tag): TechStackItemWithProjects | null {
    const tech = techStack.find((tech) => tech.tag === tag);
    if (!tech) return null
    return {
        ...tech, 
        projects: getProjectsByTechnology(tag)
    }
}

export function getProjectsByTechnology(tag: Tag) {
    return projects.filter((project) => project.tech.includes(tag));
}

export function gaboLog() {
    console.log({project: projects, tech: techStack});
}