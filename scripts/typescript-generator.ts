import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ProjectData, TechStackItemData } from './schemas'

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
    order: ${project.order},
    year: ${project.year},
    markdown: ${JSON.stringify(project.markdown)},
    markdownPath: ${JSON.stringify(project.markdownPath)}
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
    intro: ${formatArray(tech.intro)},
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

export function generateIndexTypeScript(outputDir: string) {
  const content = `// Generated file - DO NOT EDIT MANUALLY
// This file is auto-generated from markdown files

export * from './types'
export * from './projects'
export * from './tech'
`

  writeFileSync(join(outputDir, 'index.ts'), content, 'utf-8')
}
