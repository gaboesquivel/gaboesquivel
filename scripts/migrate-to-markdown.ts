import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { projects } from '../src/projects'
import { techStack } from '../src/tech'

function escapeYaml(str: string): string {
  return str.replace(/"/g, '\\"').replace(/\n/g, '\\n')
}

function formatYamlArray(arr: string[]): string {
  return arr.map((item) => `  - ${item}`).join('\n')
}

function formatYamlObjectArray(
  arr: Array<{ url: string; title: string; publishedAt: string }>,
): string {
  return arr
    .map(
      (item) =>
        `  - url: "${escapeYaml(item.url)}"\n    title: "${escapeYaml(item.title)}"\n    publishedAt: "${escapeYaml(item.publishedAt)}"`,
    )
    .join('\n')
}

// Migrate projects
console.log(`Migrating ${projects.length} projects to markdown...`)
for (const project of projects) {
  const frontmatter = `---
title: "${escapeYaml(project.title)}"
slug: "${escapeYaml(project.slug)}"
description: "${escapeYaml(project.description)}"
tech:
${formatYamlArray(project.tech)}
type:
${formatYamlArray(project.type)}
${project.link !== undefined && project.link !== '' ? `link: "${escapeYaml(project.link)}"` : 'link: ""'}
image: "${escapeYaml(project.image)}"
${project.repo !== undefined ? `repo: "${escapeYaml(project.repo)}"` : ''}
${project.video !== undefined ? `video: "${escapeYaml(project.video)}"` : ''}
${project.images && project.images.length > 0 ? `images:\n${formatYamlArray(project.images)}` : 'images: []'}
achievements:
${formatYamlArray(project.achievements)}
story:
${formatYamlArray(project.story)}
${project.related && project.related.length > 0 ? `related:\n${formatYamlObjectArray(project.related)}\n` : ''}order: ${project.order}
year: ${project.year}
---

# ${project.title}

${project.description}
`

  const filePath = join(
    process.cwd(),
    'content',
    'projects',
    `${project.slug}.md`,
  )
  writeFileSync(filePath, frontmatter, 'utf-8')
  console.log(`  ✓ ${project.slug}.md`)
}

// Migrate tech stack
console.log(`\nMigrating ${techStack.length} tech items to markdown...`)
for (const tech of techStack) {
  const frontmatter = `---
name: "${escapeYaml(tech.name)}"
slug: "${escapeYaml(tech.slug)}"
tag: "${escapeYaml(tech.tag)}"
image: "${escapeYaml(tech.image)}"
description: "${escapeYaml(tech.description)}"
link: "${escapeYaml(tech.link)}"
since: "${escapeYaml(tech.since)}"
intro:
${formatYamlArray(tech.intro)}
experience:
${formatYamlArray(tech.experience)}
---

# ${tech.name}

${tech.description}
`

  const filePath = join(process.cwd(), 'content', 'tech', `${tech.slug}.md`)
  writeFileSync(filePath, frontmatter, 'utf-8')
  console.log(`  ✓ ${tech.slug}.md`)
}

console.log('\n✅ Migration complete!')
