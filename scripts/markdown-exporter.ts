import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { glob } from 'fast-glob'

export async function exportMarkdownFiles(outputDir: string) {
  const contentDir = join(outputDir, 'content')
  const projectsDir = join(contentDir, 'projects')
  const techDir = join(contentDir, 'tech')

  // Create directories
  mkdirSync(projectsDir, { recursive: true })
  mkdirSync(techDir, { recursive: true })

  // Copy project markdown files
  const projectFiles = await glob('content/projects/*.md')
  for (const file of projectFiles) {
    const filename = file.split('/').pop()
    if (filename) {
      copyFileSync(file, join(projectsDir, filename))
    }
  }

  // Copy tech markdown files
  const techFiles = await glob('content/tech/*.md')
  for (const file of techFiles) {
    const filename = file.split('/').pop()
    if (filename) {
      copyFileSync(file, join(techDir, filename))
    }
  }

  // Copy tags.md
  const tagsFile = 'content/tags.md'
  try {
    copyFileSync(tagsFile, join(contentDir, 'tags.md'))
  } catch (error) {
    // tags.md might not exist yet, that's okay
  }
}
