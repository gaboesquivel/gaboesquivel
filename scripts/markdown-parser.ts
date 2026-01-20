import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import type { ProjectData, TechStackItemData } from './schemas'
import { ProjectSchema, TechStackItemSchema } from './schemas'

export function parseProjectMarkdown(filePath: string): {
  data: ProjectData
  markdown: string
  markdownPath: string
} {
  const rawContent = readFileSync(filePath, 'utf-8')
  const { data, content: body } = matter(rawContent)
  const parsed = ProjectSchema.parse(data)

  // Extract slug from filename if not in frontmatter
  const slug =
    parsed.slug || filePath.split('/').pop()?.replace('.md', '') || ''

  return {
    data: {
      ...parsed,
      slug,
    },
    markdown: rawContent,
    markdownPath: `content/projects/${slug}.md`,
  }
}

export function parseTechMarkdown(filePath: string): {
  data: TechStackItemData
  markdown: string
  markdownPath: string
} {
  const rawContent = readFileSync(filePath, 'utf-8')
  const { data, content: body } = matter(rawContent)
  const parsed = TechStackItemSchema.parse(data)

  // Extract slug from filename if not in frontmatter
  const slug =
    parsed.slug || filePath.split('/').pop()?.replace('.md', '') || ''

  return {
    data: {
      ...parsed,
      slug,
    },
    markdown: rawContent,
    markdownPath: `content/tech/${slug}.md`,
  }
}

export function parseTagsMarkdown(filePath: string): string[] {
  const rawContent = readFileSync(filePath, 'utf-8')
  const { data } = matter(rawContent)

  if (data.tags && Array.isArray(data.tags)) {
    return data.tags
  }

  return []
}
