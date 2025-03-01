// Define the interface for a project
export interface Project {
    title: string;
    slug: string;
    description: string;
    tech: string[];
    type: string[];
    link?: string;
    image: string;
    repo?: string;
    video?: string;
    images?: string[];
    achievements: string[];
    story: string[];
}

// Define the interface for a tech stack item
export interface TechStackItem {
    name: string;
    icon: string;
    tag: Tag;
    image: string;
    description: string;
    link: string;
    since: string;
    intro: string[];
    experience: string[];
}

export interface TechStackItemWithProjects extends TechStackItem {
    projects: Project[];
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
    | 'AI' 
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
    | 'Blockchain' 
    | 'EOS' 
    | 'Antelope' 
    | 'C++' 
    | 'GCloud' 
    | 'Serverless' 
    | 'Docker' 
    | 'RXJS' 
    | 'Flow Blockchain' 
    | 'Niftory' 
    | 'Dalle' 
    | 'Midjourney' 
    | 'Tailwind' 
    | 'Ruby on Rails' 
    | 'Spree' 
    | 'Heroku' 
    | 'MongoDB' 
    | 'AngularJS' 
    | 'Express.js' 
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
    | 'Custom CMS' 
    | 'Data Charts' 
    | 'Bootstrap' 
    | 'Faye' 
    | 'LESS'
    | 'Cloud'
    | 'Polkadot'
    | 'Substrate'
    | 'Flow'
    | 'OpenAI'
    | 'Biometrics'
    | 'Linux'
    | 'JavaScript'
    | 'Expo'