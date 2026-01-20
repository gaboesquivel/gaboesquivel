import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { glob } from 'fast-glob'
import { generateJSON } from './json-generator'
import { exportMarkdownFiles } from './markdown-exporter'
import {
  parseProjectMarkdown,
  parseTagsMarkdown,
  parseTechMarkdown,
} from './markdown-parser'
import { generateTagType } from './type-generator'
import {
  generateIndexTypeScript,
  generateProjectsTypeScript,
  generateTechTypeScript,
} from './typescript-generator'

const GENERATED_DIR = join(process.cwd(), 'src', 'generated')
const DIST_DIR = join(process.cwd(), 'dist')

async function main() {
  console.log('🚀 Starting markdown generation...')

  // Ensure generated directory exists
  mkdirSync(GENERATED_DIR, { recursive: true })

  try {
    // 1. Read all markdown files
    console.log('📖 Reading markdown files...')
    const projectFiles = await glob('content/projects/*.md')
    const techFiles = await glob('content/tech/*.md')

    if (projectFiles.length === 0) {
      console.warn('⚠️  No project markdown files found. Run migration first.')
      return
    }

    if (techFiles.length === 0) {
      console.warn('⚠️  No tech markdown files found. Run migration first.')
      return
    }

    // 2. Parse markdown files
    console.log(`📝 Parsing ${projectFiles.length} project files...`)
    const projects = projectFiles.map(parseProjectMarkdown)

    console.log(`📝 Parsing ${techFiles.length} tech files...`)
    const tech = techFiles.map(parseTechMarkdown)

    // 3. Extract tags
    console.log('🏷️  Extracting tags...')
    const allTags = new Set<string>()
    for (const p of projects) {
      for (const tag of p.data.tech) {
        allTags.add(tag)
      }
    }
    for (const t of tech) {
      allTags.add(t.data.tag)
    }

    // Try to read tags from tags.md if it exists
    try {
      const tagsFromFile = parseTagsMarkdown('content/tags.md')
      for (const tag of tagsFromFile) {
        allTags.add(tag)
      }
    } catch {
      // tags.md doesn't exist yet, that's okay
    }

    const tags = Array.from(allTags).sort()

    // 4. Generate Tag type
    console.log(`🏷️  Generating Tag type with ${tags.length} tags...`)
    generateTagType(tags, GENERATED_DIR)

    // 5. Generate TypeScript files
    console.log('⚙️  Generating TypeScript files...')
    generateProjectsTypeScript(projects, GENERATED_DIR)
    generateTechTypeScript(tech, GENERATED_DIR)
    generateIndexTypeScript(GENERATED_DIR)

    // 6. Generate JSON exports
    console.log('📦 Generating JSON exports...')
    mkdirSync(DIST_DIR, { recursive: true })
    generateJSON(projects, tech, tags, DIST_DIR)

    // 7. Export markdown files
    console.log('📄 Exporting markdown files...')
    await exportMarkdownFiles(DIST_DIR)

    console.log('✅ Generation complete!')
    console.log(`   - Generated ${projects.length} projects`)
    console.log(`   - Generated ${tech.length} tech items`)
    console.log(`   - Generated ${tags.length} tags`)
  } catch (error) {
    console.error('❌ Generation failed:', error)
    process.exit(1)
  }
}

main()
