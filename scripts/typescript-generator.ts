import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type {
  CvVariantData,
  ExperienceData,
  ProjectData,
  TechStackItemData,
} from './schemas'

function escapeString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
    .replace(/\r\n/g, '\\n')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\n')
}

function formatArray(arr: string[]): string {
  if (arr.length === 0) return '[]'
  return `[\n${arr.map((item) => `    ${JSON.stringify(item)}`).join(',\n')}\n  ]`
}

function formatOptionalArray(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return '[]'
  return formatArray(arr)
}

function formatRelated(
  related:
    | Array<{ url: string; title: string; publishedAt: string }>
    | undefined,
): string {
  if (!related || related.length === 0) return 'undefined'
  return `[\n${related
    .map(
      (item) =>
        `    {\n      url: ${JSON.stringify(item.url)},\n      title: ${JSON.stringify(item.title)},\n      publishedAt: ${JSON.stringify(item.publishedAt)}\n    }`,
    )
    .join(',\n')}\n  ]`
}

function formatProject(
  project: ProjectData & { markdown: string; markdownPath: string },
): string {
  return `  {
    title: ${JSON.stringify(project.title)},
    slug: ${JSON.stringify(project.slug)},
    description: ${JSON.stringify(project.description)},
    ${project.role !== undefined ? `role: ${JSON.stringify(project.role)},` : ''}
    tech: ${formatArray(project.tech)},
    type: ${formatArray(project.type)},
    ${project.link !== undefined ? `link: ${JSON.stringify(project.link)},` : ''}
    image: ${JSON.stringify(project.image)},
    ${project.repo !== undefined ? `repo: ${JSON.stringify(project.repo)},` : ''}
    ${project.video !== undefined ? `video: ${JSON.stringify(project.video)},` : ''}
    ${project.images ? `images: ${formatOptionalArray(project.images)},` : ''}
    achievements: ${formatArray(project.achievements)},
    story: ${formatArray(project.story)},
    ${project.related ? `related: ${formatRelated(project.related)},` : ''}
    ${project.experienceCompany ? `experienceCompany: ${JSON.stringify(project.experienceCompany)},` : ''}
    ${project.aliases?.length ? `aliases: ${formatArray(project.aliases)},` : ''}
    order: ${project.order},
    year: ${project.year},
    markdown: ${JSON.stringify(project.markdown)},
    markdownPath: ${JSON.stringify(project.markdownPath)}
  }`
}

function formatSkills(
  skills: Array<{ label: string; keywords: string }>,
): string {
  return `[\n${skills
    .map(
      (skill) =>
        `    {\n      label: ${JSON.stringify(skill.label)},\n      keywords: ${JSON.stringify(skill.keywords)}\n    }`,
    )
    .join(',\n')}\n  ]`
}

function formatFeatured(
  featured:
    | Array<{
        company: string
        description?: string
        achievements?: string[]
      }>
    | undefined,
): string {
  if (!featured || featured.length === 0) return 'undefined'
  return `[\n${featured
    .map((item) => {
      const parts = [`company: ${JSON.stringify(item.company)}`]
      if (item.description)
        parts.push(`description: ${JSON.stringify(item.description)}`)
      if (item.achievements)
        parts.push(`achievements: ${formatArray(item.achievements)}`)
      return `    {\n      ${parts.join(',\n      ')}\n    }`
    })
    .join(',\n')}\n  ]`
}

function formatMetadata(metadata: CvVariantData['metadata']): string {
  const keywords =
    metadata.keywords && metadata.keywords.length > 0
      ? `keywords: ${formatArray(metadata.keywords)},\n    `
      : ''
  return `{
    title: ${JSON.stringify(metadata.title)},
    description: ${JSON.stringify(metadata.description)},
    ${keywords}openGraph: {
      title: ${JSON.stringify(metadata.openGraph.title)},
      description: ${JSON.stringify(metadata.openGraph.description)}
    }
  }`
}

