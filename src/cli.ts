#!/usr/bin/env node

import chalk from 'chalk'
import prompts from 'prompts'
import * as api from './api'
import * as projects from './projects'
import * as tech from './tech'
import type { Project } from './types'

declare const process: {
  argv: string[]
  exit: (code?: number) => void
  stdin: {
    setRawMode: (mode: boolean) => void
    resume: () => void
    pause: () => void
  }
}

const COLORS = {
  title: chalk.bold.cyan,
  subtitle: chalk.bold.yellow,
  highlight: chalk.bold.green,
  info: chalk.blue,
  link: chalk.underline.blue,
  dim: chalk.dim,
  success: chalk.green,
  warning: chalk.yellow,
  error: chalk.red,
}

function displayBanner() {
  console.log(
    COLORS.title(`
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║          ${chalk.bold.yellow('Gabo Esquivel')} - ${chalk.bold.cyan('Software Engineer')}          ║
║                                                                   ║
║  ${COLORS.success('Full-stack engineer')} with ${COLORS.highlight('15+ years')} of experience              ║
║  ${COLORS.success('Web3 specialist')} since ${COLORS.highlight('2017')}                                    ║
║  ${COLORS.success('Node.js expert')} with ${COLORS.highlight('10+ years')}                                ║
║  ${COLORS.success('React & TypeScript')} advanced expertise                    ║
║  ${COLORS.success('Currently exploring AI')}                                   ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
`),
  )
}

function displayLinks() {
  console.log(`\n${COLORS.subtitle('🔗 Links:')}`)
  console.log(
    `  ${COLORS.info('Website:')} ${COLORS.link('https://gaboesquivel.com')}`,
  )
  console.log(
    `  ${COLORS.info('GitHub:')} ${COLORS.link('https://github.com/gaboesquivel')}`,
  )
  console.log(
    `  ${COLORS.info('Twitter:')} ${COLORS.link('https://twitter.com/gaboesquivel')}`,
  )
  console.log(
    `  ${COLORS.info('Calendar:')} ${COLORS.link('https://cal.com/gaboesquivel')}`,
  )
}

function formatProjectCard(project: Project, index?: number) {
  const prefix = index !== undefined ? `${COLORS.dim(`${index + 1}.`)} ` : ''
  const types = project.type?.length
    ? ` ${COLORS.dim('[')}${project.type
        .slice(0, 3)
        .map((t) => COLORS.warning(t))
        .join(COLORS.dim(', '))}${COLORS.dim(']')}`
    : ''

  return `${prefix}${COLORS.title(project.title)}${types}`
}

function displayProjectSummary(project: Project) {
  console.log(
    `\n${COLORS.title('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')}`,
  )
  console.log(`\n${COLORS.title('📦')} ${COLORS.title(project.title)}`)
  console.log(`\n${COLORS.subtitle('Description:')}`)
  console.log(`  ${project.description}`)

  if (project.tech && project.tech.length > 0) {
    console.log(`\n${COLORS.subtitle('Tech Stack:')}`)
    const techDisplay = project.tech
      .slice(0, 8)
      .map((t) => COLORS.highlight(t))
      .join(COLORS.dim(', '))
    const moreTech =
      project.tech.length > 8
        ? COLORS.dim(` +${project.tech.length - 8} more`)
        : ''
    console.log(`  ${techDisplay}${moreTech}`)
  }

  if (project.type && project.type.length > 0) {
    console.log(`\n${COLORS.subtitle('Type:')}`)
    console.log(
      `  ${project.type.map((t) => COLORS.warning(`• ${t}`)).join(' ')}`,
    )
  }

  if (project.achievements && project.achievements.length > 0) {
    console.log(`\n${COLORS.subtitle('Key Achievements:')}`)
    for (const achievement of project.achievements.slice(0, 3)) {
      console.log(`  ${COLORS.success('✓')} ${achievement}`)
    }
    if (project.achievements.length > 3) {
      console.log(
        `  ${COLORS.dim(`... and ${project.achievements.length - 3} more`)}`,
      )
    }
  }

  if (project.story && project.story.length > 0) {
    console.log(`\n${COLORS.subtitle('Story:')}`)
    for (const paragraph of project.story) {
      console.log(`  ${paragraph}\n`)
    }
  }

  const portfolioLink = `https://gaboesquivel.com/project/${project.slug}`
  console.log(`\n${COLORS.subtitle('Portfolio Link:')}`)
  console.log(`  ${COLORS.link(portfolioLink)}`)

  if (project.link) {
    console.log(`\n${COLORS.subtitle('Project Link:')}`)
    console.log(`  ${COLORS.link(project.link)}`)
  }

  if (project.repo) {
    console.log(`\n${COLORS.subtitle('Repository:')}`)
    console.log(`  ${COLORS.link(project.repo)}`)
  }

  console.log(
    `\n${COLORS.title('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')}`,
  )
}

