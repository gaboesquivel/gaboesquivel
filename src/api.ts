import { projects } from './generated/projects'
import { techStack } from './generated/tech'
import type {
  Tag,
  TechStackItem,
  TechStackItemWithProjects,
} from './generated/types'

export type TechCategory =
  | 'featured'
  | 'web3'
  | 'ai'
  | 'frontend'
  | 'backend'
  | 'cloud-devops'

const techCategories: Record<string, TechCategory[]> = {
  typescript: ['featured', 'frontend', 'backend'],
  javascript: ['featured', 'frontend', 'backend'],
  reactjs: ['featured', 'frontend'],
  nextjs: ['featured', 'frontend', 'backend'],
  nodejs: ['featured', 'backend'],
  postgresql: ['featured', 'backend'],
  graphql: ['featured', 'frontend', 'backend'],
  evm: ['featured', 'web3', 'backend'],
  solidity: ['featured', 'web3', 'backend'],
  foundry: ['featured', 'web3', 'backend'],
  hardhat: ['featured', 'web3', 'backend'],
  viem: ['featured', 'web3', 'backend'],
  wagmi: ['featured', 'web3', 'frontend', 'backend'],
  ethersjs: ['featured', 'web3', 'backend'],
  ponder: ['featured', 'web3', 'backend'],
  ethereum: ['featured', 'web3', 'backend'],
  eos: ['web3', 'backend'],
  antelope: ['featured', 'web3', 'backend'],
  flow: ['web3', 'backend'],
  polkadot: ['web3', 'backend'],
  substrate: ['web3', 'backend'],
  nft: ['featured', 'web3', 'backend'],
  thirdweb: ['web3', 'backend'],
  alchemy: ['featured', 'web3', 'backend'],
  'ai-sdk': ['featured', 'ai', 'backend'],
  llms: ['ai', 'backend'],
  openai: ['featured', 'ai', 'backend'],
  dalle: ['ai', 'backend'],
  aws: ['featured', 'cloud-devops'],
  'react-native': ['frontend'],
  tailwind: ['frontend'],
  shadcn: ['frontend'],
  webgl: ['frontend'],
  css: ['frontend'],
  angularjs: ['frontend'],
  bootstrap: ['frontend'],
  stitches: ['frontend'],
  redux: ['frontend'],
  zustand: ['frontend'],
  'tanstack-query': ['frontend', 'backend'],
  'tanstack-form': ['frontend'],
  'tanstack-start': ['frontend', 'backend'],
  nuqs: ['frontend'],
  expo: ['frontend'],
  viroar: ['frontend'],
  less: ['frontend'],
  mootools: ['frontend'],
  'data-charts': ['frontend'],
  supabase: ['backend'],
  mongodb: ['backend'],
  redis: ['backend'],
  rails: ['backend'],
  faye: ['backend'],
  rxjs: ['backend'],
  webauthn: ['backend'],
  trigger: ['backend'],
  zod: ['backend'],
  serverless: ['backend', 'cloud-devops'],
  cpp: ['backend'],
  biometrics: ['backend'],
  stripe: ['backend'],
  twilio: ['backend'],
  niftory: ['backend'],
  cms: ['backend'],
  datocms: ['backend'],
  wordpress: ['backend'],
  gcloud: ['featured', 'cloud-devops'],
  docker: ['featured', 'cloud-devops'],
  terraform: ['cloud-devops'],
  heroku: ['cloud-devops'],
}

export function getTechCategories(tech: TechStackItem): TechCategory[] {
  return techCategories[tech.slug] || []
}

export function filterTechByCategory(
  techStack: TechStackItem[],
  category: string,
): TechStackItem[] {
  if (category === 'all') {
    return techStack
  }
  return techStack.filter((tech) => {
    const categories = getTechCategories(tech)
    return categories.includes(category as TechCategory)
  })
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getTechStackByTag(tag: Tag): TechStackItemWithProjects | null {
  const tech = techStack.find((tech) => tech.tag === tag)
  if (!tech) return null
  return {
    ...tech,
    projects: getProjectsByTechnology(tag),
  }
}

export function getTechStackBySlug(
  slug: string,
): TechStackItemWithProjects | null {
  const tech = techStack.find((tech) => tech.slug === slug)
  if (!tech) return null
  return {
    ...tech,
    projects: getProjectsByTechnology(tech.tag),
  }
}

export function getProjectsByTechnology(tag: Tag) {
  return projects.filter((project) => project.tech.includes(tag))
}

export function getProjectsByTechnologySlug(slug: string) {
  const tech = techStack.find((tech) => tech.slug === slug)
  if (!tech) return []
  return projects.filter((project) => project.tech.includes(tech.tag))
}

export function gaboLog() {
  console.log({ projects, tech: techStack })
}
