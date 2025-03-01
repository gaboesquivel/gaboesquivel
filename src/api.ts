import { projects } from './projects';
import { techStack } from './tech';
import type { TechStackItemWithProjects } from './types';

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getTechStackByTag(tag: string): TechStackItemWithProjects | null {
    const tech = techStack.find((tech) => tech.tag === tag);
    if (!tech) return null
    return {
        ...tech, 
        projects: getProjectsByTechnology(tag)
    }
}

export function getProjectsByTechnology(tag: string) {
    return projects.filter((project) => project.technologies.includes(tag));
}

export function gaboLog() {
    console.log({project: projects, tech: techStack});
}