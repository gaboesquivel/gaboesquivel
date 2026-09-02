import { cvVariants } from './generated/cv'
import { experience } from './generated/experience'
import { projects } from './generated/projects'
import { techStack } from './generated/tech'
import type {
  CvExperience,
  CvKey,
  CvVariant,
  Tag,
  TechStackItem,
  TechStackItemWithProjects,
} from './generated/types'

export const cvKeys = ['full', 'ai', 'web3', 'fullstack'] as const

export type { CvExperience, CvKey, CvVariant } from './generated/types'
export { experience, cvVariants } from './generated'

export type TechCategory =
  | 'featured'
  | 'web3'
  | 'ai'
  | 'frontend'
  | 'backend'
  | 'cloud-devops'

const techCategories: Record<string, TechCategory[]> = {
  typescript: ['frontend', 'backend'],
  javascript: ['frontend', 'backend'],
  reactjs: ['frontend'],
  nextjs: ['frontend', 'backend'],
  nodejs: ['backend'],
  postgresql: ['backend'],
  graphql: ['frontend', 'backend'],
  blockchain: ['web3'],
  solidity: ['web3', 'backend'],
  foundry: ['web3', 'backend'],
  hardhat: ['web3', 'backend'],
  viem: ['web3', 'backend'],
  wagmi: ['web3', 'frontend', 'backend'],
  ethersjs: ['web3', 'backend'],
  ponder: ['web3', 'backend'],
  ethereum: ['web3', 'backend'],
  antelope: ['web3', 'backend'],
  nft: ['web3', 'backend'],
  alchemy: ['web3', 'backend'],
  'ai-sdk': ['ai', 'backend'],
  'artificial-intelligence': ['ai'],
  openai: ['ai', 'backend'],
  aws: ['cloud-devops'],
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
  gcloud: ['cloud-devops'],
  docker: ['cloud-devops'],
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
  if (category === 'all') return techStack
  if (category === 'featured')
    return techStack.filter((tech) => tech.featuredOrder !== undefined)
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
  console.log({ projects, tech: techStack, experience, cvVariants })
}

const selectEntries = ({ variant }: { variant: CvVariant }): CvExperience[] => {
  const { featured } = variant
  if (!featured) return experience

  return experience.flatMap((entry) => {
    const override = featured.find((role) => role.company === entry.company)
    return override ? [{ ...entry, ...override }] : []
  })
}

const isFocusKey = (
  value: string | undefined,
): value is Exclude<CvKey, 'full'> =>
  value === 'ai' || value === 'web3' || value === 'fullstack'

export const resolveCv = ({ focus }: { focus?: string | string[] }) => {
  const value = Array.isArray(focus) ? focus[0] : focus
  const key: CvKey = isFocusKey(value) ? value : 'full'
  const variant = cvVariants[key]

  return { key, variant, entries: selectEntries({ variant }) }
}
