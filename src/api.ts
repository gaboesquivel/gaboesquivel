import { cvVariants } from "./generated/cv";
import { experience } from "./generated/experience";
import { projects } from "./generated/projects";
import { techStack } from "./generated/tech";
import type {
  CvExperience,
  CvKey,
  CvVariant,
  Tag,
  TechStackItem,
  TechStackItemWithProjects,
} from "./generated/types";

export const cvKeys = ["full", "ai", "web3", "fullstack"] as const;

export type { CvExperience, CvKey, CvVariant } from "./generated/types";
export { experience, cvVariants } from "./generated";

export type TechCategory =
  | "featured"
  | "web3"
  | "ai"
  | "frontend"
  | "backend"
  | "cloud-devops";

const techCategories: Record<string, TechCategory[]> = {
  "ai-sdk": ["ai", "backend"],
  alchemy: ["web3", "backend"],
  angularjs: ["frontend"],
  antelope: ["web3", "backend"],
  "artificial-intelligence": ["ai"],
  aws: ["cloud-devops"],
  biometrics: ["backend"],
  blockchain: ["web3"],
  bootstrap: ["frontend"],
  cms: ["backend"],
  cpp: ["backend"],
  css: ["frontend"],
  "data-charts": ["frontend"],
  datocms: ["backend"],
  docker: ["cloud-devops"],
  ethereum: ["web3", "backend"],
  ethersjs: ["web3", "backend"],
  expo: ["frontend"],
  faye: ["backend"],
  foundry: ["web3", "backend"],
  gcloud: ["cloud-devops"],
  graphql: ["frontend", "backend"],
  hardhat: ["web3", "backend"],
  heroku: ["cloud-devops"],
  javascript: ["frontend", "backend"],
  less: ["frontend"],
  mongodb: ["backend"],
  mootools: ["frontend"],
  nextjs: ["frontend", "backend"],
  nft: ["web3", "backend"],
  niftory: ["backend"],
  nodejs: ["backend"],
  nuqs: ["frontend"],
  openai: ["ai", "backend"],
  ponder: ["web3", "backend"],
  postgresql: ["backend"],
  rails: ["backend"],
  "react-native": ["frontend"],
  reactjs: ["frontend"],
  redis: ["backend"],
  redux: ["frontend"],
  rxjs: ["backend"],
  serverless: ["backend", "cloud-devops"],
  shadcn: ["frontend"],
  solidity: ["web3", "backend"],
  stitches: ["frontend"],
  stripe: ["backend"],
  supabase: ["backend"],
  tailwind: ["frontend"],
  "tanstack-form": ["frontend"],
  "tanstack-query": ["frontend", "backend"],
  "tanstack-start": ["frontend", "backend"],
  terraform: ["cloud-devops"],
  trigger: ["backend"],
  twilio: ["backend"],
  typescript: ["frontend", "backend"],
  viem: ["web3", "backend"],
  viroar: ["frontend"],
  wagmi: ["web3", "frontend", "backend"],
  webauthn: ["backend"],
  webgl: ["frontend"],
  wordpress: ["backend"],
  zod: ["backend"],
  zustand: ["frontend"],
};

export function getTechCategories(tech: TechStackItem): TechCategory[] {
  return techCategories[tech.slug] || [];
}

export function filterTechByCategory(
  techStack: TechStackItem[],
  category: string
): TechStackItem[] {
  if (category === "all") {
    return techStack;
  }
  if (category === "featured") {
    return techStack.filter((tech) => tech.featuredOrder !== undefined);
  }
  return techStack.filter((tech) => {
    const categories = getTechCategories(tech);
    return categories.includes(category as TechCategory);
  });
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getTechStackByTag(tag: Tag): TechStackItemWithProjects | null {
  const tech = techStack.find((tech) => tech.tag === tag);
  if (!tech) {
    return null;
  }
  return {
    ...tech,
    projects: getProjectsByTechnology(tag),
  };
}

export function getTechStackBySlug(
  slug: string
): TechStackItemWithProjects | null {
  const tech = techStack.find((tech) => tech.slug === slug);
  if (!tech) {
    return null;
  }
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
  if (!tech) {
    return [];
  }
  return projects.filter((project) => project.tech.includes(tech.tag));
}

export function gaboLog() {
  console.log({ cvVariants, experience, projects, tech: techStack });
}

const selectEntries = ({ variant }: { variant: CvVariant }): CvExperience[] => {
  const { featured } = variant;
  if (!featured) {
    return experience;
  }

  return experience.flatMap((entry) => {
    const override = featured.find((role) => role.company === entry.company);
    return override ? [{ ...entry, ...override }] : [];
  });
};

const isFocusKey = (
  value: string | undefined
): value is Exclude<CvKey, "full"> =>
  value === "ai" || value === "web3" || value === "fullstack";

export const resolveCv = ({ focus }: { focus?: string | string[] }) => {
  const value = Array.isArray(focus) ? focus[0] : focus;
  const key: CvKey = isFocusKey(value) ? value : "full";
  const variant = cvVariants[key];

  return { entries: selectEntries({ variant }), key, variant };
};
