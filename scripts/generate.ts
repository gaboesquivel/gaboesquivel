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
import type { ExperienceData, ProjectData, TechStackItemData } from './schemas'
import { validateTechEvidence } from './tech-evidence'
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

const parseDurationStartYear = (duration: string) => {
  const match = duration.match(/\b(19|20)\d{2}\b/)
  return match ? Number.parseInt(match[0], 10) : null
}

const FEATURED_PROJECT_SLUGS = new Set([
  'legal-agent',
  'wink',
  'ztx',
  'bitlauncher',
  'opyn',
  'eos-costa-rica',
])

function validateProjects({
  projects,
  experienceCompanies,
  tags,
}: {
  projects: Array<{ data: ProjectData; markdownPath: string }>
  experienceCompanies: Set<string>
  tags: Set<string>
}) {
  for (const { data: project, markdownPath } of projects) {
    if (project.description.includes('\n'))
      throw new Error(
        `${markdownPath}: description must be a single line — found a newline`,
      )

    if (
      project.type.includes('featured') &&
      !FEATURED_PROJECT_SLUGS.has(project.slug)
    )
      throw new Error(
        `${markdownPath}: featured is limited to ${[...FEATURED_PROJECT_SLUGS].join(', ')}`,
      )

    if (project.link === '#' || project.link?.includes('example.com'))
      throw new Error(
        `${markdownPath}: invalid project link "${project.link}" — omit the field instead`,
      )

    if (
      project.experienceCompany &&
      !experienceCompanies.has(project.experienceCompany)
    )
      throw new Error(
        `${markdownPath}: experienceCompany "${project.experienceCompany}" not found in experience`,
      )

    for (const tag of project.tech) {
      if (!tags.has(tag))
        throw new Error(`${markdownPath}: unknown tech tag "${tag}"`)
    }
  }
}

function validateProjectDates({
  projects,
  experience,
}: {
  projects: Array<{ data: ProjectData; markdownPath: string }>
  experience: Array<{ data: ExperienceData }>
}) {
  const durationByCompany = new Map(
    experience.map((entry) => [entry.data.company, entry.data.duration]),
  )

  for (const { data: project, markdownPath } of projects) {
    if (!project.experienceCompany) continue
    const duration = durationByCompany.get(project.experienceCompany)
    if (!duration) continue
    const startYear = parseDurationStartYear(duration)
    if (startYear && project.year < startYear)
      console.warn(
        `⚠️  ${markdownPath}: year ${project.year} is before employment start (${duration})`,
      )
  }
}

function validateTech({
  tech,
  techCategorySlugs,
}: {
  tech: Array<{ data: TechStackItemData; markdownPath: string }>
  techCategorySlugs: Set<string>
}) {
  const featuredOrders = new Map<number, string>()

  for (const { data, markdownPath } of tech) {
    if (data.link.includes('wikipedia.org'))
      throw new Error(
        `${markdownPath}: official link must not be Wikipedia — use product or docs URL`,
      )

    if (data.link.includes('developer.mozilla.org/en-US/docs/Glossary'))
      throw new Error(
        `${markdownPath}: official link must not be MDN Glossary — use product or docs URL`,
      )

    if (data.featuredOrder !== undefined) {
      const existing = featuredOrders.get(data.featuredOrder)
      if (existing)
        throw new Error(
          `${markdownPath}: duplicate featuredOrder ${data.featuredOrder} (also used by ${existing})`,
        )
      featuredOrders.set(data.featuredOrder, markdownPath)
    }
  }

  for (const slug of techCategorySlugs) {
    if (!tech.some((entry) => entry.data.slug === slug))
      throw new Error(
        `techCategories key "${slug}" has no matching content/tech markdown file`,
      )
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

    validateProjects({ projects, experienceCompanies, tags: allTags })
    validateProjectDates({ projects, experience })

    const techCategorySlugs = new Set([
      'typescript',
      'javascript',
      'reactjs',
      'nextjs',
      'nodejs',
      'postgresql',
      'graphql',
      'blockchain',
      'solidity',
      'foundry',
      'hardhat',
      'viem',
      'wagmi',
      'ethersjs',
      'ponder',
      'ethereum',
      'antelope',
      'nft',
      'alchemy',
      'ai-sdk',
      'artificial-intelligence',
      'openai',
      'aws',
      'react-native',
      'tailwind',
      'shadcn',
      'webgl',
      'css',
      'angularjs',
      'bootstrap',
      'stitches',
      'redux',
      'zustand',
      'tanstack-query',
      'tanstack-form',
      'tanstack-start',
      'nuqs',
      'expo',
      'viroar',
      'less',
      'mootools',
      'data-charts',
      'supabase',
      'mongodb',
      'redis',
      'rails',
      'faye',
      'rxjs',
      'webauthn',
      'trigger',
      'zod',
      'serverless',
      'cpp',
      'biometrics',
      'stripe',
      'twilio',
      'niftory',
      'cms',
      'datocms',
      'wordpress',
      'gcloud',
      'docker',
      'terraform',
      'heroku',
    ])
    validateTech({ tech, techCategorySlugs })
    validateTechEvidence({ projects, tech })

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