function displayProjectList(projectList: Project[] = projects.projects) {
  console.log(`\n${COLORS.subtitle(`📋 Projects (${projectList.length}):`)}\n`)

  for (let index = 0; index < projectList.length; index++) {
    const project = projectList[index]
    console.log(formatProjectCard(project, index))
    const desc =
      project.description.length > 80
        ? `${project.description.substring(0, 80)}...`
        : project.description
    console.log(`   ${COLORS.dim(desc)}\n`)
  }
}

function displayTechSummary(techItem: (typeof tech.techStack)[0]) {
  console.log(
    `\n${COLORS.title('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')}`,
  )
  console.log(
    `\n${COLORS.title('⚡')} ${COLORS.title(techItem.name)} ${COLORS.warning(`(since ${techItem.since})`)}`,
  )
  console.log(`\n${COLORS.subtitle('Description:')}`)
  console.log(`  ${techItem.description}`)

  if (techItem.experience && techItem.experience.length > 0) {
    console.log(`\n${COLORS.subtitle('Experience Highlights:')}`)
    for (const exp of techItem.experience.slice(0, 3)) {
      console.log(`  ${COLORS.success('•')} ${exp}`)
    }
    if (techItem.experience.length > 3) {
      console.log(
        `  ${COLORS.dim(`... and ${techItem.experience.length - 3} more`)}`,
      )
    }
  }

  const portfolioLink = `https://gaboesquivel.com/tech/${techItem.slug}`
  console.log(`\n${COLORS.subtitle('Portfolio Link:')}`)
  console.log(`  ${COLORS.link(portfolioLink)}`)

  if (techItem.link) {
    console.log(`\n${COLORS.subtitle('Official Link:')}`)
    console.log(`  ${COLORS.link(techItem.link)}`)
  }

  console.log(
    `\n${COLORS.title('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')}`,
  )
}

function displayTechList(techList: typeof tech.techStack = tech.techStack) {
  console.log(`\n${COLORS.subtitle(`🛠️  Technologies (${techList.length}):`)}\n`)

  for (const item of techList) {
    console.log(
      `  ${COLORS.highlight(item.name)} ${COLORS.dim(`(since ${item.since})`)}`,
    )
    const desc =
      item.description.length > 70
        ? `${item.description.substring(0, 70)}...`
        : item.description
    console.log(`    ${COLORS.dim(desc)}\n`)
  }
}

