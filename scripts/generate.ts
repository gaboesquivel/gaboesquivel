import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { glob } from 'fast-glob'
import { generateJSON } from './json-generator'
import { exportMarkdownFiles } from './markdown-exporter'
import {
  parseCvMarkdown,
  parseExperienceMarkdown,
  parseProjectMarkdown,
  parseTagsMarkdown,
  parseTechMarkdown,
} from './markdown-parser'
import { generateTagType } from './type-generator'
import {
  generateCvTypeScript,
  generateExperienceTypeScript,
  generateIndexTypeScript,
  generateProjectsTypeScript,
  generateTechTypeScript,
} from './typescript-generator'

const GENERATED_DIR = join(process.cwd(), 'src', 'generated')
const DIST_DIR = join(process.cwd(), 'dist')

function validateCvFeatured({
  experienceCompanies,
  cvVariants,
}: {
  experienceCompanies: Set<string>
  cvVariants: Array<{ data: { key: string; featured?: { company: string }[] } }>
}) {
  for (const cv of cvVariants) {
    if (!cv.data.featured) continue
    for (const role of cv.data.featured) {
      if (!experienceCompanies.has(role.company)) {
        throw new Error(
          `CV variant "${cv.data.key}": featured company "${role.company}" not found in experience`,
        )
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting markdown generation...')

  mkdirSync(GENERATED_DIR, { recursive: true })

  try {
    console.log('📖 Reading markdown files...')
    const projectFiles = await glob('content/projects/*.md')
    const techFiles = await glob('content/tech/*.md')
    const experienceFiles = await glob('content/experience/*.md')
    const cvFiles = await glob('content/cv/*.md')

    if (projectFiles.length === 0) {
      console.warn('⚠️  No project markdown files found. Run migration first.')
      return
    }

    if (techFiles.length === 0) {
      console.warn('⚠️  No tech markdown files found. Run migration first.')
      return
    }

    if (experienceFiles.length === 0) {
      console.warn('⚠️  No experience markdown files found.')
      return
    }

    if (cvFiles.length === 0) {
      console.warn('⚠️  No CV variant markdown files found.')
      return
    }

    console.log(`📝 Parsing ${projectFiles.length} project files...`)
    const projects = projectFiles.map(parseProjectMarkdown)

    console.log(`📝 Parsing ${techFiles.length} tech files...`)
    const tech = techFiles.map(parseTechMarkdown)

    console.log(`📝 Parsing ${experienceFiles.length} experience files...`)
    const experience = experienceFiles.map(parseExperienceMarkdown)

    console.log(`📝 Parsing ${cvFiles.length} CV variant files...`)
    const cvVariants = cvFiles.map(parseCvMarkdown)

    const experienceCompanies = new Set(
      experience.map((entry) => entry.data.company),
    )
    validateCvFeatured({ experienceCompanies, cvVariants })

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

    try {
      const tagsFromFile = parseTagsMarkdown('content/tags.md')
      for (const tag of tagsFromFile) {
        allTags.add(tag)
      }
    } catch {
      // tags.md doesn't exist yet, that's okay
    }

    const tags = Array.from(allTags).sort()

    console.log(`🏷️  Generating Tag type with ${tags.length} tags...`)
    generateTagType(tags, GENERATED_DIR)

    console.log('⚙️  Generating TypeScript files...')
    generateProjectsTypeScript(projects, GENERATED_DIR)
    generateTechTypeScript(tech, GENERATED_DIR)
    generateExperienceTypeScript(experience, GENERATED_DIR)
    generateCvTypeScript(cvVariants, GENERATED_DIR)
    generateIndexTypeScript(GENERATED_DIR)

    console.log('📦 Generating JSON exports...')
    mkdirSync(DIST_DIR, { recursive: true })
    generateJSON(projects, tech, experience, cvVariants, tags, DIST_DIR)

    console.log('📄 Exporting markdown files...')
    await exportMarkdownFiles(DIST_DIR)

    console.log('✅ Generation complete!')
    console.log(`   - Generated ${projects.length} projects`)
    console.log(`   - Generated ${tech.length} tech items`)
    console.log(`   - Generated ${experience.length} experience entries`)
    console.log(`   - Generated ${cvVariants.length} CV variants`)
    console.log(`   - Generated ${tags.length} tags`)
  } catch (error) {
    console.error('❌ Generation failed:', error)
    process.exit(1)
  }
}

main()
