import { projects } from './projects';
import { techStack } from './tech';

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getTechStackByTag(tag: string) {
    return {
        ...techStack.find((tech) => tech.tag === tag), 
        projects: getProjectsByTechnology(tag)
    }
}

export function getProjectsByTechnology(tag: string) {
    return projects.filter((project) => project.technologies.includes(tag));
}

export function gaboLogData() {
    console.log({project: projects, tech: techStack});
}