async function browseProjects() {
  const projectList = projects.projects

  while (true) {
    const { action } = await prompts({
      type: 'select',
      name: 'action',
      message: COLORS.subtitle('What would you like to do?'),
      choices: [
        { title: '📋 View all projects', value: 'list' },
        { title: '🔍 Search projects', value: 'search' },
        { title: '🏷️  Filter by type', value: 'filter' },
        { title: '🔙 Back to main menu', value: 'back' },
      ],
    })

    if (!action || action === 'back') break

    if (action === 'list') {
      displayProjectList(projectList)
      const { selected } = await prompts({
        type: 'select',
        name: 'selected',
        message: COLORS.subtitle('Select a project to view details:'),
        choices: [
          ...projectList.map((p, i) => ({
            title: formatProjectCard(p, i),
            value: i,
          })),
          { title: COLORS.dim('← Back'), value: -1 },
        ],
      })

      if (selected !== undefined && selected >= 0) {
        displayProjectSummary(projectList[selected])
        await prompts({
          type: 'confirm',
          name: 'continue',
          message: COLORS.info('Press Enter to continue...'),
          initial: true,
        })
      }
    }

    if (action === 'search') {
      const { query } = await prompts({
        type: 'text',
        name: 'query',
        message: COLORS.subtitle(
          'Search projects (by name, tech, or description):',
        ),
      })

      if (query) {
        const searchLower = query.toLowerCase()
        const filtered = projectList.filter(
          (p) =>
            p.title.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower) ||
            p.tech?.some((t) => t.toLowerCase().includes(searchLower)) ||
            p.type?.some((t) => t.toLowerCase().includes(searchLower)),
        )

        if (filtered.length === 0) {
          console.log(
            `\n${COLORS.error('No projects found matching your search.')}\n`,
          )
        } else {
          displayProjectList(filtered)
          const { selected } = await prompts({
            type: 'select',
            name: 'selected',
            message: COLORS.subtitle('Select a project to view details:'),
            choices: [
              ...filtered.map((p, i) => ({
                title: formatProjectCard(p, i),
                value: i,
              })),
              { title: COLORS.dim('← Back'), value: -1 },
            ],
          })

          if (selected !== undefined && selected >= 0) {
            displayProjectSummary(filtered[selected])
            await prompts({
              type: 'confirm',
              name: 'continue',
              message: COLORS.info('Press Enter to continue...'),
              initial: true,
            })
          }
        }
      }
    }

    if (action === 'filter') {
      const allTypes = new Set<string>()
      for (const p of projectList) {
        if (p.type) {
          for (const t of p.type) {
            allTypes.add(t)
          }
        }
      }
      const typeArray = Array.from(allTypes).sort()

      const { selectedType } = await prompts({
        type: 'select',
        name: 'selectedType',
        message: COLORS.subtitle('Filter by project type:'),
        choices: [
          ...typeArray.map((t) => ({ title: COLORS.warning(t), value: t })),
          { title: COLORS.dim('← Back'), value: 'back' },
        ],
      })

      if (selectedType && selectedType !== 'back') {
        const filtered = projectList.filter((p) =>
          p.type?.includes(selectedType),
        )
        displayProjectList(filtered)
        const { selected } = await prompts({
          type: 'select',
          name: 'selected',
          message: COLORS.subtitle('Select a project to view details:'),
          choices: [
            ...filtered.map((p, i) => ({
              title: formatProjectCard(p, i),
              value: i,
            })),
            { title: COLORS.dim('← Back'), value: -1 },
          ],
        })

        if (selected !== undefined && selected >= 0) {
          displayProjectSummary(filtered[selected])
          await prompts({
            type: 'confirm',
            name: 'continue',
            message: COLORS.info('Press Enter to continue...'),
            initial: true,
          })
        }
      }
    }
  }
}

