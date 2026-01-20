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
  intro: string[]
  experience: string[]
  featuredOrder?: number
}

export interface TechStackItemWithProjects extends TechStackItem {
  projects: Project[]
}
`

  writeFileSync(join(outputDir, 'types.ts'), typesContent, 'utf-8')
}
