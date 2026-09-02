import type { ProjectData, TechStackItemData } from './schemas'

const UMBRELLA_SLUGS = new Set(['blockchain', 'artificial-intelligence', 'cms'])

const UMBRELLA_CHILD_TAGS: Record<string, Set<string>> = {
  blockchain: new Set([
    'Blockchain',
    'Ethereum',
    'Solidity',
    'Antelope',
    'NFT',
    'Viem',
    'Wagmi',
    'Foundry',
    'Hardhat',
    'Ethers',
    'Ponder',
    'Alchemy',
    'NodeJS',
    'GraphQL',
    'Docker',
    'GCP',
    'PostgreSQL',
    'TypeScript',
    'ReactJS',
    'NextJS',
    'Tailwind',
    'C++',
    'WebAuthN',
    'Biometrics',
    'Supabase',
    'ShadcnUI',
    'TanStack Query',
    'Zod',
    'nuqs',
    'AWS',
    'Serverless',
    'Substrate',
    'Polkadot',
    'Flow',
    'Niftory',
    'OpenAI',
    'AI SDK',
  ]),
  'artificial-intelligence': new Set([
    'Artificial Intelligence',
    'AI SDK',
    'OpenAI',
    'TypeScript',
    'NextJS',
    'ReactJS',
    'React Native',
    'Expo',
    'Supabase',
    'PostgreSQL',
    'Tailwind',
    'TanStack Query',
    'TanStack Start',
    'Zod',
    'Trigger',
    'Niftory',
    'Flow',
  ]),
  cms: new Set(['CMS', 'Wordpress', 'DatoCMS', 'Bootstrap', 'CSS', 'PHP']),
}

type ProjectEntry = {
  data: ProjectData
  markdownPath: string
}

type TechEntry = {
  data: TechStackItemData
  markdownPath: string
}

type MatchName = { name: string; project: ProjectData }

const normalizeForMatch = (value: string) =>
  value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()

const buildProjectMatchers = (projects: ProjectEntry[]) => {
  const matchers: MatchName[] = []

  for (const { data: project } of projects) {
    matchers.push({ name: project.title, project })
    for (const alias of project.aliases ?? [])
      matchers.push({ name: alias, project })
  }

  return matchers.sort((a, b) => b.name.length - a.name.length)
}

const findProjectInBullet = ({
  bullet,
  matchers,
}: {
  bullet: string
  matchers: MatchName[]
}) => {
  const normalizedBullet = normalizeForMatch(bullet)

  for (const { name, project } of matchers)
    if (normalizedBullet.includes(normalizeForMatch(name))) return project

  return null
}

const projectTagsTech = ({
  project,
  tag,
  slug,
}: {
  project: ProjectData
  tag: string
  slug: string
}) => {
  if (project.tech.includes(tag)) return true

  if (!UMBRELLA_SLUGS.has(slug)) return false

  const childTags = UMBRELLA_CHILD_TAGS[slug]
  if (!childTags) return false

  return project.tech.some((t) => childTags.has(t))
}

const countProjectsWithTag = ({
  projects,
  tag,
}: {
  projects: ProjectEntry[]
  tag: string
}) => projects.filter(({ data }) => data.tech.includes(tag)).length

export const validateTechEvidence = ({
  projects,
  tech,
}: {
  projects: ProjectEntry[]
  tech: TechEntry[]
}) => {
  const matchers = buildProjectMatchers(projects)

  for (const { data, markdownPath } of tech) {
    const taggedCount = countProjectsWithTag({ projects, tag: data.tag })

    if (data.experience.length === 0 && taggedCount === 0)
      console.warn(
        `⚠️  ${markdownPath}: empty evidence (no experience bullets and no project tags "${data.tag}") — site will hide this tech`,
      )

    for (const bullet of data.experience) {
      const project = findProjectInBullet({ bullet, matchers })

      if (!project)
        throw new Error(
          `${markdownPath}: experience bullet names no matching project: "${bullet}"`,
        )

      if (!UMBRELLA_SLUGS.has(data.slug) && !project.tech.includes(data.tag))
        throw new Error(
          `${markdownPath}: project "${project.title}" does not tag "${data.tag}" — bullet: "${bullet}"`,
        )

      if (
        UMBRELLA_SLUGS.has(data.slug) &&
        !projectTagsTech({ project, tag: data.tag, slug: data.slug })
      )
        throw new Error(
          `${markdownPath}: umbrella page cites "${project.title}" without a related tag — bullet: "${bullet}"`,
        )
    }
  }
}