async function browseTech() {
  const techList = tech.techStack

  while (true) {
    const { action } = await prompts({
      type: 'select',
      name: 'action',
      message: COLORS.subtitle('What would you like to do?'),
      choices: [
        { title: '📋 View all technologies', value: 'list' },
        { title: '🔍 Search technologies', value: 'search' },
        { title: '🔙 Back to main menu', value: 'back' },
      ],
    })

    if (!action || action === 'back') break

    if (action === 'list') {
      displayTechList(techList)
      const { selected } = await prompts({
        type: 'select',
        name: 'selected',
        message: COLORS.subtitle('Select a technology to view details:'),
        choices: [
          ...techList.map((t, i) => ({
            title: `${COLORS.highlight(t.name)} ${COLORS.dim(`(since ${t.since})`)}`,
            value: i,
          })),
          { title: COLORS.dim('← Back'), value: -1 },
        ],
      })

      if (selected !== undefined && selected >= 0) {
        displayTechSummary(techList[selected])
        await prompts({
          type: 'confirm',
          name: 'continue',
          message: COLORS.info('Press Enter to continue...'),
          initial: true,
        })
      }
    }

    if (action === 'search') {
      const { query } = await prompts({
        type: 'text',
        name: 'query',
        message: COLORS.subtitle(
          'Search technologies (by name or description):',
        ),
      })

      if (query) {
        const searchLower = query.toLowerCase()
        const filtered = techList.filter(
          (t) =>
            t.name.toLowerCase().includes(searchLower) ||
            t.description.toLowerCase().includes(searchLower) ||
            t.experience?.some((e) => e.toLowerCase().includes(searchLower)),
        )

        if (filtered.length === 0) {
          console.log(
            `\n${COLORS.error('No technologies found matching your search.')}\n`,
          )
        } else {
          displayTechList(filtered)
          const { selected } = await prompts({
            type: 'select',
            name: 'selected',
            message: COLORS.subtitle('Select a technology to view details:'),
            choices: [
              ...filtered.map((t, i) => ({
                title: `${COLORS.highlight(t.name)} ${COLORS.dim(`(since ${t.since})`)}`,
                value: i,
              })),
              { title: COLORS.dim('← Back'), value: -1 },
            ],
          })

          if (selected !== undefined && selected >= 0) {
            displayTechSummary(filtered[selected])
            await prompts({
              type: 'confirm',
              name: 'continue',
              message: COLORS.info('Press Enter to continue...'),
              initial: true,
            })
          }
        }
      }
    }
  }
}

async function mainMenu() {
  while (true) {
    const { choice } = await prompts({
      type: 'select',
      name: 'choice',
      message: COLORS.subtitle('What would you like to explore?'),
      choices: [
        { title: '📦 Browse Projects', value: 'projects' },
        { title: '🛠️  Browse Technologies', value: 'tech' },
        { title: '👋 Exit', value: 'exit' },
      ],
    })

    if (!choice || choice === 'exit') {
      console.log(`\n${COLORS.success('Thanks for exploring! 👋\n')}`)
      break
    }

    if (choice === 'projects') {
      await browseProjects()
    }

    if (choice === 'tech') {
      await browseTech()
    }
  }
}

async function handleArgs() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    displayBanner()
    displayLinks()
    await mainMenu()
    return
  }

  const command = args[0]

  switch (command) {
    case '--projects':
    case '-p':
      displayBanner()
      await browseProjects()
      break
    case '--tech':
    case '-t':
      displayBanner()
      await browseTech()
      break
    case '--help':
    case '-h':
      displayBanner()
      console.log(`\n${COLORS.subtitle('Available Commands:')}\n`)
      console.log(
        `  ${COLORS.info('npx gaboesquivel')}           Interactive menu`,
      )
      console.log(
        `  ${COLORS.info('npx gaboesquivel --projects')} Browse projects`,
      )
      console.log(
        `  ${COLORS.info('npx gaboesquivel --tech')}     Browse technologies`,
      )
      console.log(
        `  ${COLORS.info('npx gaboesquivel --help')}    Show this help\n`,
      )
      break
    default:
      console.log(`${COLORS.error(`Unknown command: ${command}`)}`)
      console.log(
        `Run ${COLORS.info('npx gaboesquivel --help')} for available commands.`,
      )
  }
}

handleArgs().catch((error) => {
  console.error(COLORS.error('An error occurred:'), error)
  process.exit(1)
})
