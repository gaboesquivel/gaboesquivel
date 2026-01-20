import { writeFileSync } from 'node:fs'
import { glob } from 'fast-glob'
import { parseProjectMarkdown, parseTechMarkdown } from './markdown-parser'

async function main() {
  const projectFiles = await glob('content/projects/*.md')
  const techFiles = await glob('content/tech/*.md')

  const allTags = new Set<string>()

  // Extract tags from projects
  for (const file of projectFiles) {
    const { data } = parseProjectMarkdown(file)
    for (const tag of data.tech) {
      allTags.add(tag)
    }
  }

  // Extract tags from tech
  for (const file of techFiles) {
    const { data } = parseTechMarkdown(file)
    allTags.add(data.tag)
  }

  const tags = Array.from(allTags).sort()

  const frontmatter = `---
tags:
${tags.map((tag) => `  - ${tag}`).join('\n')}
---

# Technology Tags

This file defines all valid tags used across projects and tech stack.
The tags array is used to generate the TypeScript \`Tag\` union type.
`

  writeFileSync('content/tags.md', frontmatter, 'utf-8')
  console.log(`✅ Created content/tags.md with ${tags.length} tags`)
}

main()
