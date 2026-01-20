import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ProjectData, TechStackItemData } from './schemas'

export function generateJSON(
  projects: Array<{
    data: ProjectData
    markdown: string
    markdownPath: string
  }>,
  tech: Array<{
    data: TechStackItemData
    markdown: string
    markdownPath: string
  }>,
  tags: string[],
  outputDir: string,
) {
  // Ensure dist directory exists
  mkdirSync(outputDir, { recursive: true })

  // Generate projects.json (without markdown fields for JSON)
  const projectsData = projects.map((p) => p.data)
  writeFileSync(
    join(outputDir, 'projects.json'),
    JSON.stringify(projectsData, null, 2),
    'utf-8',
  )

  // Generate tech.json (without markdown fields for JSON)
  const techData = tech.map((t) => t.data)
  writeFileSync(
    join(outputDir, 'tech.json'),
    JSON.stringify(techData, null, 2),
    'utf-8',
  )

  // Generate tags.json
  writeFileSync(
    join(outputDir, 'tags.json'),
    JSON.stringify(tags, null, 2),
    'utf-8',
  )
}
