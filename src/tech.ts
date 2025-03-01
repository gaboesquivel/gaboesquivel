import type { TechStackItem } from "./types";

export const techStack: TechStackItem[] = [
	{
		name: "TypeScript",
		icon: "typescript",
		tag: "TypeScript",
		image: "/images/tech/typescript.png",
		description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
		link: "https://www.typescriptlang.org/",
		since: "2018",
		intro: [
			"TypeScript is a superset of JavaScript that adds static types, enhancing code quality and maintainability.",
			"It is widely used in modern web development for building scalable and robust applications."
		],
		experience: [
			"Extensively used TypeScript for ensuring type safety and enhancing developer experience across various projects.",
			"Implemented TypeScript to build scalable and robust applications, leveraging its static typing and modern JavaScript features."
		],
	},
	{
		name: "Solidity",
		icon: "solidity",
		tag: "Solidity",
		image: "/images/tech/solidity.png",
		description: "A contract-oriented programming language for writing smart contracts on Ethereum.",
		link: "https://soliditylang.org/",
		since: "2017",
		intro: [
			"Solidity is the primary language for writing smart contracts on Ethereum and other EVM-compatible blockchains.",
			"It is designed to target the Ethereum Virtual Machine (EVM) and is influenced by C++, Python, and JavaScript."
		],
		experience: [
			"Developed smart contracts for the Knowledge ICO, focusing on security and efficiency, embodying the principle of keeping it simple.",
			"Contributed to the development of asset-backed NFTs on Ethereum for RareMint, demonstrating the transformative power of blockchain technology.",
			"Utilized Solidity in projects like BasilicEVM and bitlauncher for smart contract development and blockchain interactions."
		],
	},
	{
		name: "Foundry",
		icon: "foundry",
		tag: "Foundry",
		image: "/images/tech/foundry.png",
		description: "A blazing fast, portable, and modular toolkit for Ethereum application development.",
		link: "https://getfoundry.sh/",
		since: "2024",
		intro: [
			"Foundry is a toolkit for Ethereum application development, known for its speed and modularity.",
			"It provides a suite of tools for building, testing, and deploying smart contracts."
		],
		experience: [
			"Utilized Foundry in projects like BasilicEVM for efficient smart contract development and testing."
		],
	},
	{
		name: "Next.js",
		icon: "nextjs",
		tag: "NextJS",
		image: "/images/tech/nextjs.png",
		description: "A React framework for production, providing hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
		link: "https://nextjs.org/",
		since: "2020",
		intro: [
			"Next.js is a popular React framework that enables server-side rendering and static site generation for React applications.",
			"It is known for its performance optimizations and ease of use in building scalable web applications."
		],
		experience: [
			"Utilized Next.js in BasilicEVM for building a performance-optimized development stack, enhancing scalability and maintainability.",
			"Implemented server-side rendering and static site generation in projects like bitlauncher, dBoard, and RareMint to improve load times and SEO.",
			"Enhanced user experience in Masterbots and ZTX by leveraging Next.js features for seamless integration with blockchain technologies."
		],
	},
	{
		name: "Ponder",
		icon: "ponder",
		tag: "Ponder",
		image: "/images/tech/ponder.png",
		description: "A tool for indexing and querying blockchain data.",
		link: "https://ponder.io/",
		since: "2024",
		intro: [
			"Ponder is a powerful tool for indexing and querying blockchain data, making it easier to build responsive dApps.",
			"It provides real-time data processing capabilities, enhancing the performance of decentralized applications."
		],
		experience: [
			"Utilized Ponder in projects like BasilicEVM for efficient data indexing and real-time updates.",
			"Implemented Ponder to improve data retrieval and processing in blockchain applications."
		],
	},
	{
		name: "PostgreSQL",
		icon: "postgresql",
		tag: "Postgres",
		image: "/images/tech/postgresql.png",
		description: "A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.",
		link: "https://www.postgresql.org/",
		since: "2018",
		intro: [
			"PostgreSQL is a highly stable database management system, used by many companies and organizations to store and manage their data.",
			"It supports advanced data types and performance optimization features, making it a popular choice for complex applications."
		],
		experience: [
			"Implemented PostgreSQL in projects like BitLauncher and RareMint for efficient data management and querying.",
			"Utilized PostgreSQL in projects like EOS Costa Rica and bitcashBank for robust database solutions."
		],
	},
	{
		name: "Viem",
		icon: "viem",
		tag: "Viem",
		image: "/images/tech/viem.png",
		description: "A library for interacting with Ethereum and other EVM-compatible blockchains.",
		link: "https://viem.io/",
		since: "2020",
		intro: [
			"Viem is a modern library designed to simplify interactions with Ethereum and other EVM-compatible blockchains.",
			"It provides a robust set of tools for developers to build decentralized applications with ease."
		],
		experience: [
			"Utilized Viem in projects like BasilicEVM for efficient blockchain interactions and data processing.",
			"Implemented Viem to enhance the development workflow, focusing on performance and scalability.",
			"Used Viem in projects like bitlauncher for seamless blockchain integration."
		],
	},
	{
		name: "Wagmi",
		icon: "wagmi",
		tag: "Wagmi",
		image: "/images/tech/wagmi.png",
		description: "A collection of React hooks for Ethereum.",
		link: "https://wagmi.sh/",
		since: "2020",
		intro: [
			"Wagmi provides a set of React hooks that simplify the process of building Ethereum applications.",
			"It is designed to work seamlessly with popular libraries like ethers.js and viem."
		],
		experience: [
			"Implemented Wagmi in projects like BasilicEVM to streamline Ethereum application development.",
			"Used Wagmi to enhance user experience and simplify blockchain interactions in React applications.",
			"Utilized Wagmi in projects like bitlauncher for efficient Ethereum interactions."
		],
	},
	{
		name: "EVM",
		icon: "evm",
		tag: "EVM",
		image: "/images/tech/evm.png",
		description: "The Ethereum Virtual Machine, a runtime environment for smart contracts in Ethereum.",
		link: "https://ethereum.org/en/developers/docs/evm/",
		since: "2017",
		intro: [
			"The EVM is the runtime environment for smart contracts in Ethereum, enabling decentralized computation.",
			"It is a key component of the Ethereum blockchain, executing smart contracts and maintaining consensus."
		],
		experience: [
			"Worked with EVM in projects like BasilicEVM and RareMint for smart contract execution and blockchain interactions.",
			"Utilized EVM in projects like bitcashBank for decentralized application development."
		],
	},
	{
		name: "ThirdWeb",
		icon: "thirdweb",
		tag: "ThirdWeb",
		image: "/images/tech/thirdweb.png",
		description: "A platform for building and deploying Web3 applications with ease.",
		link: "https://thirdweb.com/",
		since: "2024",
		intro: [
			"ThirdWeb provides tools and infrastructure for building Web3 applications, simplifying the development process.",
			"It offers a range of features for deploying smart contracts and managing blockchain interactions."
		],
		experience: [
			"Utilized ThirdWeb in projects like BasilicEVM for streamlined Web3 application development."
		],
	},
	{
		name: "AI",
		icon: "ai",
		tag: "AI",
		image: "/images/tech/ai.png",
		description: "Artificial Intelligence technologies and tools for building intelligent applications.",
		link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
		since: "2018",
		intro: [
			"AI encompasses a range of technologies and tools for building intelligent applications that can learn and adapt.",
			"It is widely used in various fields, including natural language processing, computer vision, and robotics."
		],
		experience: [
			"Implemented AI solutions in projects like Masterbots and BitLauncher for enhanced user experiences and automation.",
			"Utilized AI technologies in projects like Wizard World for AI-driven applications and content generation."
		],
	},
	{
		name: "EthersJS",
		icon: "ethersjs",
		tag: "Ethers",
		image: "/images/tech/ethersjs.png",
		description: "A library for interacting with the Ethereum blockchain and its ecosystem.",
		link: "https://docs.ethers.io/v5/",
		since: "2018",
		intro: [
			"EthersJS is a library designed to interact with the Ethereum blockchain, providing a simple and consistent interface for developers.",
			"It is widely used for its ease of use and comprehensive documentation, making it a popular choice for Ethereum development."
		],
		experience: [
			"Utilized EthersJS in projects like BasilicEVM for seamless interaction with the Ethereum blockchain.",
			"Implemented EthersJS in RareMint for efficient smart contract interactions and NFT data indexing.",
			"Developed a WebGL EVM wallet connector using EthersJS at ZTX, enabling secure blockchain transactions within the metaverse platform."
		],
	},
	{
		name: "Alchemy",
		icon: "alchemy",
		tag: "Alchemy",
		image: "/images/tech/alchemy.png",
		description: "A blockchain development platform that provides infrastructure and tools for building decentralized applications.",
		link: "https://www.alchemy.com/",
		since: "2020",
		intro: [
			"Alchemy offers a suite of tools and infrastructure for building decentralized applications on blockchain networks.",
			"It is known for its reliability and performance, supporting developers in building scalable blockchain solutions."
		],
		experience: [
			"Used Alchemy in projects like BitLauncher for reliable blockchain infrastructure and development support."
		],
	},
	{
		name: "Hardhat",
		icon: "hardhat",
		tag: "Hardhat",
		image: "/images/tech/hardhat.png",
		description: "A development environment for Ethereum software, providing tools for building and testing smart contracts.",
		link: "https://hardhat.org/",
		since: "2020",
		intro: [
			"Hardhat is a development environment for Ethereum software, offering tools for building and testing smart contracts.",
			"It is widely used for its flexibility and support for modern Ethereum development workflows."
		],
		experience: [
			"Utilized Hardhat in projects like BitLauncher for smart contract development and testing."
		],
	},
	{
		name: "Node.js",
		icon: "nodejs",
		tag: "NodeJS",
		image: "/images/tech/nodejs.png",
		description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications.",
		link: "https://nodejs.org/",
		since: "2009",
		intro: [
			"Node.js is known for its event-driven, non-blocking I/O model, which makes it lightweight and efficient for building web servers and applications.",
			"It is widely used for developing server-side and networking applications."
		],
		experience: [
			"Founded Costa Rica JS, a meetup group that became Central America's largest JavaScript community, promoting open-source and collaborative development.",
			"Utilized Node.js in projects like Eat Arcade and 4Tius Fitness Data Tracker for building scalable backend services, adhering to the principle of keeping it simple.",
			"Contributed to the development of decentralized applications like Emanate and Sense Chat, leveraging Node.js for efficient and secure communication.",
			"Implemented Node.js in projects like Wink for server-side development and real-time data processing."
		],
	},
	{
		name: "GraphQL",
		icon: "graphql",
		tag: "GraphQL",
		image: "/images/tech/graphql.png",
		description: "A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
		link: "https://graphql.org/",
		since: "2018",
		intro: [
			"GraphQL provides a more efficient, powerful, and flexible alternative to REST, allowing clients to request exactly the data they need.",
			"It is widely used in modern web applications for its ability to streamline data fetching and improve performance."
		],
		experience: [
			"Implemented GraphQL in projects like ChainGraph and dBoard for efficient data querying and real-time updates.",
			"Utilized GraphQL in projects like EOS Costa Rica for flexible and efficient API development."
		],
	},
	{
		name: "AI SDK",
		icon: "ai-sdk",
		tag: "AI SDK",
		image: "/images/tech/ai-sdk.png",
		description: "Software Development Kits for integrating AI capabilities into applications.",
		link: "https://en.wikipedia.org/wiki/Software_development_kit",
		since: "2020",
		intro: [
			"AI SDKs provide tools and libraries for integrating AI capabilities into applications, enhancing functionality and user experience.",
			"They are used in various applications, from chatbots to data analysis and automation."
		],
		experience: [
			"Implemented AI SDKs in projects like Masterbots for advanced AI-driven features and automation."
		],
	},
	{
		name: "LLMs",
		icon: "llms",
		tag: "LLMs",
		image: "/images/tech/llms.png",
		description: "Large Language Models used for natural language processing and understanding.",
		link: "https://en.wikipedia.org/wiki/Language_model",
		since: "2020",
		intro: [
			"LLMs are advanced models used for natural language processing, enabling applications to understand and generate human-like text.",
			"They are widely used in chatbots, translation services, and content generation."
		],
		experience: [
			"Utilized LLMs in projects like Masterbots for enhanced natural language processing and user interaction."
		],
	},
	{
		name: "WebGL",
		icon: "webgl",
		tag: "WebGL",
		image: "/images/tech/webgl.png",
		description: "A JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser.",
		link: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",
		since: "2018",
		intro: [
			"WebGL is a powerful API for rendering 3D and 2D graphics in web browsers, enabling interactive visual experiences.",
			"It is widely used in gaming, data visualization, and interactive web applications."
		],
		experience: [
			"Utilized WebGL in projects like ZTX for creating immersive 3D environments and visualizations."
		],
	},
	{
		name: "Ethereum",
		icon: "ethereum",
		tag: "Ethereum",
		image: "/images/tech/ethereum.png",
		description: "A decentralized platform that enables developers to build and deploy smart contracts and decentralized applications.",
		link: "https://ethereum.org/",
		since: "2017",
		intro: [
			"Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications.",
			"It is widely used for its flexibility and support for a wide range of decentralized applications."
		],
		experience: [
			"Utilized Ethereum in projects like Knowledge.io and RareMint for building decentralized applications and smart contracts."
		],
	},
	{
		name: "NFT",
		icon: "nft",
		tag: "NFT",
		image: "/images/tech/nft.png",
		description: "Non-Fungible Tokens, unique digital assets that represent ownership of a specific item or piece of content.",
		link: "https://en.wikipedia.org/wiki/Non-fungible_token",
		since: "2017",
		intro: [
			"NFTs are unique digital assets that represent ownership of a specific item or piece of content, often used in art, gaming, and collectibles.",
			"They are built on blockchain technology, ensuring authenticity and provenance."
		],
		experience: [
			"Implemented NFT solutions in projects like RareMint and ZTX for digital asset creation and trading."
		],
	},
	{
		name: "AWS",
		icon: "aws",
		tag: "AWS",
		image: "/images/tech/aws.png",
		description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
		link: "https://aws.amazon.com/",
		since: "2006",
		intro: [
			"AWS provides a wide range of cloud services, including computing power, storage options, and networking capabilities.",
			"It is a popular choice for deploying and managing scalable applications in the cloud."
		],
		experience: [
			"Leveraged AWS for scalable cloud infrastructure in projects like Wink and Photo and Go, ensuring reliability and performance.",
			"Implemented AWS solutions for secure and efficient data processing in decentralized applications like Bitcash, aligning with the principle of automating and securing everything."
		],
	},
	{
		name: "GCloud",
		icon: "gcloud",
		tag: "GCloud",
		image: "/images/tech/gcloud.png",
		description: "Google Cloud Platform, a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
		link: "https://cloud.google.com/",
		since: "2008",
		intro: [
			"Google Cloud Platform offers a suite of cloud computing services, providing infrastructure, platform, and software solutions.",
			"It is known for its scalability, reliability, and integration with Google's ecosystem."
		],
		experience: [
			"Utilized GCloud in projects like RareMint and bitcashBank for scalable cloud infrastructure and services."
		],
	},
	{
		name: "Antelope",
		icon: "antelope",
		tag: "Antelope",
		image: "/images/tech/antelope.png",
		description: "A blockchain protocol designed for high performance and scalability, supporting decentralized applications.",
		link: "https://antelope.io/",
		since: "2021",
		intro: [
			"Antelope is a blockchain protocol designed for high performance and scalability, supporting decentralized applications.",
			"It offers a robust environment for building and deploying blockchain solutions."
		],
		experience: [
			"Worked with Antelope in projects like bitcashBank and ChainGraph for blockchain application development."
		],
	},
	{
		name: "C++",
		icon: "cpp",
		tag: "C++",
		image: "/images/tech/cpp.png",
		description: "A general-purpose programming language created as an extension of the C programming language.",
		link: "https://en.wikipedia.org/wiki/C%2B%2B",
		since: "1985",
		intro: [
			"C++ is a general-purpose programming language known for its performance and efficiency, widely used in system software, game development, and real-time simulations.",
			"It supports object-oriented, procedural, and generic programming paradigms."
		],
		experience: [
			"Utilized C++ in projects like bitcashBank and EOS Costa Rica for high-performance application development."
		],
	},
	{
		name: "EOS",
		icon: "eos",
		tag: "EOS",
		image: "/images/tech/eos.png",
		description: "A blockchain platform designed for the development of decentralized applications (dApps).",
		link: "https://eos.io/",
		since: "2018",
		intro: [
			"EOS is a blockchain platform designed for the development of decentralized applications (dApps), known for its scalability and flexibility.",
			"It provides a robust environment for building and deploying blockchain solutions with high performance."
		],
		experience: [
			"Worked with EOS in projects like Emanate and Make Sense Labs for blockchain application development and integration."
		],
	},
	{
		name: "Cloud",
		icon: "cloud",
		tag: "Cloud",
		image: "/images/tech/cloud.png",
		description: "Cloud computing services that provide scalable and flexible infrastructure for applications.",
		link: "https://en.wikipedia.org/wiki/Cloud_computing",
		since: "2006",
		intro: [
			"Cloud computing services offer scalable and flexible infrastructure for applications, enabling efficient resource management and deployment.",
			"They are widely used for hosting, data storage, and application deployment across various industries."
		],
		experience: [
			"Utilized cloud services in projects like EOS Costa Rica and RareMint for scalable infrastructure and application deployment."
		],
	},
	{
		name: "Serverless",
		icon: "serverless",
		tag: "Serverless",
		image: "/images/tech/serverless.png",
		description: "A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources.",
		link: "https://www.serverless.com/",
		since: "2015",
		intro: [
			"Serverless computing allows developers to build and run applications without managing the underlying infrastructure.",
			"It is known for its scalability and cost-effectiveness, enabling developers to focus on code rather than server management."
		],
		experience: [
			"Implemented serverless architectures in projects like Knowledge.io for scalable and efficient application deployment."
		],
	},
	{
		name: "Docker",
		icon: "docker",
		tag: "Docker",
		image: "/images/tech/docker.png",
		description: "A platform for developing, shipping, and running applications in containers.",
		link: "https://www.docker.com/",
		since: "2013",
		intro: [
			"Docker allows developers to package applications and their dependencies into containers, ensuring consistency across environments.",
			"It simplifies deployment and scaling of applications, making it a popular choice for modern DevOps practices."
		],
		experience: [
			"Utilized Docker in projects like ChainGraph and Photo and Go for containerized application deployment and management."
		],
	},
	{
		name: "RXJS",
		icon: "rxjs",
		tag: "RXJS",
		image: "/images/tech/rxjs.png",
		description: "A library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
		link: "https://rxjs.dev/",
		since: "2015",
		intro: [
			"RXJS is a library for reactive programming using Observables, enabling developers to compose asynchronous and event-based programs.",
			"It is widely used in modern web development for handling asynchronous data streams."
		],
		experience: [
			"Implemented RXJS in projects like ChainGraph for efficient data stream management and real-time updates."
		],
	},
	{
		name: "Flow Blockchain",
		icon: "flow",
		tag: "Flow Blockchain",
		image: "/images/tech/flow.png",
		description: "A fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.",
		link: "https://www.onflow.org/",
		since: "2020",
		intro: [
			"Flow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.",
			"It is known for its scalability and ease of use, making it a popular choice for NFT and gaming applications."
		],
		experience: [
			"Utilized Flow Blockchain in projects like Fantasy Top Shots for NFT integration and gaming applications."
		],
	},
	{
		name: "React Native",
		icon: "react-native",
		tag: "React Native",
		image: "/images/tech/react-native.png",
		description: "A framework for building native apps using React.",
		link: "https://reactnative.dev/",
		since: "2015",
		intro: [
			"React Native allows developers to build mobile applications using React, enabling a single codebase for both iOS and Android.",
			"It is known for its ability to create truly native apps with a consistent developer experience."
		],
		experience: [
			"Developed the first version of Wink's mobile app, focusing on seamless user experience and integration with AWS services.",
			"Enhanced the Sense.chat app's performance and integrated it with the EOS mainnet for secure transactions.",
			"Improved Tractor Supply's mobile app by developing an augmented reality feature and optimizing code quality."
		],
	},
	{
		name: "Expo",
		icon: "expo",
		tag: "Expo",
		image: "/images/tech/expo.png",
		description: "A set of tools and services for React Native development.",
		link: "https://expo.dev/",
		since: "2017",
		intro: [
			"Expo provides a set of tools and services to streamline React Native development, simplifying the process of building, deploying, and testing applications.",
			"It enhances the React Native development experience by offering a managed workflow."
		],
		experience: [
			"Utilized Expo in Fantasy Top Shots to streamline development and deployment processes, enhancing the mobile app's performance.",
			"Leveraged Expo's managed workflow to accelerate the development of mobile applications, ensuring efficient testing and deployment."
		],
	},
	{
		name: "Tailwind CSS",
		icon: "tailwind",
		tag: "Tailwind",
		image: "/images/tech/tailwind.png",
		description: "A utility-first CSS framework for rapid UI development.",
		link: "https://tailwindcss.com/",
		since: "2017",
		intro: [
			"Tailwind CSS provides a set of utility classes that allow developers to build custom designs without leaving their HTML.",
			"It is known for its flexibility and ability to create responsive and modern user interfaces quickly."
		],
		experience: [
			"Used Tailwind CSS in projects like ZTX and Fantasy Top Shots for efficient and responsive UI design, focusing on clarity and simplicity.",
			"Implemented Tailwind CSS to enhance the user experience, aligning with the principle of user experience first."
		],
	},
	{
		name: "Polkadot",
		icon: "polkadot",
		tag: "Polkadot",
		image: "/images/tech/polkadot.png",
		description: "A network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.",
		link: "https://polkadot.network/",
		since: "2020",
		intro: [
			"Polkadot is a network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.",
			"It is designed to enable a web where our data is our own and isn't stored on a server owned by an intermediary company."
		],
		experience: [
			"Worked with Polkadot in projects like Substrate Contracts UI for blockchain interoperability and smart contract development."
		],
	},
	{
		name: "Substrate",
		icon: "substrate",
		tag: "Substrate",
		image: "/images/tech/substrate.png",
		description: "A framework for building blockchains, providing a set of tools and libraries for blockchain development.",
		link: "https://substrate.dev/",
		since: "2018",
		intro: [
			"Substrate is a framework for building blockchains, providing a set of tools and libraries for blockchain development.",
			"It is known for its flexibility and support for building custom blockchains with ease."
		],
		experience: [
			"Utilized Substrate in projects like Substrate Contracts UI for building and deploying custom blockchains."
		],
	},
	{
		name: "Flow",
		icon: "flow",
		tag: "Flow",
		image: "/images/tech/flow.png",
		description: "A fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.",
		link: "https://www.onflow.org/",
		since: "2020",
		intro: [
			"Flow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and digital assets.",
			"It is known for its scalability and ease of use, making it a popular choice for NFT and gaming applications."
		],
		experience: [
			"Utilized Flow in projects like Wizard World for NFT integration and digital asset management."
		],
	},
	{
		name: "Niftory",
		icon: "niftory",
		tag: "Niftory",
		image: "/images/tech/niftory.png",
		description: "A platform for creating, managing, and distributing NFTs, providing tools and infrastructure for NFT development.",
		link: "https://niftory.com/",
		since: "2021",
		intro: [
			"Niftory provides a platform for creating, managing, and distributing NFTs, offering tools and infrastructure for NFT development.",
			"It simplifies the process of building and deploying NFT applications."
		],
		experience: [
			"Used Niftory in projects like Wizard World for NFT creation and management."
		],
	},
	{
		name: "Dalle",
		icon: "dalle",
		tag: "Dalle",
		image: "/images/tech/dalle.png",
		description: "An AI model developed by OpenAI for generating images from textual descriptions.",
		link: "https://openai.com/dall-e/",
		since: "2021",
		intro: [
			"Dalle is an AI model developed by OpenAI for generating images from textual descriptions, enabling creative and artistic applications.",
			"It is widely used for generating unique and creative visual content."
		],
		experience: [
			"Implemented Dalle in projects like Wizard World for AI-driven image generation."
		],
	},
	{
		name: "Midjourney",
		icon: "midjourney",
		tag: "Midjourney",
		image: "/images/tech/midjourney.png",
		description: "An AI-powered tool for generating creative and artistic images, often used in digital art and design.",
		link: "https://www.midjourney.com/",
		since: "2021",
		intro: [
			"Midjourney is an AI-powered tool for generating creative and artistic images, often used in digital art and design.",
			"It provides a platform for artists and designers to explore new creative possibilities."
		],
		experience: [
			"Utilized Midjourney in projects like Wizard World for generating artistic images and digital content."
		],
	},
	{
		name: "OpenAI",
		icon: "openai",
		tag: "OpenAI",
		image: "/images/tech/openai.png",
		description: "An AI research and deployment company, known for developing advanced AI models and technologies.",
		link: "https://openai.com/",
		since: "2020",
		intro: [
			"OpenAI is an AI research and deployment company, known for developing advanced AI models and technologies.",
			"It is widely recognized for its contributions to AI research and development, including models like GPT-3 and Dalle."
		],
		experience: [
			"Implemented OpenAI technologies in projects like Wizard World for AI-driven applications and content generation."
		],
	},
	{
		name: "Biometrics",
		icon: "biometrics",
		tag: "Biometrics",
		image: "/images/tech/biometrics.png",
		description: "Technologies and methods for recognizing individuals based on physical or behavioral characteristics.",
		link: "https://en.wikipedia.org/wiki/Biometrics",
		since: "2020",
		intro: [
			"Biometrics involves technologies and methods for recognizing individuals based on physical or behavioral characteristics.",
			"It is widely used in security systems, authentication, and identity verification."
		],
		experience: [
			"Implemented biometric authentication in projects like Wink for enhanced security and user verification."
		],
	},
	{
		name: "Express.js",
		icon: "express",
		tag: "Express.js",
		image: "/images/tech/express.png",
		description: "A minimal and flexible Node.js web application framework.",
		link: "https://expressjs.com/",
		since: "2018",
		intro: [
			"Express.js provides a robust set of features for web and mobile applications, making it a popular choice for building APIs.",
			"It is known for its simplicity and flexibility, allowing developers to create server-side applications quickly."
		],
		experience: [
			"Implemented Express.js in projects like Eat Arcade for building RESTful APIs, focusing on simplicity and efficiency.",
			"Utilized Express.js to create scalable and maintainable server-side applications, adhering to the principle of keeping it simple."
		],
	},
	{
		name: "AngularJS",
		icon: "angularjs",
		tag: "AngularJS",
		image: "/images/tech/angularjs.png",
		description: "A structural framework for dynamic web apps.",
		link: "https://angularjs.org/",
		since: "2018",
		intro: [
			"AngularJS lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.",
			"It is fully extensible and works well with other libraries."
		],
		experience: [
			"Used AngularJS in projects like ARINC Microfids for building interactive and dynamic web applications, focusing on user experience and performance.",
			"Utilized AngularJS to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "MongoDB",
		icon: "mongodb",
		tag: "MongoDB",
		image: "/images/tech/mongodb.png",
		description: "A document database with the scalability and flexibility that you want with the querying and indexing that you need.",
		link: "https://www.mongodb.com/",
		since: "2018",
		intro: [
			"MongoDB is a document database designed for ease of development and scaling.",
			"It is known for its flexibility and scalability, making it a popular choice for modern web applications."
		],
		experience: [
			"Implemented MongoDB in projects like Eat Arcade for efficient data management and querying.",
			"Utilized MongoDB to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Heroku",
		icon: "heroku",
		tag: "Heroku",
		image: "/images/tech/heroku.png",
		description: "A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
		link: "https://www.heroku.com/",
		since: "2018",
		intro: [
			"Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
			"It is known for its ease of use and support for a wide range of programming languages and frameworks."
		],
		experience: [
			"Deployed applications on Heroku in projects like Eat Arcade for scalable and efficient cloud hosting."
		],
	},
	{
		name: "Bootstrap",
		icon: "bootstrap",
		tag: "Bootstrap",
		image: "/images/tech/bootstrap.png",
		description: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
		link: "https://getbootstrap.com/",
		since: "2018",
		intro: [
			"Bootstrap contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
			"It is widely used for its responsive grid system and pre-designed components."
		],
		experience: [
			"Utilized Bootstrap in projects like Gridium and Jockey Hollow Bar and Kitchen for responsive design and layout, focusing on user experience and performance.",
			"Implemented Bootstrap to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Stripe",
		icon: "stripe",
		tag: "Stripe",
		image: "/images/tech/stripe.png",
		description: "A technology company that builds economic infrastructure for the internet.",
		link: "https://stripe.com/",
		since: "2018",
		intro: [
			"Stripe provides a suite of payment APIs that powers commerce for online businesses of all sizes.",
			"It is known for its ease of integration and support for a wide range of payment methods."
		],
		experience: [
			"Integrated Stripe in projects like Eat Arcade for seamless payment processing and user transactions."
		],
	},
	{
		name: "Twilio",
		icon: "twilio",
		tag: "Twilio",
		image: "/images/tech/twilio.png",
		description: "A cloud communications platform for building SMS, Voice & Messaging applications on an API.",
		link: "https://www.twilio.com/",
		since: "2018",
		intro: [
			"Twilio provides APIs for sending and receiving messages, making phone calls, and performing other communication functions.",
			"It is widely used for integrating communication capabilities into applications."
		],
		experience: [
			"Used Twilio in projects like Eat Arcade for SMS-based user engagement and notifications."
		],
	},
	{
		name: "Linux",
		icon: "linux",
		tag: "Linux",
		image: "/images/tech/linux.png",
		description: "An open-source operating system based on Unix, widely used for servers, desktops, and embedded systems.",
		link: "https://www.linux.org/",
		since: "2018",
		intro: [
			"Linux is an open-source operating system based on Unix, known for its stability, security, and flexibility.",
			"It is widely used in servers, desktops, and embedded systems, providing a robust platform for various applications."
		],
		experience: [
			"Utilized Linux in projects like 4Tius Fitness Data Tracker for server management and application deployment."
		],
	},
	{
		name: "JavaScript",
		icon: "javascript",
		tag: "JavaScript",
		image: "/images/tech/javascript.png",
		description: "A high-level, just-in-time compiled, object-oriented programming language.",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		since: "2009",
		intro: [
			"JavaScript is a versatile programming language that is widely used for web development, enabling interactive and dynamic web pages.",
			"It is known for its flexibility and support for a wide range of programming paradigms."
		],
		experience: [
			"Utilized JavaScript in projects like Staples and Gridium for building interactive and dynamic web applications.",
			"Implemented JavaScript to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "CSS",
		icon: "css",
		tag: "CSS",
		image: "/images/tech/css.png",
		description: "A style sheet language used for describing the presentation of a document written in a markup language like HTML.",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		since: "2009",
		intro: [
			"CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
			"It is known for its ability to separate content from design, enabling responsive and visually appealing web pages."
		],
		experience: [
			"Utilized CSS in projects like Staples and Gridium for styling and layout, focusing on user experience and performance.",
			"Implemented CSS to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Mootools",
		icon: "mootools",
		tag: "Mootools",
		image: "/images/tech/mootools.png",
		description: "A compact, modular, Object-Oriented JavaScript framework designed for the intermediate to advanced JavaScript developer.",
		link: "https://mootools.net/",
		since: "2009",
		intro: [
			"Mootools is a JavaScript framework that provides a rich set of features for building web applications, including DOM manipulation, event handling, and more.",
			"It is known for its lightweight and modular architecture."
		],
		experience: [
			"Implemented Mootools in projects like Staples for building interactive and dynamic web features."
		],
	},
	{
		name: "Data Charts",
		icon: "data-charts",
		tag: "Data Charts",
		image: "/images/tech/data-charts.png",
		description: "Tools and libraries for creating interactive and dynamic data visualizations.",
		link: "https://www.chartjs.org/",
		since: "2018",
		intro: [
			"Data charts provide a way to visualize data in a clear and interactive manner, making it easier to understand and analyze.",
			"They are widely used in applications that require data visualization and analysis."
		],
		experience: [
			"Implemented data charts in projects like Gridium for interactive and dynamic data visualization."
		],
	},
	{
		name: "Ruby on Rails",
		icon: "rails",
		tag: "Ruby on Rails",
		image: "/images/tech/rails.png",
		description: "A web application framework written in Ruby, designed to make programming web applications easier.",
		link: "https://rubyonrails.org/",
		since: "2009",
		intro: [
			"Ruby on Rails is a full-stack web application framework that emphasizes convention over configuration.",
			"It is known for its developer-friendly syntax and rapid development capabilities."
		],
		experience: [
			"Developed applications like Tikr and ARINC Microfids using Ruby on Rails for robust backend solutions, focusing on simplicity and maintainability.",
			"Leveraged Ruby on Rails to build scalable and efficient web applications, adhering to the principle of optimizing later."
		],
	},
	{
		name: "Faye",
		icon: "faye",
		tag: "Faye",
		image: "/images/tech/faye.png",
		description: "A publish-subscribe messaging system based on the Bayeux protocol.",
		link: "https://faye.jcoglan.com/",
		since: "2009",
		intro: [
			"Faye is a messaging system that provides a simple and efficient way to implement real-time messaging in web applications.",
			"It is known for its ease of use and support for the Bayeux protocol."
		],
		experience: [
			"Used Faye in projects like ARINC Microfids for real-time messaging and data updates, focusing on user experience and performance.",
			"Utilized Faye to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "LESS",
		icon: "less",
		tag: "LESS",
		image: "/images/tech/less.png",
		description: "A backward-compatible language extension for CSS.",
		link: "https://lesscss.org/",
		since: "2009",
		intro: [
			"LESS is a CSS pre-processor that extends the capabilities of CSS with variables, mixins, and functions.",
			"It simplifies the process of writing and maintaining stylesheets, making them more readable and reusable."
		],
		experience: [
			"Utilized LESS in projects like ARINC Microfids for efficient and maintainable stylesheet development."
		],
	},
	{
		name: "Wordpress",
		icon: "wordpress",
		tag: "Wordpress",
		image: "/images/tech/wordpress.png",
		description: "A free and open-source content management system (CMS) based on PHP and MySQL.",
		link: "https://wordpress.org/",
		since: "2009",
		intro: [
			"Wordpress is a free and open-source content management system (CMS) based on PHP and MySQL.",
			"It is known for its ease of use and support for a wide range of plugins and themes, making it a popular choice for building websites and blogs."
		],
		experience: [
			"Utilized Wordpress in projects like Capoeira Abolicao and Panini for building and managing websites, focusing on simplicity and flexibility.",
			"Implemented Wordpress to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Content Management Systems",
		icon: "cms",
		tag: "CMS",
		image: "/images/tech/cms.png",
		description: "Software applications that enable users to create, manage, and modify content on websites without specialized technical knowledge.",
		link: "https://en.wikipedia.org/wiki/Content_management_system",
		since: "2009",
		intro: [
			"Content Management Systems (CMS) provide tools for creating and managing digital content, often with user-friendly interfaces.",
			"They enable non-technical users to maintain websites and digital platforms without requiring coding knowledge."
		],
		experience: [
			"Developed custom CMS solutions for clients like ITS InfoCom, streamlining content management and updates.",
			"Implemented and customized various CMS platforms to meet specific client requirements and enhance user experience.",
			"Utilized DatoCMS in the BitLauncher project for efficient content management and internationalization."
		],
	},
	{
		name: "DatoCMS",
		icon: "datocms",
		tag: "DatoCMS",
		image: "/images/tech/datocms.png",
		description: "A headless CMS that offers a flexible content management solution for modern websites and applications.",
		link: "https://www.datocms.com/",
		since: "2020",
		intro: [
			"DatoCMS is a headless content management system that provides a flexible and powerful solution for managing content across multiple platforms.",
			"It offers a user-friendly interface, robust API, and seamless integration with modern development frameworks."
		],
		experience: [
			"Implemented DatoCMS in the BitLauncher project for efficient content management and internationalization.",
			"Leveraged DatoCMS's GraphQL API to create a dynamic and multilingual user interface, enhancing the global reach of the platform."
		],
	},
];
