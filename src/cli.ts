#!/usr/bin/env node

import chalk from 'chalk'
import * as api from './api'
import * as projects from './projects'
import * as tech from './tech'

// Add Node.js process type declaration
declare const process: {
  argv: string[]
}

function displayBanner() {
  console.log(
    chalk.cyan(`
  ┌─────────────────────────────────────────────────────────────────┐
  │                                                                 │
  │                ${chalk.bold.yellow('Gabo Esquivel - Software Engineer')}                │
  │                                                                 │
  │  ${chalk.green('Full-stack software engineer with over 15 years of experience')}  │
  │  ${chalk.green('Specializing in web3 technologies since 2017')}                   │
  │  ${chalk.green('Background includes work on numerous blockchain projects')}       │
  │  ${chalk.green('A decade with NodeJS and cloud platforms')}                       │
  │  ${chalk.green('Advanced expertise in React, React Native, and TypeScript')}      │
  │  ${chalk.green('Currently exploring AI')}                                         │
  │                                                                 │
  └─────────────────────────────────────────────────────────────────┘
  `),
  )
}

function displayInfo() {
  console.log(
    `${chalk.bold.blue('Website: ')}${chalk.underline('https://gaboesquivel.com')}`,
  )
  console.log(
    `${chalk.bold.blue('GitHub: ')}${chalk.underline('https://github.com/gaboesquivel')}`,
  )
  console.log(
    `${chalk.bold.blue('Twitter: ')}${chalk.underline('https://twitter.com/gaboesquivel')}`,
  )
  console.log(
    `${chalk.bold.blue('Calendar: ')}${chalk.underline('https://cal.com/gaboesquivel')}`,
  )

  console.log(chalk.bold('\nAvailable commands:'))
  console.log(
    `${chalk.magenta('  npx gaboesquivel --projects  ')}List projects with descriptions and links`,
  )
  console.log(
    `${chalk.magenta('  npx gaboesquivel --tech      ')}List technologies with descriptions and links`,
  )
}

function displayProjectList() {
  console.log(chalk.bold.yellow('\nProjects:\n'))

  if (!projects.projects || !Array.isArray(projects.projects)) {
    console.log(chalk.red('No projects found'))
    return
  }

  for (const [index, project] of projects.projects.entries()) {
    // Project title without number
    console.log(`${chalk.bold.yellow(` ${project.title} `)}`)

    // Description with improved formatting
    const description =
      project.description.length > 100
        ? `${project.description.substring(0, 100)}...`
        : project.description

    console.log(chalk.white(`   ${description}`))

    // Show tech stack in green
    if (project.tech && project.tech.length > 0) {
      console.log(
        `   ${chalk.bold.blue('Tech:')} ${chalk.green(
          project.tech.slice(0, 5).join(', '),
        )}${project.tech.length > 5 ? chalk.dim(', ...') : ''}`,
      )
    }

    // Show type in cyan
    if (project.type && project.type.length > 0) {
      console.log(
        `   ${chalk.bold.blue('Type:')} ${chalk.cyan(project.type.join(', '))}`,
      )
    }

    // Link with underline
    console.log(
      `   ${chalk.bold.blue('Link:')} ${chalk.underline.blue(`https://gaboesquivel.com/project/${project.slug}`)}`,
    )

    console.log('')
  }
}

function displayTechList() {
  console.log(chalk.bold.yellow('\nTechnologies:\n'))

  if (!tech.techStack || !Array.isArray(tech.techStack)) {
    console.log(chalk.red('No technologies found'))
    return
  }

  // Display technologies in original array order
  for (const item of tech.techStack) {
    // Tech name with year
    console.log(
      `  ${chalk.bold.green(item.name)} ${chalk.yellow(`(since ${item.since})`)}`,
    )

    // Description
    const description =
      item.description.length > 80
        ? `${item.description.substring(0, 80)}...`
        : item.description
    console.log(`  ${chalk.white(description)}`)

    // Experience snippet
    if (item.experience && item.experience.length > 0) {
      console.log(
        `  ${chalk.bold.blue('Experience:')} ${chalk.italic.white(item.experience[0])}`,
      )
    }

    // Links with better formatting
    console.log(
      `  ${chalk.bold.blue('Portfolio Link:')} ${chalk.underline.blue(`https://gaboesquivel.com/tech/${item.slug}`)}\n`,
    )
  }
}

function handleArgs() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    displayBanner()
    displayInfo()
    return
  }

  const command = args[0]

  switch (command) {
    case '--projects':
      displayProjectList()
      break
    case '--tech':
      displayTechList()
      break
    default:
      console.log(chalk.red(`Unknown command: ${command}`))
  }
}

handleArgs()
