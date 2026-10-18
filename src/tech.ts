// DO NOT EDIT — leftover migration input
import type { TechStackItem } from "./types";

export const techStack: TechStackItem[] = [
  {
    description:
      "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    experience: [
      "Implemented TypeScript across all major projects including LegalAgent, Opyn, BasilicEVM, and BitLauncher for type safety and maintainability.",
      "Developed strict typing standards for EVM blockchain interactions in BasilicEVM, ensuring predictable smart contract interactions.",
      "Applied TypeScript for RAG architecture implementation in LegalAgent, creating robust data structures for context-aware AI responses.",
      "Utilized TypeScript with TanStack libraries to create type-safe data fetching, form validation, and state management patterns.",
    ],
    image: "/images/tech/typescript.png",
    intro: [
      "TypeScript is a superset of JavaScript that adds static type definitions, enhancing code quality, maintainability and developer productivity.",
      "It provides compile-time error checking, improved IDE support with autocompletion, and better documentation through explicit type declarations.",
    ],
    link: "https://www.typescriptlang.org/",
    name: "TypeScript",
    since: "2012",
    slug: "typescript",
    tag: "TypeScript",
  },
  {
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications.",
    experience: [
      "Built a custom EVM event indexer for BitLauncher using Node.js with Viem subscriptions, efficiently processing blockchain data in real-time.",
      "Developed ChainGraph, an open-source GraphQL toolkit for blockchain data, using Node.js for real-time data streaming and event processing.",
      "Created BitcashBank backend infrastructure with Node.js microservices, handling millions in transaction volume across Latin America.",
      "Led the architecture of Knowledge.io's Ethereum token system and supporting infrastructure using serverless Node.js functions.",
      "Founded Costa Rica JS, which became Central America's largest JavaScript community, promoting collaborative open-source development.",
    ],
    image: "/images/tech/nodejs.png",
    intro: [
      "Node.js provides a JavaScript runtime for server-side applications with an event-driven, non-blocking I/O model that optimizes throughput and scalability.",
      "It enables building fast, lightweight microservices, API layers, and real-time applications with a unified JavaScript codebase across client and server.",
    ],
    link: "https://nodejs.org/",
    name: "Node.js",
    since: "2009",
    slug: "nodejs",
    tag: "NodeJS",
  },
  {
    description:
      "A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
    experience: [
      "Implemented React Server Components in Opyn trading interface, building a high-performance, SEO-friendly experience with Next.js 14.",
      "Developed BitLauncher auction system UI with real-time bidding updates using React with Supabase subscriptions.",
      "Built the real-time blockchain data visualization components for ChainGraph with React and RxJS for reactive data handling.",
      "Created responsive admin dashboards for LegalAgent with Microsoft SSO integration and document management features.",
      "Engineered responsive frontends for RareMint, ZTX, and Emanate, focusing on optimized component architecture and state management.",
    ],
    image: "/images/tech/reactjs.png",
    intro: [
      "ReactJS is a declarative, component-based JavaScript library for building user interfaces, emphasizing composition and unidirectional data flow.",
      "Its virtual DOM implementation and efficient rendering system enable developers to create performant applications with a predictable state model.",
    ],
    link: "https://reactjs.org/",
    name: "ReactJS",
    since: "2013",
    slug: "reactjs",
    tag: "ReactJS",
  },
  {
    description: "A framework for building native apps using React.",
    experience: [
      "Developed a multimodal AI assistant with voice and chat interfaces for LegalAgent's mobile app using React Native and Expo.",
      "Integrated OpenAI's Realtime API for voice transcription and synthesis in a bilingual legal assistant application.",
      "Enhanced Sense.chat's performance and integrated EOS blockchain for secure encrypted communications and token functionality.",
      "Built the first version of Wink, Costa Rica's first neo-bank mobile app, with React Native and biometric authentication.",
      "Implemented augmented reality features for Tractor Supply mobile app using ViroAR for interactive product previews.",
    ],
    image: "/images/tech/react-native.png",
    intro: [
      "React Native enables building native mobile applications using JavaScript and React, providing a bridge to native components while maintaining a single codebase.",
      "It offers near-native performance with hot reloading for faster development cycles and access to device-specific APIs and capabilities.",
    ],
    link: "https://reactnative.dev/",
    name: "React Native",
    since: "2015",
    slug: "react-native",
    tag: "React Native",
  },
  {
    description:
      "A React framework for production, providing hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
    experience: [
      "Built Opyn's trading interface with Next.js 14 and React Server Components, creating a highly responsive DeFi application.",
      "Developed BasilicEVM, a performance-optimized development stack for EVM applications using Next.js 15 with App Router.",
      "Implemented BitLauncher's auction platform with Next.js 14, integrating real-time blockchain data with Supabase subscriptions.",
      "Created Masterbots.ai using Next.js with AI SDK for specialized chatbots and automated internationalization features.",
      "Developed ZTX metaverse web application using Next.js with WebGL and EVM wallet integration for NFT trading functionality.",
    ],
    image: "/images/tech/nextjs.png",
    intro: [
      "Next.js is a powerful React framework providing hybrid rendering strategies (SSR, SSG, ISR), optimized routing, and enhanced developer experience.",
      "It offers built-in API routes, image optimization, internationalization support, and seamless deployment through platforms like Vercel.",
    ],
    link: "https://nextjs.org/",
    name: "Next.js",
    since: "2012",
    slug: "nextjs",
    tag: "NextJS",
  },
  {
    description:
      "A library for interacting with Ethereum and other EVM-compatible blockchains.",
    experience: [
      "Implemented Viem in Opyn trading interface for type-safe contract interactions with Arbitrum Testnet via Alchemy RPC endpoints.",
      "Built a custom EVM event indexer for BitLauncher using Viem EVM event subscriptions, capturing and processing auction data in real-time.",
      "Developed BasilicEVM with Viem as the core blockchain interaction layer, focusing on type safety and performance optimization.",
      "Created a custom token bridge for swapping stablecoins to USDCred tokens in BitLauncher using Viem for contract interactions.",
      "Architected wallet interfaces with Viem for displaying real-time EVM balances through token balance subscriptions.",
    ],
    image: "/images/tech/viem.png",
    intro: [
      "Viem is a TypeScript interface for EVM blockchains that offers modular architecture, comprehensive type safety, and improved performance over alternatives.",
      "It provides first-class support for public, private, and contract actions with built-in parsing, validation, and error handling for blockchain interactions.",
    ],
    link: "https://viem.io/",
    name: "Viem",
    since: "2023",
    slug: "viem",
    tag: "Viem",
  },
  {
    description: "A collection of React hooks for Ethereum.",
    experience: [
      "Integrated Wagmi with Viem in Opyn trading interface for Arbitrum Testnet interactions, implementing connect wallet functionality.",
      "Developed BasilicEVM with Wagmi hooks for contract interactions, creating a streamlined developer experience for EVM applications.",
      "Implemented token balance subscriptions in BitLauncher wallet interface using Wagmi for real-time balance updates.",
      "Created a multichain wallet connection system for BitLauncher supporting both EOS and EVM chains through Wagmi connectors.",
      "Built RareMint marketplace using Wagmi for NFT auction participation and transaction signing on Polygon network.",
    ],
    image: "/images/tech/wagmi.png",
    intro: [
      "Wagmi provides React hooks for EVM interactions, enabling wallet connections, contract reads/writes, and state management with minimal boilerplate.",
      "It offers modular, type-safe components that work seamlessly with Viem, supporting multiple chains and wallets with efficient caching mechanisms.",
    ],
    link: "https://wagmi.sh/",
    name: "Wagmi",
    since: "2023",
    slug: "wagmi",
    tag: "Wagmi",
  },
  {
    description:
      "A library for interacting with the Ethereum blockchain and its ecosystem.",
    experience: [
      "Developed a WebGL EVM wallet connector for ZTX metaverse platform using EthersJS, enabling NFT trading within the 3D environment.",
      "Created RareMint's NFT marketplace on Polygon using EthersJS for efficient smart contract interactions and token minting.",
      "Built an EVM NFT data indexer for RareMint using Moralis streams, Node.js, and EthersJS for tracking ownership changes.",
      "Led the architecture of Knowledge.io's Ethereum-based token system for their successful ICO, focusing on security and efficiency.",
      "Implemented wallet functionality for multiple blockchain projects before Viem/Wagmi became available, using EthersJS as the core interface.",
    ],
    image: "/images/tech/ethersjs.png",
    intro: [
      "EthersJS is a complete Ethereum library and wallet implementation providing compact, intuitive interfaces for blockchain interaction.",
      "It offers secure key management, contract abstractions, and utilities for transaction handling with broad provider support for different networks.",
    ],
    link: "https://docs.ethers.io/v5/",
    name: "EthersJS",
    since: "2017",
    slug: "ethersjs",
    tag: "Ethers",
  },

  {
    description: "A tool for indexing and querying blockchain data.",
    experience: [
      "Set up Ponder indexing service with PostgreSQL for Opyn chain data on Arbitrum Testnet, enabling efficient data retrieval.",
      "Implemented Ponder in BasilicEVM as the standard data layer solution, creating a seamless developer experience for blockchain data.",
      "Designed transaction data indexing systems with Ponder for real-time analytics and historical querying in DeFi applications.",
      "Created custom event processors to transform blockchain data into structured database records for efficient application queries.",
      "Developed GraphQL and REST API layers on top of Ponder-indexed data to provide consistent interfaces for frontend applications.",
    ],
    image: "/images/tech/ponder.png",
    intro: [
      "Ponder is a TypeScript framework for indexing blockchain data into PostgreSQL, providing a structured approach to processing on-chain events.",
      "It offers type-safe database interfaces, built-in caching and syncing capabilities, and optimized query performance for blockchain applications.",
    ],
    link: "https://ponder.io/",
    name: "Ponder",
    since: "2024",
    slug: "ponder",
    tag: "Ponder",
  },
  {
    description:
      "A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.",
    experience: [
      "Implemented PostgreSQL with Supabase in Opyn and BitLauncher for blockchain data storage and real-time subscriptions.",
      "Designed ChainGraph's blockchain data model with PostgreSQL, optimizing for high-throughput event processing and complex queries.",
      "Developed transaction data indexing systems with PostgreSQL in BitcashBank, processing millions in transaction volume.",
      "Created efficient query patterns for EOS Costa Rica blockchain data using PostgreSQL's JSON capabilities and indexing strategies.",
      "Built LegalAgent's document management system with PostgreSQL, implementing full-text search for legal document retrieval.",
    ],
    image: "/images/tech/postgresql.png",
    intro: [
      "PostgreSQL is a powerful object-relational database system with advanced features like JSON support, full-text search, and robust concurrency.",
      "It offers exceptional reliability, data integrity, and extensibility with custom data types, functions, and index types for specialized use cases.",
    ],
    link: "https://www.postgresql.org/",
    name: "PostgreSQL",
    since: "2012",
    slug: "postgresql",
    tag: "PostgreSQL",
  },
  {
    description:
      "The Ethereum Virtual Machine, a runtime environment for smart contracts in Ethereum.",
    experience: [
      "Developed BasilicEVM, a performance-optimized development stack specifically for EVM applications with smart contracts and chain integration.",
      "Implemented Gnosis auction Solidity contracts on EOS EVM for BitLauncher, creating a cross-chain auction platform.",
      "Built a custom EVM event indexer using Node.js and Viem for BitLauncher, capturing real-time blockchain data.",
      "Created a custom token bridge for swapping stablecoins between chains in BitLauncher using EVM smart contracts.",
      "Developed wallet interfaces for Opyn and RareMint showing real-time EVM balances through token balance subscriptions.",
    ],
    image: "/images/tech/evm.png",
    intro: [
      "The Ethereum Virtual Machine (EVM) is the runtime environment for executing smart contracts across Ethereum and compatible blockchains.",
      "It provides a Turing-complete execution environment with deterministic operations, enabling secure, decentralized applications across networks.",
    ],
    link: "https://ethereum.org/en/developers/docs/evm/",
    name: "EVM",
    since: "2017",
    slug: "evm",
    tag: "EVM",
  },
  {
    description:
      "A contract-oriented programming language for writing smart contracts on Ethereum.",
    experience: [
      "Implemented Gnosis auction Solidity contracts for BitLauncher on EOS EVM, enabling transparent batch auctions with uniform pricing.",
      "Developed type-safe smart contracts for Opyn's decentralized options protocol on Arbitrum Testnet using Solidity and Foundry.",
      "Created secure token contracts for Knowledge.io's successful ICO in 2018, focusing on security best practices.",
      "Built BasilicEVM's core contract templates and integration patterns to streamline EVM application development.",
      "Designed and implemented NFT contracts for RareMint, enabling fractional ownership of authenticated sports collectibles on Polygon.",
    ],
    image: "/images/tech/solidity.png",
    intro: [
      "Solidity is a statically-typed, contract-oriented programming language for implementing smart contracts on Ethereum and EVM-compatible blockchains.",
      "It features contract inheritance, libraries, user-defined types, and event emissions with security practices like access controls and gas optimization.",
    ],
    link: "https://soliditylang.org/",
    name: "Solidity",
    since: "2017",
    slug: "solidity",
    tag: "Solidity",
  },
  {
    description:
      "A blazing fast, portable, and modular toolkit for Ethereum application development.",
    experience: [
      "Implemented Foundry in BasilicEVM as the standard smart contract development environment for performance and developer experience.",
      "Developed Opyn's decentralized options protocol contracts using Foundry for comprehensive testing and deployment to Arbitrum Testnet.",
      "Created BitLauncher auction contracts with Foundry, utilizing its forking capabilities for realistic test environments.",
      "Optimized gas usage in smart contracts using Foundry's profiling tools, significantly reducing transaction costs.",
      "Established continuous integration testing pipelines for smart contracts using Foundry's testing framework in multiple projects.",
    ],
    image: "/images/tech/foundry.png",
    intro: [
      "Foundry is a fast, portable Ethereum development toolkit written in Rust, providing testing, deployment, and interaction capabilities for smart contracts.",
      "It offers significant performance improvements over JavaScript-based alternatives with features like gas profiling, forking, tracing, and debugging.",
    ],
    link: "https://getfoundry.sh/",
    name: "Foundry",
    since: "2024",
    slug: "foundry",
    tag: "Foundry",
  },
  {
    description:
      "Software Development Kits for integrating AI capabilities into applications.",
    experience: [
      "Integrated Vercel AI SDK in LegalAgent for chat functionality and OpenAI Realtime API for voice features in a multimodal assistant.",
      "Implemented RAG architecture in LegalAgent for contextual legal support, document summarization, and bilingual assistance.",
      "Developed the chatbot assistant at BitLauncher.ai with tools integration for accessing news, YouTube videos, and detailed information.",
      "Created AI-powered internationalization automation for BitLauncher and Masterbots using AI SDK with template prompting.",
      "Established AI-driven development workflows using Claude Sonnet in Cursor IDE for efficient coding and documentation generation.",
    ],
    image: "/images/tech/ai-sdk.png",
    intro: [
      "AI SDKs provide developer frameworks for integrating large language models and AI capabilities into applications with optimized interfaces.",
      "They offer streaming responses, function calling, structured outputs, and optimized performance with tools for context retrieval and AI agent development.",
    ],
    link: "https://en.wikipedia.org/wiki/Software_development_kit",
    name: "AI SDK",
    since: "2023",
    slug: "ai-sdk",
    tag: "AI SDK",
  },
  {
    description:
      "Large Language Models used for natural language processing and understanding.",
    experience: [
      "Implemented OpenAI GPT-4 in LegalAgent to create a context-aware legal assistant with document summarization capabilities.",
      "Utilized Claude Sonnet in BitLauncher for generating accurate technical documentation and internationalized content.",
      "Developed specialized domain chatbots in Masterbots.ai to perform tasks beyond basic information retrieval.",
      "Created AI-driven development workflows with LLMs for code generation, optimization, and technical documentation.",
      "Integrated Wizard World with OpenAI's DALL-E models to generate AI images and mint them as NFTs on Flow blockchain.",
    ],
    image: "/images/tech/llms.png",
    intro: [
      "Large Language Models are neural networks trained on vast text corpora, capable of understanding context, generating human-like text, and solving complex tasks.",
      "Modern LLMs feature capabilities like few-shot learning, instruction following, tool use, and multi-step reasoning for sophisticated applications.",
    ],
    link: "https://en.wikipedia.org/wiki/Language_model",
    name: "LLMs",
    since: "2023",
    slug: "llms",
    tag: "LLMs",
  },
  {
    description:
      "A platform for building and deploying Web3 applications with ease.",
    experience: [
      "Integrated ThirdWeb in BasilicEVM to provide standardized contract deployment and interaction patterns for common use cases.",
      "Implemented NFT contract templates from ThirdWeb in RareMint, accelerating the development of collectible functionality.",
      "Used ThirdWeb Connect in multiple projects for consistent wallet connection experiences across different blockchain networks.",
      "Leveraged ThirdWeb's storage solutions for decentralized metadata storage in NFT projects, ensuring content persistence.",
      "Deployed marketplace contracts using ThirdWeb for rapid prototyping of trading functionality in Web3 applications.",
    ],
    image: "/images/tech/thirdweb.png",
    intro: [
      "ThirdWeb is a comprehensive Web3 development platform offering pre-built smart contracts, SDK tooling, and infrastructure for blockchain applications.",
      "It provides wallet connection utilities, NFT tooling, marketplace functionality, and token management with simplified deployment across multiple chains.",
    ],
    link: "https://thirdweb.com/",
    name: "ThirdWeb",
    since: "2024",
    slug: "thirdweb",
    tag: "ThirdWeb",
  },

  {
    description:
      "A blockchain development platform that provides infrastructure and tools for building decentralized applications.",
    experience: [
      "Used Alchemy in projects like BitLauncher for reliable blockchain infrastructure and development support.",
    ],
    image: "/images/tech/alchemy.png",
    intro: [
      "Alchemy offers a suite of tools and infrastructure for building decentralized applications on blockchain networks.",
      "It is known for its reliability and performance, supporting developers in building scalable blockchain solutions.",
    ],
    link: "https://www.alchemy.com/",
    name: "Alchemy",
    since: "2020",
    slug: "alchemy",
    tag: "Alchemy",
  },
  {
    description:
      "A development environment for Ethereum software, providing tools for building and testing smart contracts.",
    experience: [
      "Utilized Hardhat in projects like BitLauncher for smart contract development and testing.",
    ],
    image: "/images/tech/hardhat.png",
    intro: [
      "Hardhat is a development environment for Ethereum software, offering tools for building and testing smart contracts.",
      "It is widely used for its flexibility and support for modern Ethereum development workflows.",
    ],
    link: "https://hardhat.org/",
    name: "Hardhat",
    since: "2020",
    slug: "hardhat",
    tag: "Hardhat",
  },
  {
    description:
      "A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
    experience: [
      "Implemented GraphQL in projects like ChainGraph and dBoard for efficient data querying and real-time updates.",
      "Utilized GraphQL in projects like EOS Costa Rica for flexible and efficient API development.",
    ],
    image: "/images/tech/graphql.png",
    intro: [
      "GraphQL provides a more efficient, powerful, and flexible alternative to REST, allowing clients to request exactly the data they need.",
      "It is widely used in modern web applications for its ability to streamline data fetching and improve performance.",
    ],
    link: "https://graphql.org/",
    name: "GraphQL",
    since: "2015",
    slug: "graphql",
    tag: "GraphQL",
  },

  {
    description:
      "A JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser.",
    experience: [
      "Utilized WebGL in projects like ZTX for creating immersive 3D environments and visualizations.",
    ],
    image: "/images/tech/webgl.png",
    intro: [
      "WebGL is a powerful API for rendering 3D and 2D graphics in web browsers, enabling interactive visual experiences.",
      "It is widely used in gaming, data visualization, and interactive web applications.",
    ],
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",
    name: "WebGL",
    since: "2018",
    slug: "webgl",
    tag: "WebGL",
  },
  {
    description:
      "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
    experience: [
      "Leveraged AWS for scalable cloud infrastructure in projects like Wink and Photo and Go, ensuring reliability and performance.",
      "Implemented AWS solutions for secure and efficient data processing in decentralized applications like Bitcash, aligning with the principle of automating and securing everything.",
    ],
    image: "/images/tech/aws.png",
    intro: [
      "AWS provides a wide range of cloud services, including computing power, storage options, and networking capabilities.",
      "It is a popular choice for deploying and managing scalable applications in the cloud.",
    ],
    link: "https://aws.amazon.com/",
    name: "AWS",
    since: "2015",
    slug: "aws",
    tag: "AWS",
  },
  {
    description:
      "Google Cloud Platform, a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
    experience: [
      "Utilized GCP in projects like RareMint and bitcashBank for scalable cloud infrastructure and services.",
    ],
    image: "/images/tech/gcloud.png",
    intro: [
      "Google Cloud Platform offers a suite of cloud computing services, providing infrastructure, platform, and software solutions.",
      "It is known for its scalability, reliability, and integration with Google's ecosystem.",
    ],
    link: "https://cloud.google.com/",
    name: "GCP",
    since: "2018",
    slug: "gcloud",
    tag: "GCP",
  },
  {
    description:
      "A collection of beautifully designed components built with Radix UI and Tailwind CSS.",
    experience: [
      "Implemented ShadcnUI in projects like BasilicEVM and bitlauncher for consistent, accessible UI components.",
      "Utilized ShadcnUI to create responsive and visually appealing interfaces, enhancing user experience across various applications.",
    ],
    image: "/images/tech/shadcn.png",
    intro: [
      "ShadcnUI provides accessible, customizable, and open-source components for building modern web applications.",
      "It combines the power of Radix UI's accessibility with the flexibility of Tailwind CSS's utility classes.",
    ],
    link: "https://ui.shadcn.com/",
    name: "ShadcnUI",
    since: "2021",
    slug: "shadcn",
    tag: "ShadcnUI",
  },
  {
    description:
      "Powerful asynchronous state management for fetching, caching, and updating data in React applications.",
    experience: [
      "Implemented TanStack Query in BasilicEVM and bitlauncher for efficient data fetching and caching.",
      "Utilized query invalidation and refetching strategies to keep UI data fresh and responsive.",
    ],
    image: "/images/tech/tanstack.png",
    intro: [
      "TanStack Query (formerly React Query) simplifies data fetching, caching, and state management.",
      "It provides tools for handling loading states, errors, and data synchronization.",
    ],
    link: "https://tanstack.com/query/latest",
    name: "TanStack Query",
    since: "2021",
    slug: "tanstack-query",
    tag: "TanStack Query",
  },
  {
    description:
      "A powerful form library for React applications, providing easy-to-use hooks for managing form state and validation.",
    experience: [
      "Implemented TanStack Form in projects like BasilicEVM and bitlauncher for efficient form state management and validation.",
      "Utilized TanStack Form to create dynamic and responsive forms, enhancing user experience.",
    ],
    image: "/images/tech/tanstack-form.png",
    intro: [
      "TanStack Form simplifies form management in React applications, offering hooks for state management and validation.",
      "It provides a flexible and extensible API for building complex forms with ease.",
    ],
    link: "https://tanstack.com/form/latest",
    name: "TanStack Form",
    since: "2022",
    slug: "tanstack-form",
    tag: "TanStack Form",
  },
  {
    description:
      "A starter kit for building modern web applications with TanStack libraries.",
    experience: [
      "Utilized TanStack Start in projects like BasilicEVM and bitlauncher for quick and efficient project setup.",
      "Leveraged TanStack Start to integrate TanStack libraries seamlessly, accelerating development workflows.",
    ],
    image: "/images/tech/tanstack-start.png",
    intro: [
      "TanStack Start provides a starter kit for building modern web applications using TanStack libraries.",
      "It includes pre-configured setups for popular tools and libraries, streamlining the development process.",
    ],
    link: "https://tanstack.com/start/latest",
    name: "TanStack Start",
    since: "2023",
    slug: "tanstack-start",
    tag: "TanStack Start",
  },
  {
    description:
      "A web standard for passwordless authentication using public key cryptography.",
    experience: [
      "Set up WebAuthn integration with the EOSIO blockchain for a 'walletless' experience in bitcashBank.",
      "Implemented secure authentication flows using biometrics and hardware security keys.",
    ],
    image: "/images/tech/webauthn.png",
    intro: [
      "WebAuthn enables strong, attested, and passwordless authentication for web applications.",
      "It leverages hardware security keys, biometrics, and platform authenticators for secure login.",
    ],
    link: "https://webauthn.io/",
    name: "WebAuthn",
    since: "2021",
    slug: "webauthn",
    tag: "WebAuthN",
  },

  {
    description:
      "A decentralized platform that enables developers to build and deploy smart contracts and decentralized applications.",
    experience: [
      "Utilized Ethereum in projects like Knowledge.io and RareMint for building decentralized applications and smart contracts.",
    ],
    image: "/images/tech/ethereum.png",
    intro: [
      "Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications.",
      "It is widely used for its flexibility and support for a wide range of decentralized applications.",
    ],
    link: "https://ethereum.org/",
    name: "Ethereum",
    since: "2017",
    slug: "ethereum",
    tag: "Ethereum",
  },

  {
    description:
      "Non-Fungible Tokens, unique digital assets that represent ownership of a specific item or piece of content.",
    experience: [
      "Implemented NFT solutions in projects like RareMint and ZTX for digital asset creation and trading.",
    ],
    image: "/images/tech/nft.png",
    intro: [
      "NFTs are unique digital assets that represent ownership of a specific item or piece of content, often used in art, gaming, and collectibles.",
      "They are built on blockchain technology, ensuring authenticity and provenance.",
    ],
    link: "https://en.wikipedia.org/wiki/Non-fungible_token",
    name: "NFT",
    since: "2022",
    slug: "nft",
    tag: "NFT",
  },

  {
    description:
      "An open source Firebase alternative providing all the backend features you need to build a product.",
    experience: [
      "Implemented Supabase in bitlauncher for real-time data subscriptions and user authentication.",
      "Developed a transaction data indexing system using Supabase for efficient querying and analytics.",
      "Utilized Supabase's real-time capabilities for building responsive and interactive applications.",
    ],
    image: "/images/tech/supabase.png",
    intro: [
      "Supabase combines the power of PostgreSQL with modern developer tools for building applications quickly.",
      "It offers authentication, real-time subscriptions, and database management in a single platform.",
    ],
    link: "https://supabase.io/",
    name: "Supabase",
    since: "2022",
    slug: "supabase",
    tag: "Supabase",
  },
  {
    description:
      "A CSS-in-JS library with near-zero runtime, SSR support, and a great developer experience.",
    experience: [
      "Used Stitches in bitcashBank for creating a themeable and consistent UI design system.",
      "Implemented component variants to create flexible and reusable UI elements across the application.",
    ],
    image: "/images/tech/stitches.png",
    intro: [
      "Stitches provides a way to write CSS with JavaScript with excellent performance characteristics.",
      "It offers a powerful theming solution and variant API for building consistent UI components.",
    ],
    link: "https://stitches.dev/",
    name: "Stitches",
    since: "2021",
    slug: "stitches",
    tag: "Stitches",
  },
  {
    description:
      "A small, fast, and scalable state management solution for React applications.",
    experience: [
      "Implemented Zustand in bitcashBank for efficient state management across components.",
      "Utilized Zustand's middleware capabilities to enhance application state with persistence and logging.",
    ],
    image: "/images/tech/zustand.png",
    intro: [
      "Zustand is a minimalistic state management library for React that uses hooks.",
      "It provides a simple API for creating and consuming global state without boilerplate.",
    ],
    link: "https://github.com/pmndrs/zustand",
    name: "Zustand",
    since: "2021",
    slug: "zustand",
    tag: "Zustand",
  },
  {
    description:
      "TypeScript-first schema validation with static type inference.",
    experience: [
      "Utilized Zod in BasilicEVM and bitlauncher for form validation and API request/response typing.",
      "Implemented schema validation to ensure data integrity and improve error handling in applications.",
    ],
    image: "/images/tech/zod.png",
    intro: [
      "Zod is a schema declaration and validation library designed for TypeScript.",
      "It allows for building type-safe applications with runtime validation.",
    ],
    link: "https://zod.dev/",
    name: "Zod",
    since: "2022",
    slug: "zod",
    tag: "Zod",
  },

  {
    description:
      "A type-safe URL query state management library for Next.js applications.",
    experience: [
      "Used nuqs in BasilicEVM and bitlauncher for managing filterable and shareable UI states.",
      "Implemented URL-based state management to improve user experience with shareable application states.",
    ],
    image: "/images/tech/nuqs.png",
    intro: [
      "nuqs provides a way to store and synchronize state in URL query parameters with type safety.",
      "It enables shareable URLs with application state and seamless integration with Next.js.",
    ],
    link: "https://nuqs.47ng.com/",
    name: "nuqs",
    since: "2023",
    slug: "nuqs",
    tag: "nuqs",
  },
  {
    description:
      "A developer-first open source background jobs framework for TypeScript.",
    experience: [
      "Utilized Trigger.dev in bitlauncher for scheduling background tasks and processing events.",
      "Implemented event-driven workflows to automate processes and improve application responsiveness.",
    ],
    image: "/images/tech/trigger.png",
    intro: [
      "Trigger.dev is a framework for creating and managing background jobs with TypeScript.",
      "It provides a simple way to run code on schedules, webhooks, and in response to events.",
    ],
    link: "https://trigger.dev/",
    name: "Trigger.dev",
    since: "2023",
    slug: "trigger",
    tag: "Trigger",
  },
  {
    description:
      "An open-source infrastructure as code software tool for building, changing, and versioning infrastructure safely and efficiently.",
    experience: [
      "Used Terraform at EOS Costa Rica for infrastructure provisioning and management.",
      "Built the architecture for Grant Thornton's custom private blockchain using Terraform and Azure.",
    ],
    image: "/images/tech/terraform.png",
    intro: [
      "Terraform enables you to define and provision infrastructure using a declarative configuration language.",
      "It supports multiple cloud providers and services, allowing for consistent infrastructure deployment.",
    ],
    link: "https://www.terraform.io/",
    name: "Terraform",
    since: "2019",
    slug: "terraform",
    tag: "Terraform",
  },
  {
    description:
      "A predictable state container for JavaScript apps, helping you write applications that behave consistently.",
    experience: [
      "Implemented Redux in the Tractor Supply mobile app for state management.",
      "Utilized Redux middleware for handling asynchronous operations and side effects in applications.",
    ],
    image: "/images/tech/redux.png",
    intro: [
      "Redux provides a centralized store for state management in JavaScript applications.",
      "It follows a unidirectional data flow pattern, making state changes predictable and traceable.",
    ],
    link: "https://redux.js.org/",
    name: "Redux",
    since: "2016",
    slug: "redux",
    tag: "Redux",
  },
  {
    description:
      "A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.",
    experience: [
      "Implemented serverless architectures in projects like Knowledge.io for scalable and efficient application deployment.",
    ],
    image: "/images/tech/serverless.png",
    intro: [
      "Serverless computing allows developers to build and run applications without managing the underlying infrastructure.",
      "It is known for its scalability and cost-effectiveness, enabling developers to focus on code rather than server management.",
    ],
    link: "https://www.serverless.com/",
    name: "Serverless",
    since: "2015",
    slug: "serverless",
    tag: "Serverless",
  },
  {
    description:
      "A platform for developing, shipping, and running applications in containers.",
    experience: [
      "Utilized Docker in projects like ChainGraph and Photo and Go for containerized application deployment and management.",
    ],
    image: "/images/tech/docker.png",
    intro: [
      "Docker allows developers to package applications and their dependencies into containers, ensuring consistency across environments.",
      "It simplifies deployment and scaling of applications, making it a popular choice for modern DevOps practices.",
    ],
    link: "https://www.docker.com/",
    name: "Docker",
    since: "2013",
    slug: "docker",
    tag: "Docker",
  },
  {
    description:
      "A library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
    experience: [
      "Implemented RXJS in projects like ChainGraph for efficient data stream management and real-time updates.",
    ],
    image: "/images/tech/rxjs.png",
    intro: [
      "RXJS is a library for reactive programming using Observables, enabling developers to compose asynchronous and event-based programs.",
      "It is widely used in modern web development for handling asynchronous data streams.",
    ],
    link: "https://rxjs.dev/",
    name: "RXJS",
    since: "2020",
    slug: "rxjs",
    tag: "RXJS",
  },
  {
    description: "A set of tools and services for React Native development.",
    experience: [
      "Utilized Expo in Fantasy Top Shots to streamline development and deployment processes, enhancing the mobile app's performance.",
      "Leveraged Expo's managed workflow to accelerate the development of mobile applications, ensuring efficient testing and deployment.",
    ],
    image: "/images/tech/expo.png",
    intro: [
      "Expo provides a set of tools and services to streamline React Native development, simplifying the process of building, deploying, and testing applications.",
      "It enhances the React Native development experience by offering a managed workflow.",
    ],
    link: "https://expo.dev/",
    name: "Expo",
    since: "2017",
    slug: "expo",
    tag: "Expo",
  },
  {
    description: "A utility-first CSS framework for rapid UI development.",
    experience: [
      "Used Tailwind CSS in projects like ZTX and Fantasy Top Shots for efficient and responsive UI design, focusing on clarity and simplicity.",
      "Implemented Tailwind CSS to enhance the user experience, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/tailwind.png",
    intro: [
      "Tailwind CSS provides a set of utility classes that allow developers to build custom designs without leaving their HTML.",
      "It is known for its flexibility and ability to create responsive and modern user interfaces quickly.",
    ],
    link: "https://tailwindcss.com/",
    name: "Tailwind CSS",
    since: "2022",
    slug: "tailwind",
    tag: "Tailwind",
  },
  {
    description:
      "A blockchain protocol designed for high performance and scalability, supporting decentralized applications.",
    experience: [
      "Worked with Antelope in projects like bitcashBank and ChainGraph for blockchain application development.",
    ],
    image: "/images/tech/antelope.png",
    intro: [
      "Antelope is a blockchain protocol designed for high performance and scalability, supporting decentralized applications.",
      "It offers a robust environment for building and deploying blockchain solutions.",
    ],
    link: "https://antelope.io/",
    name: "Antelope",
    since: "2018",
    slug: "antelope",
    tag: "Antelope",
  },
  {
    description:
      "A general-purpose programming language created as an extension of the C programming language.",
    experience: [
      "Utilized C++ in projects like bitcashBank and EOS Costa Rica for high-performance application development.",
    ],
    image: "/images/tech/cpp.png",
    intro: [
      "C++ is a general-purpose programming language known for its performance and efficiency, widely used in system software, game development, and real-time simulations.",
      "It supports object-oriented, procedural, and generic programming paradigms.",
    ],
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    name: "C++",
    since: "2018",
    slug: "cpp",
    tag: "C++",
  },
  {
    description:
      "A blockchain platform designed for the development of decentralized applications (dApps).",
    experience: [
      "Worked with EOS in projects like Emanate and Make Sense Labs for blockchain application development and integration.",
    ],
    image: "/images/tech/eos.png",
    intro: [
      "EOS is a blockchain platform designed for the development of decentralized applications (dApps), known for its scalability and flexibility.",
      "It provides a robust environment for building and deploying blockchain solutions with high performance.",
    ],
    link: "https://eos.io/",
    name: "EOS",
    since: "2018",
    slug: "eos",
    tag: "EOS",
  },
  {
    description:
      "A fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.",
    experience: [
      "Utilized Flow Blockchain in projects like Fantasy Top Shots for NFT integration and gaming applications.",
    ],
    image: "/images/tech/flow.png",
    intro: [
      "Flow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.",
      "It is known for its scalability and ease of use, making it a popular choice for NFT and gaming applications.",
    ],
    link: "https://www.onflow.org/",
    name: "Flow Blockchain",
    since: "2020",
    slug: "flow",
    tag: "Flow",
  },

  {
    description:
      "A network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.",
    experience: [
      "Worked with Polkadot in projects like Substrate Contracts UI for blockchain interoperability and smart contract development.",
    ],
    image: "/images/tech/polkadot.png",
    intro: [
      "Polkadot is a network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.",
      "It is designed to enable a web where our data is our own and isn't stored on a server owned by an intermediary company.",
    ],
    link: "https://polkadot.network/",
    name: "Polkadot",
    since: "2023",
    slug: "polkadot",
    tag: "Polkadot",
  },
  {
    description:
      "A framework for building blockchains, providing a set of tools and libraries for blockchain development.",
    experience: [
      "Utilized Substrate in projects like Substrate Contracts UI for building and deploying custom blockchains.",
    ],
    image: "/images/tech/substrate.png",
    intro: [
      "Substrate is a framework for building blockchains, providing a set of tools and libraries for blockchain development.",
      "It is known for its flexibility and support for building custom blockchains with ease.",
    ],
    link: "https://substrate.dev/",
    name: "Substrate",
    since: "2023",
    slug: "substrate",
    tag: "Substrate",
  },
  {
    description:
      "A platform for creating, managing, and distributing NFTs, providing tools and infrastructure for NFT development.",
    experience: [
      "Used Niftory in projects like Wizard World for NFT creation and management.",
    ],
    image: "/images/tech/niftory.png",
    intro: [
      "Niftory provides a platform for creating, managing, and distributing NFTs, offering tools and infrastructure for NFT development.",
      "It simplifies the process of building and deploying NFT applications.",
    ],
    link: "https://niftory.com/",
    name: "Niftory",
    since: "2022",
    slug: "niftory",
    tag: "Niftory",
  },
  {
    description:
      "An AI model developed by OpenAI for generating images from textual descriptions.",
    experience: [
      "Implemented Dalle in projects like Wizard World for AI-driven image generation.",
    ],
    image: "/images/tech/dalle.png",
    intro: [
      "Dalle is an AI model developed by OpenAI for generating images from textual descriptions, enabling creative and artistic applications.",
      "It is widely used for generating unique and creative visual content.",
    ],
    link: "https://openai.com/dall-e/",
    name: "Dalle",
    since: "2022",
    slug: "dalle",
    tag: "Dalle",
  },
  {
    description:
      "An AI research and deployment company, known for developing advanced AI models and technologies.",
    experience: [
      "Implemented OpenAI technologies in projects like Wizard World for AI-driven applications and content generation.",
    ],
    image: "/images/tech/openai.png",
    intro: [
      "OpenAI is an AI research and deployment company, known for developing advanced AI models and technologies.",
      "It is widely recognized for its contributions to AI research and development, including models like GPT-3 and Dalle.",
    ],
    link: "https://openai.com/",
    name: "OpenAI",
    since: "2022",
    slug: "openai",
    tag: "OpenAI",
  },
  {
    description:
      "Technologies and methods for recognizing individuals based on physical or behavioral characteristics.",
    experience: [
      "Implemented biometric authentication in projects like Wink for enhanced security and user verification.",
    ],
    image: "/images/tech/biometrics.png",
    intro: [
      "Biometrics involves technologies and methods for recognizing individuals based on physical or behavioral characteristics.",
      "It is widely used in security systems, authentication, and identity verification.",
    ],
    link: "https://en.wikipedia.org/wiki/Biometrics",
    name: "Biometrics",
    since: "2020",
    slug: "biometrics",
    tag: "Biometrics",
  },
  {
    description: "A structural framework for dynamic web apps.",
    experience: [
      "Used AngularJS in projects like ARINC Microfids for building interactive and dynamic web applications, focusing on user experience and performance.",
      "Utilized AngularJS to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/angularjs.png",
    intro: [
      "AngularJS lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.",
      "It is fully extensible and works well with other libraries.",
    ],
    link: "https://angularjs.org/",
    name: "AngularJS",
    since: "2018",
    slug: "angularjs",
    tag: "AngularJS",
  },
  {
    description:
      "A document database with the scalability and flexibility that you want with the querying and indexing that you need.",
    experience: [
      "Implemented MongoDB in projects like Eat Arcade for efficient data management and querying.",
      "Utilized MongoDB to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/mongodb.png",
    intro: [
      "MongoDB is a document database designed for ease of development and scaling.",
      "It is known for its flexibility and scalability, making it a popular choice for modern web applications.",
    ],
    link: "https://www.mongodb.com/",
    name: "MongoDB",
    since: "2018",
    slug: "mongodb",
    tag: "MongoDB",
  },
  {
    description:
      "A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
    experience: [
      "Deployed applications on Heroku in projects like Eat Arcade for scalable and efficient cloud hosting.",
    ],
    image: "/images/tech/heroku.png",
    intro: [
      "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
      "It is known for its ease of use and support for a wide range of programming languages and frameworks.",
    ],
    link: "https://www.heroku.com/",
    name: "Heroku",
    since: "2018",
    slug: "heroku",
    tag: "Heroku",
  },
  {
    description:
      "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    experience: [
      "Utilized Bootstrap in projects like Gridium and Jockey Hollow Bar and Kitchen for responsive design and layout, focusing on user experience and performance.",
      "Implemented Bootstrap to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/bootstrap.png",
    intro: [
      "Bootstrap contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      "It is widely used for its responsive grid system and pre-designed components.",
    ],
    link: "https://getbootstrap.com/",
    name: "Bootstrap",
    since: "2018",
    slug: "bootstrap",
    tag: "Bootstrap",
  },
  {
    description:
      "A technology company that builds economic infrastructure for the internet.",
    experience: [
      "Integrated Stripe in projects like Eat Arcade for seamless payment processing and user transactions.",
    ],
    image: "/images/tech/stripe.png",
    intro: [
      "Stripe provides a suite of payment APIs that powers commerce for online businesses of all sizes.",
      "It is known for its ease of integration and support for a wide range of payment methods.",
    ],
    link: "https://stripe.com/",
    name: "Stripe",
    since: "2018",
    slug: "stripe",
    tag: "Stripe",
  },
  {
    description:
      "A cloud communications platform for building SMS, Voice & Messaging applications on an API.",
    experience: [
      "Used Twilio in projects like Eat Arcade for SMS-based user engagement and notifications.",
    ],
    image: "/images/tech/twilio.png",
    intro: [
      "Twilio provides APIs for sending and receiving messages, making phone calls, and performing other communication functions.",
      "It is widely used for integrating communication capabilities into applications.",
    ],
    link: "https://www.twilio.com/",
    name: "Twilio",
    since: "2018",
    slug: "twilio",
    tag: "Twilio",
  },
  {
    description:
      "A high-level, just-in-time compiled, object-oriented programming language.",
    experience: [
      "Utilized JavaScript in projects like Staples and Gridium for building interactive and dynamic web applications.",
      "Implemented JavaScript to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/javascript.png",
    intro: [
      "JavaScript is a versatile programming language that is widely used for web development, enabling interactive and dynamic web pages.",
      "It is known for its flexibility and support for a wide range of programming paradigms.",
    ],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    name: "JavaScript",
    since: "2009",
    slug: "javascript",
    tag: "JavaScript",
  },
  {
    description:
      "A style sheet language used for describing the presentation of a document written in a markup language like HTML.",
    experience: [
      "Utilized CSS in projects like Staples and Gridium for styling and layout, focusing on user experience and performance.",
      "Implemented CSS to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/css.png",
    intro: [
      "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
      "It is known for its ability to separate content from design, enabling responsive and visually appealing web pages.",
    ],
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    name: "CSS",
    since: "2009",
    slug: "css",
    tag: "CSS",
  },
  {
    description:
      "A compact, modular, Object-Oriented JavaScript framework designed for the intermediate to advanced JavaScript developer.",
    experience: [
      "Implemented Mootools in projects like Staples for building interactive and dynamic web features.",
    ],
    image: "/images/tech/mootools.png",
    intro: [
      "Mootools is a JavaScript framework that provides a rich set of features for building web applications, including DOM manipulation, event handling, and more.",
      "It is known for its lightweight and modular architecture.",
    ],
    link: "https://mootools.net/",
    name: "Mootools",
    since: "2009",
    slug: "mootools",
    tag: "Mootools",
  },
  {
    description:
      "Tools and libraries for creating interactive and dynamic data visualizations.",
    experience: [
      "Implemented data charts in projects like Gridium for interactive and dynamic data visualization.",
    ],
    image: "/images/tech/data-charts.png",
    intro: [
      "Data charts provide a way to visualize data in a clear and interactive manner, making it easier to understand and analyze.",
      "They are widely used in applications that require data visualization and analysis.",
    ],
    link: "https://www.chartjs.org/",
    name: "Data Charts",
    since: "2018",
    slug: "data-charts",
    tag: "Data Charts",
  },
  {
    description:
      "A web application framework written in Ruby, designed to make programming web applications easier.",
    experience: [
      "Developed applications like Tikr and ARINC Microfids using Ruby on Rails for robust backend solutions, focusing on simplicity and maintainability.",
      "Leveraged Ruby on Rails to build scalable and efficient web applications, adhering to the principle of optimizing later.",
    ],
    image: "/images/tech/rails.png",
    intro: [
      "Ruby on Rails is a full-stack web application framework that emphasizes convention over configuration.",
      "It is known for its developer-friendly syntax and rapid development capabilities.",
    ],
    link: "https://rubyonrails.org/",
    name: "Ruby on Rails",
    since: "2009",
    slug: "rails",
    tag: "Ruby on Rails",
  },
  {
    description:
      "A publish-subscribe messaging system based on the Bayeux protocol.",
    experience: [
      "Used Faye in projects like ARINC Microfids for real-time messaging and data updates, focusing on user experience and performance.",
      "Utilized Faye to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/faye.png",
    intro: [
      "Faye is a messaging system that provides a simple and efficient way to implement real-time messaging in web applications.",
      "It is known for its ease of use and support for the Bayeux protocol.",
    ],
    link: "https://faye.jcoglan.com/",
    name: "Faye",
    since: "2009",
    slug: "faye",
    tag: "Faye",
  },
  {
    description: "A backward-compatible language extension for CSS.",
    experience: [
      "Utilized LESS in projects like ARINC Microfids for efficient and maintainable stylesheet development.",
    ],
    image: "/images/tech/less.png",
    intro: [
      "LESS is a CSS pre-processor that extends the capabilities of CSS with variables, mixins, and functions.",
      "It simplifies the process of writing and maintaining stylesheets, making them more readable and reusable.",
    ],
    link: "https://lesscss.org/",
    name: "LESS",
    since: "2009",
    slug: "less",
    tag: "LESS",
  },
  {
    description:
      "A free and open-source content management system (CMS) based on PHP and MySQL.",
    experience: [
      "Utilized Wordpress in projects like Capoeira Abolicao and Panini for building and managing websites, focusing on simplicity and flexibility.",
      "Implemented Wordpress to enhance web applications, aligning with the principle of user experience first.",
    ],
    image: "/images/tech/wordpress.png",
    intro: [
      "Wordpress is a free and open-source content management system (CMS) based on PHP and MySQL.",
      "It is known for its ease of use and support for a wide range of plugins and themes, making it a popular choice for building websites and blogs.",
    ],
    link: "https://wordpress.org/",
    name: "Wordpress",
    since: "2009",
    slug: "wordpress",
    tag: "Wordpress",
  },
  {
    description:
      "Software applications that enable users to create, manage, and modify content on websites without specialized technical knowledge.",
    experience: [
      "Developed custom CMS solutions for clients like ITS InfoCom, streamlining content management and updates.",
      "Implemented and customized various CMS platforms to meet specific client requirements and enhance user experience.",
      "Utilized DatoCMS in the BitLauncher project for efficient content management and internationalization.",
    ],
    image: "/images/tech/cms.png",
    intro: [
      "Content Management Systems (CMS) provide tools for creating and managing digital content, often with user-friendly interfaces.",
      "They enable non-technical users to maintain websites and digital platforms without requiring coding knowledge.",
    ],
    link: "https://en.wikipedia.org/wiki/Content_management_system",
    name: "Content Management Systems",
    since: "2009",
    slug: "cms",
    tag: "CMS",
  },
  {
    description:
      "A headless CMS that offers a flexible content management solution for modern websites and applications.",
    experience: [
      "Implemented DatoCMS in the BitLauncher project for efficient content management and internationalization.",
      "Leveraged DatoCMS's GraphQL API to create a dynamic and multilingual user interface, enhancing the global reach of the platform.",
    ],
    image: "/images/tech/datocms.png",
    intro: [
      "DatoCMS is a headless content management system that provides a flexible and powerful solution for managing content across multiple platforms.",
      "It offers a user-friendly interface, robust API, and seamless integration with modern development frameworks.",
    ],
    link: "https://www.datocms.com/",
    name: "DatoCMS",
    since: "2020",
    slug: "datocms",
    tag: "DatoCMS",
  },

  {
    description:
      "ViroAR is a React Native platform for building cross-platform AR applications, offering tools for interactive 3D experiences.",
    experience: [
      "Developed an augmented reality feature for the Tractor Supply mobile app using ViroAR.",
      "Implemented interactive 3D product previews to enhance the shopping experience.",
    ],
    image: "/images/tech/viroar.png",
    intro: [
      "ViroAR provides tools and components for creating augmented reality experiences in React Native.",
      "It enables developers to build cross-platform AR applications with familiar React patterns.",
    ],
    link: "https://viromedia.com/viroreact",
    name: "ViroAR",
    since: "2019",
    slug: "viroar",
    tag: "ViroAR",
  },
  {
    description:
      "An open-source, in-memory data structure store used as a database, cache, and message broker.",
    experience: [
      "Utilized Redis for caching and real-time data processing in projects like BitcashBank and LegalAgent.",
    ],
    image: "/images/tech/redis.png",
    intro: [
      "Redis is a high-performance, low-latency key-value store that supports various data structures.",
      "It is widely used for caching, session management, real-time analytics, and message queuing.",
    ],
    link: "https://redis.io/",
    name: "Redis",
    since: "2015",
    slug: "redis",
    tag: "Redis",
  },
];
