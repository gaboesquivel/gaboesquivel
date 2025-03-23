// Define the interface for a project
export interface Project {
  title: string
  slug: string
  description: string
  tech: Tag[]
  type: string[]
  link?: string
  image: string
  repo?: string
  video?: string
  images?: string[]
  achievements: string[]
  story: string[]
  related?: { url: string; title: string; publishedAt: string }[]
}

// Define the interface for a tech stack item
export interface TechStackItem {
  name: string
  slug: string
  tag: Tag
  image: string
  description: string
  link: string
  since: string
  intro: string[]
  experience: string[]
}

export interface TechStackItemWithProjects extends TechStackItem {
  projects: Project[]
}

// Define the type for a tag derived from the technologies collection
export type Tag =
  | 'TypeScript'
  | 'Solidity'
  | 'Foundry'
  | 'NextJS'
  | 'Ponder'
  | 'Postgres'
  | 'Viem'
  | 'Wagmi'
  | 'EVM'
  | 'ThirdWeb'
  | 'Alchemy'
  | 'Hardhat'
  | 'NodeJS'
  | 'PostgreSQL'
  | 'GraphQL'
  | 'AI SDK'
  | 'LLMs'
  | 'WebGL'
  | 'Ethereum'
  | 'Ethers'
  | 'NFT'
  | 'AWS'
  | 'ReactJS'
  | 'React Native'
  | 'EOS'
  | 'Antelope'
  | 'C++'
  | 'GCP'
  | 'Serverless'
  | 'Docker'
  | 'RXJS'
  | 'Niftory'
  | 'Dalle'
  | 'Tailwind'
  | 'Ruby on Rails'
  | 'Spree'
  | 'Heroku'
  | 'MongoDB'
  | 'AngularJS'
  | 'Stripe'
  | 'Twilio'
  | 'SASS'
  | 'jQuery'
  | 'Lodash'
  | 'Grapnel.js'
  | 'Grunt'
  | 'Divshot'
  | 'PHP'
  | 'HTML5'
  | 'AJAX'
  | 'Handlebars'
  | 'Brightcove API'
  | 'require.js'
  | 'JSP (Struts)'
  | 'Omniture'
  | 'Adobe mBox'
  | 'Facebook API'
  | 'Dojo'
  | 'CSS'
  | 'Mootools'
  | 'Wordpress'
  | 'CMS'
  | 'Data Charts'
  | 'Bootstrap'
  | 'Faye'
  | 'LESS'
  | 'Azure'
  | 'Polkadot'
  | 'Substrate'
  | 'Flow'
  | 'OpenAI'
  | 'Biometrics'
  | 'JavaScript'
  | 'Expo'
  | 'DatoCMS'
  | 'ShadcnUI'
  | 'Trigger'
  | 'Supabase'
  | 'Stitches'
  | 'Zustand'
  | 'Zod'
  | 'TanStack Query'
  | 'TanStack Form'
  | 'TanStack Start'
  | 'nuqs'
  | 'WebAuthN'
  | 'Terraform'
  | 'Twitter API'
  | 'eBay API'
  | 'ViroAR'
  | 'Redux'