function formatExperience(entry: ExperienceData): string {
  return `  {
    company: ${JSON.stringify(entry.company)},
    title: ${JSON.stringify(entry.title)},
    location: ${JSON.stringify(entry.location)},
    type: ${JSON.stringify(entry.type)},
    duration: ${JSON.stringify(entry.duration)},
    description: ${JSON.stringify(entry.description)},
    achievements: ${formatArray(entry.achievements)},
    techStack: ${formatArray(entry.techStack)},
    order: ${entry.order}
  }`
}

function formatCvVariant(variant: CvVariantData): string {
  const featured = variant.featured
    ? `featured: ${formatFeatured(variant.featured)},\n    `
    : ''
  const also = variant.also
    ? `also: ${JSON.stringify(variant.also)},\n    `
    : ''
  return `  {
    professionalTitle: ${JSON.stringify(variant.professionalTitle)},
    summary: ${JSON.stringify(variant.summary)},
    highlights: ${formatArray(variant.highlights)},
    skills: ${formatSkills(variant.skills)},
    ${featured}${also}metadata: ${formatMetadata(variant.metadata)}
  }`
}

function formatTech(tech: TechStackItemData): string {
  return `  {
    name: ${JSON.stringify(tech.name)},
    slug: ${JSON.stringify(tech.slug)},
    tag: ${JSON.stringify(tech.tag)} as Tag,
    image: ${JSON.stringify(tech.image)},
    description: ${JSON.stringify(tech.description)},
    link: ${JSON.stringify(tech.link)},
    since: ${JSON.stringify(tech.since)},
    experience: ${formatArray(tech.experience)}${tech.featuredOrder !== undefined ? `,\n    featuredOrder: ${tech.featuredOrder}` : ''}
  }`
}

export function generateProjectsTypeScript(
  projects: Array<{
    data: ProjectData
    markdown: string
    markdownPath: string
  }>,
  outputDir: string,
) {
  const projectsWithMarkdown = projects.map((p) => ({
    ...p.data,
    markdown: p.markdown,
    markdownPath: p.markdownPath,
  }))

  const content = `// Generated file - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

import type { Project } from './types'

export const projects: Project[] = [
${projectsWithMarkdown.map(formatProject).join(',\n')}
]
`

  writeFileSync(join(outputDir, 'projects.ts'), content, 'utf-8')
}

export function generateTechTypeScript(
  tech: Array<{
    data: TechStackItemData
    markdown: string
    markdownPath: string
  }>,
  outputDir: string,
) {
  const content = `// Generated file - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

import type { TechStackItem, Tag } from './types'

export const techStack: TechStackItem[] = [
${tech.map((t) => formatTech(t.data)).join(',\n')}
]
`

  writeFileSync(join(outputDir, 'tech.ts'), content, 'utf-8')
}

export function generateExperienceTypeScript(
  experience: Array<{
    data: ExperienceData
    markdown: string
    markdownPath: string
  }>,
  outputDir: string,
) {
  const sorted = [...experience].sort((a, b) => a.data.order - b.data.order)
  const content = `// Generated file - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

import type { CvExperience } from './types'

export const experience: CvExperience[] = [
${sorted.map((e) => formatExperience(e.data)).join(',\n')}
]
`

  writeFileSync(join(outputDir, 'experience.ts'), content, 'utf-8')
}

export function generateCvTypeScript(
  cvVariants: Array<{
    data: CvVariantData
    markdown: string
    markdownPath: string
  }>,
  outputDir: string,
) {
  const byKey = Object.fromEntries(
    cvVariants.map((cv) => [cv.data.key, cv.data]),
  ) as Record<CvVariantData['key'], CvVariantData>

  const content = `// Generated file - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

import type { CvKey, CvVariant } from './types'

export const cvVariants: Record<CvKey, CvVariant> = {
  full: ${formatCvVariant(byKey.full)},
  ai: ${formatCvVariant(byKey.ai)},
  web3: ${formatCvVariant(byKey.web3)},
  fullstack: ${formatCvVariant(byKey.fullstack)}
}
`

  writeFileSync(join(outputDir, 'cv.ts'), content, 'utf-8')
}

export function generateIndexTypeScript(outputDir: string) {
  const content = `// Generated file - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

export * from './types'
export * from './projects'
export * from './tech'
export * from './experience'
export * from './cv'
`

  writeFileSync(join(outputDir, 'index.ts'), content, 'utf-8')
}
