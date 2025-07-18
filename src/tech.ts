import type { TechStackItem } from './types'

export const techStack: TechStackItem[] = [
  {
    name: 'TypeScript',
    slug: 'typescript',
    tag: 'TypeScript',
    image: '/images/tech/typescript.png',
    description:
      'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: 'https://www.typescriptlang.org/',
    since: '2012',
    intro: [
      'TypeScript is a superset of JavaScript that adds static types, enhancing code quality and maintainability.',
      'It is widely used in modern web development for building scalable and robust applications.',
    ],
    experience: [
      'Extensively used TypeScript for ensuring type safety and enhancing developer experience across various projects.',
      'Implemented TypeScript to build scalable and robust applications, leveraging its static typing and modern JavaScript features.',
    ],
  },
  {
    name: 'Node.js',
    slug: 'nodejs',
    tag: 'NodeJS',
    image: '/images/tech/nodejs.png',
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications.",
    link: 'https://nodejs.org/',
    since: '2009',
    intro: [
      'Node.js is known for its event-driven, non-blocking I/O model, which makes it lightweight and efficient for building web servers and applications.',
      'It is widely used for developing server-side and networking applications.',
    ],
    experience: [
      "Founded Costa Rica JS, a meetup group that became Central America's largest JavaScript community, promoting open-source and collaborative development.",
      'Utilized Node.js in projects like Eat Arcade and 4Tius Fitness Data Tracker for building scalable backend services, adhering to the principle of keeping it simple.',
      'Contributed to the development of decentralized applications like Emanate and Sense Chat, leveraging Node.js for efficient and secure communication.',
      'Implemented Node.js in projects like Wink for server-side development and real-time data processing.',
    ],
  },
  {
    name: 'ReactJS',
    slug: 'reactjs',
    tag: 'ReactJS',
    image: '/images/tech/reactjs.png',
    description:
      'A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.',
    link: 'https://reactjs.org/',
    since: '2013',
    intro: [
      'ReactJS is a popular JavaScript library for building user interfaces, particularly for single-page applications.',
      'It allows developers to create large web applications that can update and render efficiently in response to data changes.',
    ],
    experience: [
      'Utilized ReactJS in various projects to build dynamic and responsive user interfaces.',
      'Implemented ReactJS in the development of web applications like Eat Arcade and 4Tius Fitness Data Tracker, focusing on performance and maintainability.',
      "Leveraged ReactJS's component-based architecture to enhance code reusability and scalability in projects like Wink and Sense Chat.",
    ],
  },
  {
    name: 'React Native',
    slug: 'react-native',
    tag: 'React Native',
    image: '/images/tech/react-native.png',
    description: 'A framework for building native apps using React.',
    link: 'https://reactnative.dev/',
    since: '2015',
    intro: [
      'React Native allows developers to build mobile applications using React, enabling a single codebase for both iOS and Android.',
      'It is known for its ability to create truly native apps with a consistent developer experience.',
    ],
    experience: [
      "Developed the first version of Wink's mobile app, focusing on seamless user experience and integration with AWS services.",
      "Enhanced the Sense.chat app's performance and integrated it with the EOS mainnet for secure transactions.",
      "Improved Tractor Supply's mobile app by developing an augmented reality feature and optimizing code quality.",
    ],
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
    tag: 'NextJS',
    image: '/images/tech/nextjs.png',
    description:
      'A React framework for production, providing hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.',
    link: 'https://nextjs.org/',
    since: '2012',
    intro: [
      'Next.js is a popular React framework that enables server-side rendering and static site generation for React applications.',
      'It is known for its performance optimizations and ease of use in building scalable web applications.',
    ],
    experience: [
      'Utilized Next.js in BasilicEVM for building a performance-optimized development stack, enhancing scalability and maintainability.',
      'Implemented server-side rendering and static site generation in projects like bitlauncher, dBoard, and RareMint to improve load times and SEO.',
      'Enhanced user experience in Masterbots and ZTX by leveraging Next.js features for seamless integration with blockchain technologies.',
    ],
  },
  {
    name: 'Viem',
    slug: 'viem',
    tag: 'Viem',
    image: '/images/tech/viem.png',
    description:
      'A library for interacting with Ethereum and other EVM-compatible blockchains.',
    link: 'https://viem.io/',
    since: '2023',
    intro: [
      'Viem is a modern library designed to simplify interactions with Ethereum and other EVM-compatible blockchains.',
      'It provides a robust set of tools for developers to build decentralized applications with ease.',
    ],
    experience: [
      'Utilized Viem in projects like BasilicEVM for efficient blockchain interactions and data processing.',
      'Implemented Viem to enhance the development workflow, focusing on performance and scalability.',
      'Used Viem in projects like bitlauncher for seamless blockchain integration.',
    ],
  },
  {
    name: 'Wagmi',
    slug: 'wagmi',
    tag: 'Wagmi',
    image: '/images/tech/wagmi.png',
    description: 'A collection of React hooks for Ethereum.',
    link: 'https://wagmi.sh/',
    since: '2023',
    intro: [
      'Wagmi provides a set of React hooks that simplify the process of building Ethereum applications.',
      'It is designed to work seamlessly with popular libraries like ethers.js and viem.',
    ],
    experience: [
      'Implemented Wagmi in projects like BasilicEVM to streamline Ethereum application development.',
      'Used Wagmi to enhance user experience and simplify blockchain interactions in React applications.',
      'Utilized Wagmi in projects like bitlauncher for efficient Ethereum interactions.',
    ],
  },
  {
    name: 'EthersJS',
    slug: 'ethersjs',
    tag: 'Ethers',
    image: '/images/tech/ethersjs.png',
    description:
      'A library for interacting with the Ethereum blockchain and its ecosystem.',
    link: 'https://docs.ethers.io/v5/',
    since: '2017',
    intro: [
      'EthersJS is a library designed to interact with the Ethereum blockchain, providing a simple and consistent interface for developers.',
      'It is widely used for its ease of use and comprehensive documentation, making it a popular choice for Ethereum development.',
    ],
    experience: [
      'Utilized EthersJS in projects like BasilicEVM for seamless interaction with the Ethereum blockchain.',
      'Implemented EthersJS in RareMint for efficient smart contract interactions and NFT data indexing.',
      'Developed a WebGL EVM wallet connector using EthersJS at ZTX, enabling secure blockchain transactions within the metaverse platform.',
      "Led the architecture of Knowledge.io's token system using EthersJS for secure and efficient blockchain interactions.",
    ],
  },

  {
    name: 'Ponder',
    slug: 'ponder',
    tag: 'Ponder',
    image: '/images/tech/ponder.png',
    description: 'A tool for indexing and querying blockchain data.',
    link: 'https://ponder.io/',
    since: '2024',
    intro: [
      'Ponder is a powerful tool for indexing and querying blockchain data, making it easier to build responsive dApps.',
      'It provides real-time data processing capabilities, enhancing the performance of decentralized applications.',
    ],
    experience: [
      'Utilized Ponder in projects like BasilicEVM for efficient data indexing and real-time updates.',
      'Implemented Ponder to improve data retrieval and processing in blockchain applications.',
    ],
  },
  {
    name: 'PostgreSQL',
    slug: 'postgresql',
    tag: 'Postgres',
    image: '/images/tech/postgresql.png',
    description:
      'A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.',
    link: 'https://www.postgresql.org/',
    since: '2012',
    intro: [
      'PostgreSQL is a highly stable database management system, used by many companies and organizations to store and manage their data.',
      'It supports advanced data types and performance optimization features, making it a popular choice for complex applications.',
    ],
    experience: [
      'Implemented PostgreSQL in projects like BitLauncher and RareMint for efficient data management and querying.',
      'Utilized PostgreSQL in projects like EOS Costa Rica and bitcashBank for robust database solutions.',
    ],
  },
  {
    name: 'EVM',
    slug: 'evm',
    tag: 'EVM',
    image: '/images/tech/evm.png',
    description:
      'The Ethereum Virtual Machine, a runtime environment for smart contracts in Ethereum.',
    link: 'https://ethereum.org/en/developers/docs/evm/',
    since: '2017',
    intro: [
      'The EVM is the runtime environment for smart contracts in Ethereum, enabling decentralized computation.',
      'It is a key component of the Ethereum blockchain, executing smart contracts and maintaining consensus.',
    ],
    experience: [
      'Worked with EVM in projects like BasilicEVM and RareMint for smart contract execution and blockchain interactions.',
      'Utilized EVM in projects like bitcashBank for decentralized application development.',
    ],
  },
  {
    name: 'Solidity',
    slug: 'solidity',
    tag: 'Solidity',
    image: '/images/tech/solidity.png',
    description:
      'A contract-oriented programming language for writing smart contracts on Ethereum.',
    link: 'https://soliditylang.org/',
    since: '2017',
    intro: [
      'Solidity is the primary language for writing smart contracts on Ethereum and other EVM-compatible blockchains.',
      'It is designed to target the Ethereum Virtual Machine (EVM) and is influenced by C++, Python, and JavaScript.',
    ],
    experience: [
      'Developed smart contracts for the Knowledge ICO, focusing on security and efficiency, embodying the principle of keeping it simple.',
      'Contributed to the development of asset-backed NFTs on Ethereum for RareMint, demonstrating the transformative power of blockchain technology.',
      'Utilized Solidity in projects like BasilicEVM and bitlauncher for smart contract development and blockchain interactions.',
    ],
  },
  {
    name: 'Foundry',
    slug: 'foundry',
    tag: 'Foundry',
    image: '/images/tech/foundry.png',
    description:
      'A blazing fast, portable, and modular toolkit for Ethereum application development.',
    link: 'https://getfoundry.sh/',
    since: '2024',
    intro: [
      'Foundry is a toolkit for Ethereum application development, known for its speed and modularity.',
      'It provides a suite of tools for building, testing, and deploying smart contracts.',
    ],
    experience: [
      'Utilized Foundry in projects like BasilicEVM for efficient smart contract development and testing.',
    ],
  },
  {
    name: 'AI SDK',
    slug: 'ai-sdk',
    tag: 'AI SDK',
    image: '/images/tech/ai-sdk.png',
    description:
      'Software Development Kits for integrating AI capabilities into applications.',
    link: 'https://en.wikipedia.org/wiki/Software_development_kit',
    since: '2023',
    intro: [
      'AI SDKs provide tools and libraries for integrating AI capabilities into applications, enhancing functionality and user experience.',
      'They are used in various applications, from chatbots to data analysis and automation.',
    ],
    experience: [
      'Implemented AI SDKs in projects like Masterbots for advanced AI-driven features and automation.',
    ],
  },
  {
    name: 'LLMs',
    slug: 'llms',
    tag: 'LLMs',
    image: '/images/tech/llms.png',
    description:
      'Large Language Models used for natural language processing and understanding.',
    link: 'https://en.wikipedia.org/wiki/Language_model',
    since: '2023',
    intro: [
      'LLMs are advanced models used for natural language processing, enabling applications to understand and generate human-like text.',
      'They are widely used in chatbots, translation services, and content generation.',
    ],
    experience: [
      'Utilized LLMs in projects like Masterbots for enhanced natural language processing and user interaction.',
    ],
  },
  {
    name: 'ThirdWeb',
    slug: 'thirdweb',
    tag: 'ThirdWeb',
    image: '/images/tech/thirdweb.png',
    description:
      'A platform for building and deploying Web3 applications with ease.',
    link: 'https://thirdweb.com/',
    since: '2024',
    intro: [
      'ThirdWeb provides tools and infrastructure for building Web3 applications, simplifying the development process.',
      'It offers a range of features for deploying smart contracts and managing blockchain interactions.',
    ],
    experience: [
      'Utilized ThirdWeb in projects like BasilicEVM for streamlined Web3 application development.',
    ],
  },

  {
    name: 'Alchemy',
    slug: 'alchemy',
    tag: 'Alchemy',
    image: '/images/tech/alchemy.png',
    description:
      'A blockchain development platform that provides infrastructure and tools for building decentralized applications.',
    link: 'https://www.alchemy.com/',
    since: '2020',
    intro: [
      'Alchemy offers a suite of tools and infrastructure for building decentralized applications on blockchain networks.',
      'It is known for its reliability and performance, supporting developers in building scalable blockchain solutions.',
    ],
    experience: [
      'Used Alchemy in projects like BitLauncher for reliable blockchain infrastructure and development support.',
    ],
  },
  {
    name: 'Hardhat',
    slug: 'hardhat',
    tag: 'Hardhat',
    image: '/images/tech/hardhat.png',
    description:
      'A development environment for Ethereum software, providing tools for building and testing smart contracts.',
    link: 'https://hardhat.org/',
    since: '2020',
    intro: [
      'Hardhat is a development environment for Ethereum software, offering tools for building and testing smart contracts.',
      'It is widely used for its flexibility and support for modern Ethereum development workflows.',
    ],
    experience: [
      'Utilized Hardhat in projects like BitLauncher for smart contract development and testing.',
    ],
  },
  {
    name: 'GraphQL',
    slug: 'graphql',
    tag: 'GraphQL',
    image: '/images/tech/graphql.png',
    description:
      'A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.',
    link: 'https://graphql.org/',
    since: '2015',
    intro: [
      'GraphQL provides a more efficient, powerful, and flexible alternative to REST, allowing clients to request exactly the data they need.',
      'It is widely used in modern web applications for its ability to streamline data fetching and improve performance.',
    ],
    experience: [
      'Implemented GraphQL in projects like ChainGraph and dBoard for efficient data querying and real-time updates.',
      'Utilized GraphQL in projects like EOS Costa Rica for flexible and efficient API development.',
    ],
  },

  {
    name: 'WebGL',
    slug: 'webgl',
    tag: 'WebGL',
    image: '/images/tech/webgl.png',
    description:
      'A JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
    since: '2018',
    intro: [
      'WebGL is a powerful API for rendering 3D and 2D graphics in web browsers, enabling interactive visual experiences.',
      'It is widely used in gaming, data visualization, and interactive web applications.',
    ],
    experience: [
      'Utilized WebGL in projects like ZTX for creating immersive 3D environments and visualizations.',
    ],
  },
  {
    name: 'AWS',
    slug: 'aws',
    tag: 'AWS',
    image: '/images/tech/aws.png',
    description:
      'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.',
    link: 'https://aws.amazon.com/',
    since: '2015',
    intro: [
      'AWS provides a wide range of cloud services, including computing power, storage options, and networking capabilities.',
      'It is a popular choice for deploying and managing scalable applications in the cloud.',
    ],
    experience: [
      'Leveraged AWS for scalable cloud infrastructure in projects like Wink and Photo and Go, ensuring reliability and performance.',
      'Implemented AWS solutions for secure and efficient data processing in decentralized applications like Bitcash, aligning with the principle of automating and securing everything.',
    ],
  },
  {
    name: 'GCP',
    slug: 'gcloud',
    tag: 'GCP',
    image: '/images/tech/gcloud.png',
    description:
      'Google Cloud Platform, a suite of cloud computing services that runs on the same infrastructure that Google uses internally.',
    link: 'https://cloud.google.com/',
    since: '2018',
    intro: [
      'Google Cloud Platform offers a suite of cloud computing services, providing infrastructure, platform, and software solutions.',
      "It is known for its scalability, reliability, and integration with Google's ecosystem.",
    ],
    experience: [
      'Utilized GCP in projects like RareMint and bitcashBank for scalable cloud infrastructure and services.',
    ],
  },
  {
    name: 'ShadcnUI',
    slug: 'shadcn',
    tag: 'ShadcnUI',
    image: '/images/tech/shadcn.png',
    description:
      'A collection of beautifully designed components built with Radix UI and Tailwind CSS.',
    link: 'https://ui.shadcn.com/',
    since: '2021',
    intro: [
      'ShadcnUI provides accessible, customizable, and open-source components for building modern web applications.',
      "It combines the power of Radix UI's accessibility with the flexibility of Tailwind CSS's utility classes.",
    ],
    experience: [
      'Implemented ShadcnUI in projects like BasilicEVM and bitlauncher for consistent, accessible UI components.',
      'Utilized ShadcnUI to create responsive and visually appealing interfaces, enhancing user experience across various applications.',
    ],
  },
  {
    name: 'TanStack Query',
    slug: 'tanstack-query',
    tag: 'TanStack Query',
    image: '/images/tech/tanstack.png',
    description:
      'Powerful asynchronous state management for fetching, caching, and updating data in React applications.',
    link: 'https://tanstack.com/query/latest',
    since: '2021',
    intro: [
      'TanStack Query (formerly React Query) simplifies data fetching, caching, and state management.',
      'It provides tools for handling loading states, errors, and data synchronization.',
    ],
    experience: [
      'Implemented TanStack Query in BasilicEVM and bitlauncher for efficient data fetching and caching.',
      'Utilized query invalidation and refetching strategies to keep UI data fresh and responsive.',
    ],
  },
  {
    name: 'TanStack Form',
    slug: 'tanstack-form',
    tag: 'TanStack Form',
    image: '/images/tech/tanstack-form.png',
    description:
      'A powerful form library for React applications, providing easy-to-use hooks for managing form state and validation.',
    link: 'https://tanstack.com/form/latest',
    since: '2022',
    intro: [
      'TanStack Form simplifies form management in React applications, offering hooks for state management and validation.',
      'It provides a flexible and extensible API for building complex forms with ease.',
    ],
    experience: [
      'Implemented TanStack Form in projects like BasilicEVM and bitlauncher for efficient form state management and validation.',
      'Utilized TanStack Form to create dynamic and responsive forms, enhancing user experience.',
    ],
  },
  {
    name: 'TanStack Start',
    slug: 'tanstack-start',
    tag: 'TanStack Start',
    image: '/images/tech/tanstack-start.png',
    description:
      'A starter kit for building modern web applications with TanStack libraries.',
    link: 'https://tanstack.com/start/latest',
    since: '2023',
    intro: [
      'TanStack Start provides a starter kit for building modern web applications using TanStack libraries.',
      'It includes pre-configured setups for popular tools and libraries, streamlining the development process.',
    ],
    experience: [
      'Utilized TanStack Start in projects like BasilicEVM and bitlauncher for quick and efficient project setup.',
      'Leveraged TanStack Start to integrate TanStack libraries seamlessly, accelerating development workflows.',
    ],
  },
  {
    name: 'WebAuthn',
    slug: 'webauthn',
    tag: 'WebAuthN',
    image: '/images/tech/webauthn.png',
    description:
      'A web standard for passwordless authentication using public key cryptography.',
    link: 'https://webauthn.io/',
    since: '2021',
    intro: [
      'WebAuthn enables strong, attested, and passwordless authentication for web applications.',
      'It leverages hardware security keys, biometrics, and platform authenticators for secure login.',
    ],
    experience: [
      "Set up WebAuthn integration with the EOSIO blockchain for a 'walletless' experience in bitcashBank.",
      'Implemented secure authentication flows using biometrics and hardware security keys.',
    ],
  },

  {
    name: 'Ethereum',
    slug: 'ethereum',
    tag: 'Ethereum',
    image: '/images/tech/ethereum.png',
    description:
      'A decentralized platform that enables developers to build and deploy smart contracts and decentralized applications.',
    link: 'https://ethereum.org/',
    since: '2017',
    intro: [
      'Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications.',
      'It is widely used for its flexibility and support for a wide range of decentralized applications.',
    ],
    experience: [
      'Utilized Ethereum in projects like Knowledge.io and RareMint for building decentralized applications and smart contracts.',
    ],
  },

  {
    name: 'NFT',
    slug: 'nft',
    tag: 'NFT',
    image: '/images/tech/nft.png',
    description:
      'Non-Fungible Tokens, unique digital assets that represent ownership of a specific item or piece of content.',
    link: 'https://en.wikipedia.org/wiki/Non-fungible_token',
    since: '2022',
    intro: [
      'NFTs are unique digital assets that represent ownership of a specific item or piece of content, often used in art, gaming, and collectibles.',
      'They are built on blockchain technology, ensuring authenticity and provenance.',
    ],
    experience: [
      'Implemented NFT solutions in projects like RareMint and ZTX for digital asset creation and trading.',
    ],
  },

  {
    name: 'Supabase',
    slug: 'supabase',
    tag: 'Supabase',
    image: '/images/tech/supabase.png',
    description:
      'An open source Firebase alternative providing all the backend features you need to build a product.',
    link: 'https://supabase.io/',
    since: '2022',
    intro: [
      'Supabase combines the power of PostgreSQL with modern developer tools for building applications quickly.',
      'It offers authentication, real-time subscriptions, and database management in a single platform.',
    ],
    experience: [
      'Implemented Supabase in bitlauncher for real-time data subscriptions and user authentication.',
      'Developed a transaction data indexing system using Supabase for efficient querying and analytics.',
      "Utilized Supabase's real-time capabilities for building responsive and interactive applications.",
    ],
  },
  {
    name: 'Stitches',
    slug: 'stitches',
    tag: 'Stitches',
    image: '/images/tech/stitches.png',
    description:
      'A CSS-in-JS library with near-zero runtime, SSR support, and a great developer experience.',
    link: 'https://stitches.dev/',
    since: '2021',
    intro: [
      'Stitches provides a way to write CSS with JavaScript with excellent performance characteristics.',
      'It offers a powerful theming solution and variant API for building consistent UI components.',
    ],
    experience: [
      'Used Stitches in bitcashBank for creating a themeable and consistent UI design system.',
      'Implemented component variants to create flexible and reusable UI elements across the application.',
    ],
  },
  {
    name: 'Zustand',
    slug: 'zustand',
    tag: 'Zustand',
    image: '/images/tech/zustand.png',
    description:
      'A small, fast, and scalable state management solution for React applications.',
    link: 'https://github.com/pmndrs/zustand',
    since: '2021',
    intro: [
      'Zustand is a minimalistic state management library for React that uses hooks.',
      'It provides a simple API for creating and consuming global state without boilerplate.',
    ],
    experience: [
      'Implemented Zustand in bitcashBank for efficient state management across components.',
      "Utilized Zustand's middleware capabilities to enhance application state with persistence and logging.",
    ],
  },
  {
    name: 'Zod',
    slug: 'zod',
    tag: 'Zod',
    image: '/images/tech/zod.png',
    description:
      'TypeScript-first schema validation with static type inference.',
    link: 'https://zod.dev/',
    since: '2022',
    intro: [
      'Zod is a schema declaration and validation library designed for TypeScript.',
      'It allows for building type-safe applications with runtime validation.',
    ],
    experience: [
      'Utilized Zod in BasilicEVM and bitlauncher for form validation and API request/response typing.',
      'Implemented schema validation to ensure data integrity and improve error handling in applications.',
    ],
  },

  {
    name: 'nuqs',
    slug: 'nuqs',
    tag: 'nuqs',
    image: '/images/tech/nuqs.png',
    description:
      'A type-safe URL query state management library for Next.js applications.',
    link: 'https://nuqs.47ng.com/',
    since: '2023',
    intro: [
      'nuqs provides a way to store and synchronize state in URL query parameters with type safety.',
      'It enables shareable URLs with application state and seamless integration with Next.js.',
    ],
    experience: [
      'Used nuqs in BasilicEVM and bitlauncher for managing filterable and shareable UI states.',
      'Implemented URL-based state management to improve user experience with shareable application states.',
    ],
  },
  {
    name: 'Trigger.dev',
    slug: 'trigger',
    tag: 'Trigger',
    image: '/images/tech/trigger.png',
    description:
      'A developer-first open source background jobs framework for TypeScript.',
    link: 'https://trigger.dev/',
    since: '2023',
    intro: [
      'Trigger.dev is a framework for creating and managing background jobs with TypeScript.',
      'It provides a simple way to run code on schedules, webhooks, and in response to events.',
    ],
    experience: [
      'Utilized Trigger.dev in bitlauncher for scheduling background tasks and processing events.',
      'Implemented event-driven workflows to automate processes and improve application responsiveness.',
    ],
  },
  {
    name: 'Terraform',
    slug: 'terraform',
    tag: 'Terraform',
    image: '/images/tech/terraform.png',
    description:
      'An open-source infrastructure as code software tool for building, changing, and versioning infrastructure safely and efficiently.',
    link: 'https://www.terraform.io/',
    since: '2019',
    intro: [
      'Terraform enables you to define and provision infrastructure using a declarative configuration language.',
      'It supports multiple cloud providers and services, allowing for consistent infrastructure deployment.',
    ],
    experience: [
      'Used Terraform at EOS Costa Rica for infrastructure provisioning and management.',
      "Built the architecture for Grant Thornton's custom private blockchain using Terraform and Azure.",
    ],
  },
  {
    name: 'Redux',
    slug: 'redux',
    tag: 'Redux',
    image: '/images/tech/redux.png',
    description:
      'A predictable state container for JavaScript apps, helping you write applications that behave consistently.',
    link: 'https://redux.js.org/',
    since: '2016',
    intro: [
      'Redux provides a centralized store for state management in JavaScript applications.',
      'It follows a unidirectional data flow pattern, making state changes predictable and traceable.',
    ],
    experience: [
      'Implemented Redux in the Tractor Supply mobile app for state management.',
      'Utilized Redux middleware for handling asynchronous operations and side effects in applications.',
    ],
  },
  {
    name: 'Serverless',
    slug: 'serverless',
    tag: 'Serverless',
    image: '/images/tech/serverless.png',
    description:
      'A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.',
    link: 'https://www.serverless.com/',
    since: '2015',
    intro: [
      'Serverless computing allows developers to build and run applications without managing the underlying infrastructure.',
      'It is known for its scalability and cost-effectiveness, enabling developers to focus on code rather than server management.',
    ],
    experience: [
      'Implemented serverless architectures in projects like Knowledge.io for scalable and efficient application deployment.',
    ],
  },
  {
    name: 'Docker',
    slug: 'docker',
    tag: 'Docker',
    image: '/images/tech/docker.png',
    description:
      'A platform for developing, shipping, and running applications in containers.',
    link: 'https://www.docker.com/',
    since: '2013',
    intro: [
      'Docker allows developers to package applications and their dependencies into containers, ensuring consistency across environments.',
      'It simplifies deployment and scaling of applications, making it a popular choice for modern DevOps practices.',
    ],
    experience: [
      'Utilized Docker in projects like ChainGraph and Photo and Go for containerized application deployment and management.',
    ],
  },
  {
    name: 'RXJS',
    slug: 'rxjs',
    tag: 'RXJS',
    image: '/images/tech/rxjs.png',
    description:
      'A library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
    link: 'https://rxjs.dev/',
    since: '2020',
    intro: [
      'RXJS is a library for reactive programming using Observables, enabling developers to compose asynchronous and event-based programs.',
      'It is widely used in modern web development for handling asynchronous data streams.',
    ],
    experience: [
      'Implemented RXJS in projects like ChainGraph for efficient data stream management and real-time updates.',
    ],
  },
  {
    name: 'Expo',
    slug: 'expo',
    tag: 'Expo',
    image: '/images/tech/expo.png',
    description: 'A set of tools and services for React Native development.',
    link: 'https://expo.dev/',
    since: '2017',
    intro: [
      'Expo provides a set of tools and services to streamline React Native development, simplifying the process of building, deploying, and testing applications.',
      'It enhances the React Native development experience by offering a managed workflow.',
    ],
    experience: [
      "Utilized Expo in Fantasy Top Shots to streamline development and deployment processes, enhancing the mobile app's performance.",
      "Leveraged Expo's managed workflow to accelerate the development of mobile applications, ensuring efficient testing and deployment.",
    ],
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwind',
    tag: 'Tailwind',
    image: '/images/tech/tailwind.png',
    description: 'A utility-first CSS framework for rapid UI development.',
    link: 'https://tailwindcss.com/',
    since: '2022',
    intro: [
      'Tailwind CSS provides a set of utility classes that allow developers to build custom designs without leaving their HTML.',
      'It is known for its flexibility and ability to create responsive and modern user interfaces quickly.',
    ],
    experience: [
      'Used Tailwind CSS in projects like ZTX and Fantasy Top Shots for efficient and responsive UI design, focusing on clarity and simplicity.',
      'Implemented Tailwind CSS to enhance the user experience, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'Antelope',
    slug: 'antelope',
    tag: 'Antelope',
    image: '/images/tech/antelope.png',
    description:
      'A blockchain protocol designed for high performance and scalability, supporting decentralized applications.',
    link: 'https://antelope.io/',
    since: '2018',
    intro: [
      'Antelope is a blockchain protocol designed for high performance and scalability, supporting decentralized applications.',
      'It offers a robust environment for building and deploying blockchain solutions.',
    ],
    experience: [
      'Worked with Antelope in projects like bitcashBank and ChainGraph for blockchain application development.',
    ],
  },
  {
    name: 'C++',
    slug: 'cpp',
    tag: 'C++',
    image: '/images/tech/cpp.png',
    description:
      'A general-purpose programming language created as an extension of the C programming language.',
    link: 'https://en.wikipedia.org/wiki/C%2B%2B',
    since: '2018',
    intro: [
      'C++ is a general-purpose programming language known for its performance and efficiency, widely used in system software, game development, and real-time simulations.',
      'It supports object-oriented, procedural, and generic programming paradigms.',
    ],
    experience: [
      'Utilized C++ in projects like bitcashBank and EOS Costa Rica for high-performance application development.',
    ],
  },
  {
    name: 'EOS',
    slug: 'eos',
    tag: 'EOS',
    image: '/images/tech/eos.png',
    description:
      'A blockchain platform designed for the development of decentralized applications (dApps).',
    link: 'https://eos.io/',
    since: '2018',
    intro: [
      'EOS is a blockchain platform designed for the development of decentralized applications (dApps), known for its scalability and flexibility.',
      'It provides a robust environment for building and deploying blockchain solutions with high performance.',
    ],
    experience: [
      'Worked with EOS in projects like Emanate and Make Sense Labs for blockchain application development and integration.',
    ],
  },
  {
    name: 'Flow Blockchain',
    slug: 'flow',
    tag: 'Flow',
    image: '/images/tech/flow.png',
    description:
      'A fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.',
    link: 'https://www.onflow.org/',
    since: '2020',
    intro: [
      'Flow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.',
      'It is known for its scalability and ease of use, making it a popular choice for NFT and gaming applications.',
    ],
    experience: [
      'Utilized Flow Blockchain in projects like Fantasy Top Shots for NFT integration and gaming applications.',
    ],
  },

  {
    name: 'Polkadot',
    slug: 'polkadot',
    tag: 'Polkadot',
    image: '/images/tech/polkadot.png',
    description:
      'A network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.',
    link: 'https://polkadot.network/',
    since: '2023',
    intro: [
      'Polkadot is a network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.',
      "It is designed to enable a web where our data is our own and isn't stored on a server owned by an intermediary company.",
    ],
    experience: [
      'Worked with Polkadot in projects like Substrate Contracts UI for blockchain interoperability and smart contract development.',
    ],
  },
  {
    name: 'Substrate',
    slug: 'substrate',
    tag: 'Substrate',
    image: '/images/tech/substrate.png',
    description:
      'A framework for building blockchains, providing a set of tools and libraries for blockchain development.',
    link: 'https://substrate.dev/',
    since: '2023',
    intro: [
      'Substrate is a framework for building blockchains, providing a set of tools and libraries for blockchain development.',
      'It is known for its flexibility and support for building custom blockchains with ease.',
    ],
    experience: [
      'Utilized Substrate in projects like Substrate Contracts UI for building and deploying custom blockchains.',
    ],
  },
  {
    name: 'Flow',
    slug: 'flow',
    tag: 'Flow',
    image: '/images/tech/flow.png',
    description:
      'A fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.',
    link: 'https://www.onflow.org/',
    since: '2022',
    intro: [
      'Flow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.',
      'It is known for its scalability and ease of use, making it a popular choice for NFT and gaming applications.',
    ],
    experience: [
      'Utilized Flow in projects like Wizard World for NFT integration and digital asset management.',
    ],
  },
  {
    name: 'Niftory',
    slug: 'niftory',
    tag: 'Niftory',
    image: '/images/tech/niftory.png',
    description:
      'A platform for creating, managing, and distributing NFTs, providing tools and infrastructure for NFT development.',
    link: 'https://niftory.com/',
    since: '2022',
    intro: [
      'Niftory provides a platform for creating, managing, and distributing NFTs, offering tools and infrastructure for NFT development.',
      'It simplifies the process of building and deploying NFT applications.',
    ],
    experience: [
      'Used Niftory in projects like Wizard World for NFT creation and management.',
    ],
  },
  {
    name: 'Dalle',
    slug: 'dalle',
    tag: 'Dalle',
    image: '/images/tech/dalle.png',
    description:
      'An AI model developed by OpenAI for generating images from textual descriptions.',
    link: 'https://openai.com/dall-e/',
    since: '2022',
    intro: [
      'Dalle is an AI model developed by OpenAI for generating images from textual descriptions, enabling creative and artistic applications.',
      'It is widely used for generating unique and creative visual content.',
    ],
    experience: [
      'Implemented Dalle in projects like Wizard World for AI-driven image generation.',
    ],
  },
  {
    name: 'OpenAI',
    slug: 'openai',
    tag: 'OpenAI',
    image: '/images/tech/openai.png',
    description:
      'An AI research and deployment company, known for developing advanced AI models and technologies.',
    link: 'https://openai.com/',
    since: '2022',
    intro: [
      'OpenAI is an AI research and deployment company, known for developing advanced AI models and technologies.',
      'It is widely recognized for its contributions to AI research and development, including models like GPT-3 and Dalle.',
    ],
    experience: [
      'Implemented OpenAI technologies in projects like Wizard World for AI-driven applications and content generation.',
    ],
  },
  {
    name: 'Biometrics',
    slug: 'biometrics',
    tag: 'Biometrics',
    image: '/images/tech/biometrics.png',
    description:
      'Technologies and methods for recognizing individuals based on physical or behavioral characteristics.',
    link: 'https://en.wikipedia.org/wiki/Biometrics',
    since: '2020',
    intro: [
      'Biometrics involves technologies and methods for recognizing individuals based on physical or behavioral characteristics.',
      'It is widely used in security systems, authentication, and identity verification.',
    ],
    experience: [
      'Implemented biometric authentication in projects like Wink for enhanced security and user verification.',
    ],
  },
  {
    name: 'AngularJS',
    slug: 'angularjs',
    tag: 'AngularJS',
    image: '/images/tech/angularjs.png',
    description: 'A structural framework for dynamic web apps.',
    link: 'https://angularjs.org/',
    since: '2018',
    intro: [
      "AngularJS lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.",
      'It is fully extensible and works well with other libraries.',
    ],
    experience: [
      'Used AngularJS in projects like ARINC Microfids for building interactive and dynamic web applications, focusing on user experience and performance.',
      'Utilized AngularJS to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'MongoDB',
    slug: 'mongodb',
    tag: 'MongoDB',
    image: '/images/tech/mongodb.png',
    description:
      'A document database with the scalability and flexibility that you want with the querying and indexing that you need.',
    link: 'https://www.mongodb.com/',
    since: '2018',
    intro: [
      'MongoDB is a document database designed for ease of development and scaling.',
      'It is known for its flexibility and scalability, making it a popular choice for modern web applications.',
    ],
    experience: [
      'Implemented MongoDB in projects like Eat Arcade for efficient data management and querying.',
      'Utilized MongoDB to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'Heroku',
    slug: 'heroku',
    tag: 'Heroku',
    image: '/images/tech/heroku.png',
    description:
      'A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
    link: 'https://www.heroku.com/',
    since: '2018',
    intro: [
      'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
      'It is known for its ease of use and support for a wide range of programming languages and frameworks.',
    ],
    experience: [
      'Deployed applications on Heroku in projects like Eat Arcade for scalable and efficient cloud hosting.',
    ],
  },
  {
    name: 'Bootstrap',
    slug: 'bootstrap',
    tag: 'Bootstrap',
    image: '/images/tech/bootstrap.png',
    description:
      'A free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    link: 'https://getbootstrap.com/',
    since: '2018',
    intro: [
      'Bootstrap contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
      'It is widely used for its responsive grid system and pre-designed components.',
    ],
    experience: [
      'Utilized Bootstrap in projects like Gridium and Jockey Hollow Bar and Kitchen for responsive design and layout, focusing on user experience and performance.',
      'Implemented Bootstrap to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'Stripe',
    slug: 'stripe',
    tag: 'Stripe',
    image: '/images/tech/stripe.png',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://stripe.com/',
    since: '2018',
    intro: [
      'Stripe provides a suite of payment APIs that powers commerce for online businesses of all sizes.',
      'It is known for its ease of integration and support for a wide range of payment methods.',
    ],
    experience: [
      'Integrated Stripe in projects like Eat Arcade for seamless payment processing and user transactions.',
    ],
  },
  {
    name: 'Twilio',
    slug: 'twilio',
    tag: 'Twilio',
    image: '/images/tech/twilio.png',
    description:
      'A cloud communications platform for building SMS, Voice & Messaging applications on an API.',
    link: 'https://www.twilio.com/',
    since: '2018',
    intro: [
      'Twilio provides APIs for sending and receiving messages, making phone calls, and performing other communication functions.',
      'It is widely used for integrating communication capabilities into applications.',
    ],
    experience: [
      'Used Twilio in projects like Eat Arcade for SMS-based user engagement and notifications.',
    ],
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    tag: 'JavaScript',
    image: '/images/tech/javascript.png',
    description:
      'A high-level, just-in-time compiled, object-oriented programming language.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    since: '2009',
    intro: [
      'JavaScript is a versatile programming language that is widely used for web development, enabling interactive and dynamic web pages.',
      'It is known for its flexibility and support for a wide range of programming paradigms.',
    ],
    experience: [
      'Utilized JavaScript in projects like Staples and Gridium for building interactive and dynamic web applications.',
      'Implemented JavaScript to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'CSS',
    slug: 'css',
    tag: 'CSS',
    image: '/images/tech/css.png',
    description:
      'A style sheet language used for describing the presentation of a document written in a markup language like HTML.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    since: '2009',
    intro: [
      'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
      'It is known for its ability to separate content from design, enabling responsive and visually appealing web pages.',
    ],
    experience: [
      'Utilized CSS in projects like Staples and Gridium for styling and layout, focusing on user experience and performance.',
      'Implemented CSS to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'Mootools',
    slug: 'mootools',
    tag: 'Mootools',
    image: '/images/tech/mootools.png',
    description:
      'A compact, modular, Object-Oriented JavaScript framework designed for the intermediate to advanced JavaScript developer.',
    link: 'https://mootools.net/',
    since: '2009',
    intro: [
      'Mootools is a JavaScript framework that provides a rich set of features for building web applications, including DOM manipulation, event handling, and more.',
      'It is known for its lightweight and modular architecture.',
    ],
    experience: [
      'Implemented Mootools in projects like Staples for building interactive and dynamic web features.',
    ],
  },
  {
    name: 'Data Charts',
    slug: 'data-charts',
    tag: 'Data Charts',
    image: '/images/tech/data-charts.png',
    description:
      'Tools and libraries for creating interactive and dynamic data visualizations.',
    link: 'https://www.chartjs.org/',
    since: '2018',
    intro: [
      'Data charts provide a way to visualize data in a clear and interactive manner, making it easier to understand and analyze.',
      'They are widely used in applications that require data visualization and analysis.',
    ],
    experience: [
      'Implemented data charts in projects like Gridium for interactive and dynamic data visualization.',
    ],
  },
  {
    name: 'Ruby on Rails',
    slug: 'rails',
    tag: 'Ruby on Rails',
    image: '/images/tech/rails.png',
    description:
      'A web application framework written in Ruby, designed to make programming web applications easier.',
    link: 'https://rubyonrails.org/',
    since: '2009',
    intro: [
      'Ruby on Rails is a full-stack web application framework that emphasizes convention over configuration.',
      'It is known for its developer-friendly syntax and rapid development capabilities.',
    ],
    experience: [
      'Developed applications like Tikr and ARINC Microfids using Ruby on Rails for robust backend solutions, focusing on simplicity and maintainability.',
      'Leveraged Ruby on Rails to build scalable and efficient web applications, adhering to the principle of optimizing later.',
    ],
  },
  {
    name: 'Faye',
    slug: 'faye',
    tag: 'Faye',
    image: '/images/tech/faye.png',
    description:
      'A publish-subscribe messaging system based on the Bayeux protocol.',
    link: 'https://faye.jcoglan.com/',
    since: '2009',
    intro: [
      'Faye is a messaging system that provides a simple and efficient way to implement real-time messaging in web applications.',
      'It is known for its ease of use and support for the Bayeux protocol.',
    ],
    experience: [
      'Used Faye in projects like ARINC Microfids for real-time messaging and data updates, focusing on user experience and performance.',
      'Utilized Faye to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'LESS',
    slug: 'less',
    tag: 'LESS',
    image: '/images/tech/less.png',
    description: 'A backward-compatible language extension for CSS.',
    link: 'https://lesscss.org/',
    since: '2009',
    intro: [
      'LESS is a CSS pre-processor that extends the capabilities of CSS with variables, mixins, and functions.',
      'It simplifies the process of writing and maintaining stylesheets, making them more readable and reusable.',
    ],
    experience: [
      'Utilized LESS in projects like ARINC Microfids for efficient and maintainable stylesheet development.',
    ],
  },
  {
    name: 'Wordpress',
    slug: 'wordpress',
    tag: 'Wordpress',
    image: '/images/tech/wordpress.png',
    description:
      'A free and open-source content management system (CMS) based on PHP and MySQL.',
    link: 'https://wordpress.org/',
    since: '2009',
    intro: [
      'Wordpress is a free and open-source content management system (CMS) based on PHP and MySQL.',
      'It is known for its ease of use and support for a wide range of plugins and themes, making it a popular choice for building websites and blogs.',
    ],
    experience: [
      'Utilized Wordpress in projects like Capoeira Abolicao and Panini for building and managing websites, focusing on simplicity and flexibility.',
      'Implemented Wordpress to enhance web applications, aligning with the principle of user experience first.',
    ],
  },
  {
    name: 'Content Management Systems',
    slug: 'cms',
    tag: 'CMS',
    image: '/images/tech/cms.png',
    description:
      'Software applications that enable users to create, manage, and modify content on websites without specialized technical knowledge.',
    link: 'https://en.wikipedia.org/wiki/Content_management_system',
    since: '2009',
    intro: [
      'Content Management Systems (CMS) provide tools for creating and managing digital content, often with user-friendly interfaces.',
      'They enable non-technical users to maintain websites and digital platforms without requiring coding knowledge.',
    ],
    experience: [
      'Developed custom CMS solutions for clients like ITS InfoCom, streamlining content management and updates.',
      'Implemented and customized various CMS platforms to meet specific client requirements and enhance user experience.',
      'Utilized DatoCMS in the BitLauncher project for efficient content management and internationalization.',
    ],
  },
  {
    name: 'DatoCMS',
    slug: 'datocms',
    tag: 'DatoCMS',
    image: '/images/tech/datocms.png',
    description:
      'A headless CMS that offers a flexible content management solution for modern websites and applications.',
    link: 'https://www.datocms.com/',
    since: '2020',
    intro: [
      'DatoCMS is a headless content management system that provides a flexible and powerful solution for managing content across multiple platforms.',
      'It offers a user-friendly interface, robust API, and seamless integration with modern development frameworks.',
    ],
    experience: [
      'Implemented DatoCMS in the BitLauncher project for efficient content management and internationalization.',
      "Leveraged DatoCMS's GraphQL API to create a dynamic and multilingual user interface, enhancing the global reach of the platform.",
    ],
  },

  {
    name: 'ViroAR',
    slug: 'viroar',
    tag: 'ViroAR',
    image: '/images/tech/viroar.png',
    description:
      'ViroAR is a React Native platform for building cross-platform AR applications, offering tools for interactive 3D experiences.',
    link: 'https://viromedia.com/viroreact',
    since: '2019',
    intro: [
      'ViroAR provides tools and components for creating augmented reality experiences in React Native.',
      'It enables developers to build cross-platform AR applications with familiar React patterns.',
    ],
    experience: [
      'Developed an augmented reality feature for the Tractor Supply mobile app using ViroAR.',
      'Implemented interactive 3D product previews to enhance the shopping experience.',
    ],
  },
  {
    name: 'Redis',
    slug: 'redis',
    tag: 'Redis',
    image: '/images/tech/redis.png',
    description:
      'An open-source, in-memory data structure store used as a database, cache, and message broker.',
    link: 'https://redis.io/',
    since: '2015',
    intro: [
      'Redis is a high-performance, low-latency key-value store that supports various data structures.',
      'It is widely used for caching, session management, real-time analytics, and message queuing.',
    ],
    experience: [
      'Utilized Redis for caching and real-time data processing in projects like BitcashBank and LegalAgent.',
    ],
  },
]
