import { projects } from "./projects";
import { techStack } from "./tech";
import type { Tag, TechStackItemWithProjects } from "./types";

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export function getTechStackByTag(tag: Tag): TechStackItemWithProjects | null {
	const tech = techStack.find((tech) => tech.tag === tag);
	if (!tech) return null;
	return {
		...tech,
		projects: getProjectsByTechnology(tag),
	};
}

export function getTechStackBySlug(
	slug: string,
): TechStackItemWithProjects | null {
	const tech = techStack.find((tech) => tech.slug === slug);
	if (!tech) return null;
	return {
		...tech,
		projects: getProjectsByTechnology(tech.tag),
	};
}

export function getProjectsByTechnology(tag: Tag) {
	return projects.filter((project) => project.tech.includes(tag));
}

export function getProjectsByTechnologySlug(slug: string) {
	const tech = techStack.find((tech) => tech.slug === slug);
	if (!tech) return [];
	return projects.filter((project) => project.tech.includes(tech.tag));
}

export function gaboLog() {
	console.log({ projects, tech: techStack });
}
