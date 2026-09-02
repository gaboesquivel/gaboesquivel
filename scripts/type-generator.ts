import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

export function generateTagType(tags: string[], outputDir: string) {
  const tagUnion = tags.map((tag) => `  | '${tag}'`).join('\n')

  const typesContent = `// Generated types - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

export type Tag =
${tagUnion}

export interface Project {
  title: string
  slug: string
  description: string
  role?: string
  tech: Tag[]
  type: string[]
  link?: string
  image: string
  repo?: string
  video?: string
  images?: string[]
  achievements: string[]
  story: string[]
  related?: { url: string; title: string; publishedAt: string }[]
  experienceCompany?: string
  aliases?: string[]
  order: number
  year: number
  markdown: string
  markdownPath: string
}

export interface TechStackItem {
  name: string
  slug: string
  tag: Tag
  image: string
  description: string
  link: string
  since: string
  experience: string[]
  featuredOrder?: number
  aliases?: string[]
}

export interface TechStackItemWithProjects extends TechStackItem {
  projects: Project[]
}

export type CvLocation = 'Remote' | 'Hybrid' | 'On-site'
export type CvEmploymentType = 'Full-time' | 'Part-time' | 'Contract'

export interface CvExperience {
  company: string
  title: string
  location: CvLocation
  type: CvEmploymentType
  duration: string
  description: string
  achievements: string[]
  techStack: string[]
  order: number
}

export interface CvSkill {
  label: string
  keywords: string
}

export interface CvFeatured {
  company: string
  description?: string
  achievements?: string[]
}

export interface CvMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph: {
    title: string
    description: string
  }
}

export type CvKey = 'full' | 'ai' | 'web3' | 'fullstack'

export interface CvVariant {
  professionalTitle: string
  summary: string
  highlights: string[]
  skills: CvSkill[]
  featured?: CvFeatured[]
  also?: string
  metadata: CvMetadata
}
`

  writeFileSync(join(outputDir, 'types.ts'), typesContent, 'utf-8')
}
