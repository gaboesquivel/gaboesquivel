import type { TechStackItem } from "./types";

export const techStack: TechStackItem[] = [
	{
		name: "React",
		icon: "react",
		tag: "ReactJS",
		image: "/images/tech/react.png",
		description: "A JavaScript library for building user interfaces",
		link: "https://reactjs.org/",
		since: "2013",
		intro: [
			"React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React is component-based, which means the UI is divided into reusable pieces, making development more manageable and scalable.",
			"React's virtual DOM feature optimizes rendering by updating only the parts of the UI that have changed, rather than reloading the entire page. This results in faster performance and a smoother user experience. Additionally, React's ecosystem includes a wide range of tools and libraries that enhance its functionality, making it a popular choice for modern web development."
		],
		experience: [
			"Developed the initial version of Wink's mobile app using React, focusing on user-centric design and agile methodologies.",
			"Worked on the React-based frontend for projects like Emanate and ZTX, enhancing user interaction and experience with a focus on clarity and simplicity.",
			"Utilized React in the development of Sense Chat, focusing on secure and private communication, aligning with the principle of user experience first."
		],
	},
	{
		name: "TypeScript",
		icon: "typescript",
		tag: "TypeScript",
		image: "/images/tech/typescript.png",
		description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
		link: "https://www.typescriptlang.org/",
		since: "2012",
		intro: [
			"TypeScript is a superset of JavaScript that adds static types, enhancing code quality and maintainability.",
			"It is widely used in modern web development for building scalable and robust applications."
		],
		experience: [
			"Used TypeScript extensively in projects like BasilicEVM and BitLauncher for type safety and improved developer experience."
		],
	},
	{
		name: "Solidity",
		icon: "solidity",
		tag: "Solidity",
		image: "/images/tech/solidity.png",
		description: "A contract-oriented programming language for writing smart contracts on Ethereum.",
		link: "https://soliditylang.org/",
		since: "2015",
		intro: [
			"Solidity is the primary language for writing smart contracts on Ethereum and other EVM-compatible blockchains.",
			"It is designed to target the Ethereum Virtual Machine (EVM) and is influenced by C++, Python, and JavaScript."
		],
		experience: [
			"Developed smart contracts for the Knowledge ICO, focusing on security and efficiency, embodying the principle of keeping it simple.",
			"Contributed to the development of asset-backed NFTs on Ethereum for RareMint, demonstrating the transformative power of blockchain technology."
		],
	},
	{
		name: "Next.js",
		icon: "nextjs",
		tag: "NextJS",
		image: "/images/tech/nextjs.png",
		description: "A React framework for production, providing hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
		link: "https://nextjs.org/",
		since: "2016",
		intro: [
			"Next.js is a popular React framework that enables server-side rendering and static site generation for React applications.",
			"It is known for its performance optimizations and ease of use in building scalable web applications."
		],
		experience: [
			"Utilized Next.js in projects like BasilicEVM and Masterbots for building performant and scalable web applications."
		],
	},
	{
		name: "PostgreSQL",
		icon: "postgresql",
		tag: "Postgres",
		image: "/images/tech/postgresql.png",
		description: "A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.",
		link: "https://www.postgresql.org/",
		since: "1996",
		intro: [
			"PostgreSQL is a highly stable database management system, used by many companies and organizations to store and manage their data.",
			"It supports advanced data types and performance optimization features, making it a popular choice for complex applications."
		],
		experience: [
			"Implemented PostgreSQL in projects like BitLauncher and RareMint for efficient data management and querying."
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
			"Contributed to the development of decentralized applications like Emanate and Sense Chat, leveraging Node.js for efficient and secure communication."
		],
	},
	{
		name: "GraphQL",
		icon: "graphql",
		tag: "GraphQL",
		image: "/images/tech/graphql.png",
		description: "A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
		link: "https://graphql.org/",
		since: "2015",
		intro: [
			"GraphQL provides a more efficient, powerful, and flexible alternative to REST, allowing clients to request exactly the data they need.",
			"It is widely used in modern web applications for its ability to streamline data fetching and improve performance."
		],
		experience: [
			"Implemented GraphQL in projects like ChainGraph and dBoard for efficient data querying and real-time updates."
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
		name: "React Native",
		icon: "react-native",
		tag: "React Native",
		image: "/images/tech/react-native.png",
		description: "A framework for building native apps using React.",
		link: "https://reactnative.dev/",
		since: "2015",
		intro: [
			"React Native allows developers to build mobile applications using JavaScript and React, sharing code across platforms.",
			"It provides a rich set of components and APIs for building native mobile apps with a single codebase."
		],
		experience: [
			"Developed mobile applications like Sense.chat and Tractor Supply using React Native for cross-platform compatibility, focusing on user experience and performance.",
			"Implemented features that align with the principle of shipping fast and learning faster, ensuring continuous improvement and user feedback integration."
		],
	},
	{
		name: "Blockchain",
		icon: "blockchain",
		tag: "Blockchain",
		image: "/images/tech/blockchain.png",
		description: "A decentralized digital ledger that records transactions across many computers.",
		link: "https://en.wikipedia.org/wiki/Blockchain",
		since: "2008",
		intro: [
			"Blockchain technology underpins cryptocurrencies and enables secure, transparent, and tamper-proof transactions.",
			"It is used in various applications beyond cryptocurrencies, including supply chain management and smart contracts."
		],
		experience: [
			"Led the development of smart contracts and infrastructure for EOSIO networks at EOS Costa Rica, emphasizing security and transparency.",
			"Co-founded AsoBlockchain and CryptoCantinaCR to promote blockchain technology in Costa Rica, fostering a community of innovation and collaboration.",
			"Developed asset-backed NFTs for RareMint, transforming real-world sports collectibles into digital experiences, showcasing the power of blockchain in creating new value."
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
			"Utilized Docker in projects like ChainGraph and Photo and Go for containerized application deployment and management, adhering to the principle of open source and portability.",
			"Implemented Docker solutions to streamline development workflows and ensure consistent environments across different stages of development."
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
		name: "Ruby on Rails",
		icon: "rails",
		tag: "Ruby on Rails",
		image: "/images/tech/rails.png",
		description: "A web application framework written in Ruby, designed to make programming web applications easier.",
		link: "https://rubyonrails.org/",
		since: "2004",
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
		name: "MongoDB",
		icon: "mongodb",
		tag: "MongoDB",
		image: "/images/tech/mongodb.png",
		description: "A document-oriented NoSQL database used for high volume data storage.",
		link: "https://www.mongodb.com/",
		since: "2009",
		intro: [
			"MongoDB stores data in flexible, JSON-like documents, making it easy to work with and scale.",
			"It is widely used for applications that require high availability and scalability."
		],
		experience: [
			"Implemented MongoDB in projects like Eat Arcade and 4Tius Fitness Data Tracker for flexible and scalable data storage, focusing on simplicity and efficiency.",
			"Utilized MongoDB to handle large volumes of data, ensuring high availability and performance."
		],
	},
	{
		name: "AngularJS",
		icon: "angularjs",
		tag: "AngularJS",
		image: "/images/tech/angularjs.png",
		description: "A structural framework for dynamic web apps.",
		link: "https://angularjs.org/",
		since: "2010",
		intro: [
			"AngularJS allows developers to use HTML as the template language and extend HTML's syntax to express application components clearly.",
			"It is known for its two-way data binding and dependency injection, which simplifies development and testing."
		],
		experience: [
			"Used AngularJS in projects like Eat Arcade and ARINC Microfids for building dynamic and interactive web applications, focusing on user experience and performance.",
			"Implemented AngularJS to create responsive and engaging user interfaces, aligning with the principle of user experience first."
		],
	},
	{
		name: "Express.js",
		icon: "express",
		tag: "Express.js",
		image: "/images/tech/express.png",
		description: "A minimal and flexible Node.js web application framework.",
		link: "https://expressjs.com/",
		since: "2010",
		intro: [
			"Express.js provides a robust set of features for web and mobile applications, making it a popular choice for building APIs.",
			"It is known for its simplicity and flexibility, allowing developers to create server-side applications quickly."
		],
		experience: [
			"Implemented Express.js in projects like Eat Arcade and 4Tius Fitness Data Tracker for building RESTful APIs, focusing on simplicity and efficiency.",
			"Utilized Express.js to create scalable and maintainable server-side applications, adhering to the principle of keeping it simple."
		],
	},
	{
		name: "Stripe",
		icon: "stripe",
		tag: "Stripe",
		image: "/images/tech/stripe.png",
		description: "A technology company that builds economic infrastructure for the internet.",
		link: "https://stripe.com/",
		since: "2010",
		intro: [
			"Stripe provides a suite of payment APIs that powers commerce for online businesses of all sizes.",
			"It is known for its ease of integration and support for a wide range of payment methods."
		],
		experience: [
			"Integrated Stripe in projects like Eat Arcade for seamless payment processing and user transactions, focusing on user experience and security.",
			"Utilized Stripe to enable secure and efficient payment solutions, aligning with the principle of automating and securing everything."
		],
	},
	{
		name: "Twilio",
		icon: "twilio",
		tag: "Twilio",
		image: "/images/tech/twilio.png",
		description: "A cloud communications platform for building SMS, Voice & Messaging applications on an API.",
		link: "https://www.twilio.com/",
		since: "2008",
		intro: [
			"Twilio provides APIs for sending and receiving messages, making phone calls, and performing other communication functions.",
			"It is widely used for integrating communication capabilities into applications."
		],
		experience: [
			"Used Twilio in projects like Eat Arcade for SMS-based user engagement and notifications, focusing on user experience and reliability.",
			"Implemented Twilio to enhance communication capabilities, aligning with the principle of user experience first."
		],
	},
	{
		name: "SASS",
		icon: "sass",
		tag: "SASS",
		image: "/images/tech/sass.png",
		description: "A preprocessor scripting language that is interpreted or compiled into CSS.",
		link: "https://sass-lang.com/",
		since: "2006",
		intro: [
			"SASS is a CSS preprocessor that adds power and elegance to the basic language, allowing for variables, nested rules, and more.",
			"It helps in writing clean, maintainable, and reusable stylesheets."
		],
		experience: [
			"Utilized SASS in projects like Jockey Hollow Bar and Kitchen for efficient and organized styling, focusing on maintainability and clarity.",
			"Implemented SASS to enhance the styling process, aligning with the principle of keeping it simple."
		],
	},
	{
		name: "jQuery",
		icon: "jquery",
		tag: "jQuery",
		image: "/images/tech/jquery.png",
		description: "A fast, small, and feature-rich JavaScript library.",
		link: "https://jquery.com/",
		since: "2006",
		intro: [
			"jQuery simplifies HTML document traversal and manipulation, event handling, and animation.",
			"It is widely used for its ease of use and cross-browser compatibility."
		],
		experience: [
			"Implemented jQuery in projects like Staples and Elder Scrolls Online for dynamic and interactive web features, focusing on user experience and performance.",
			"Utilized jQuery to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "PHP",
		icon: "php",
		tag: "PHP",
		image: "/images/tech/php.png",
		description: "A popular general-purpose scripting language that is especially suited to web development.",
		link: "https://www.php.net/",
		since: "1995",
		intro: [
			"PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.",
			"It is known for its ease of use and ability to integrate with various databases."
		],
		experience: [
			"Developed backend solutions using PHP in projects like AMC Yeah TV Facebook App and Elder Scrolls Online, focusing on simplicity and efficiency.",
			"Utilized PHP to create scalable and maintainable web applications, adhering to the principle of keeping it simple."
		],
	},
	{
		name: "HTML5",
		icon: "html5",
		tag: "HTML5",
		image: "/images/tech/html5.png",
		description: "The latest evolution of the standard that defines HTML.",
		link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
		since: "2014",
		intro: [
			"HTML5 introduces new elements and attributes that reflect typical usage on modern websites.",
			"It is designed to support multimedia and graphical content on the web without the need for plugins."
		],
		experience: [
			"Utilized HTML5 in projects like AMC Yeah TV Facebook App and Bureau of Trade for modern web development, focusing on user experience and performance.",
			"Implemented HTML5 to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "AJAX",
		icon: "ajax",
		tag: "AJAX",
		image: "/images/tech/ajax.png",
		description: "A set of web development techniques using many web technologies on the client side to create asynchronous web applications.",
		link: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX",
		since: "2005",
		intro: [
			"AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.",
			"This means that it is possible to update parts of a web page, without reloading the whole page."
		],
		experience: [
			"Implemented AJAX in projects like American Express and AMC Yeah TV Facebook App for dynamic content loading, focusing on user experience and performance.",
			"Utilized AJAX to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Handlebars",
		icon: "handlebars",
		tag: "Handlebars",
		image: "/images/tech/handlebars.png",
		description: "A simple templating language.",
		link: "https://handlebarsjs.com/",
		since: "2010",
		intro: [
			"Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.",
			"It keeps the view and the code separated, making it easier to manage and maintain."
		],
		experience: [
			"Used Handlebars in projects like AMC Yeah TV Facebook App for templating and dynamic content rendering, focusing on simplicity and maintainability.",
			"Implemented Handlebars to enhance web applications, aligning with the principle of keeping it simple."
		],
	},
	{
		name: "CSS",
		icon: "css",
		tag: "CSS",
		image: "/images/tech/css.png",
		description: "A style sheet language used for describing the presentation of a document written in a markup language like HTML.",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		since: "1996",
		intro: [
			"CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
			"It is used to control the layout of multiple web pages all at once."
		],
		experience: [
			"Applied CSS in projects like American Express and Capoeira Abolicao for styling and layout design, focusing on user experience and performance.",
			"Utilized CSS to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Wordpress",
		icon: "wordpress",
		tag: "Wordpress",
		image: "/images/tech/wordpress.png",
		description: "A free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database.",
		link: "https://wordpress.org/",
		since: "2003",
		intro: [
			"WordPress is a popular platform for building websites and blogs, known for its flexibility and ease of use.",
			"It supports a wide range of plugins and themes, allowing for extensive customization."
		],
		experience: [
			"Developed websites using WordPress in projects like Capoeira Abolicao and EARTH University for content management, focusing on simplicity and flexibility.",
			"Utilized WordPress to create scalable and maintainable web applications, adhering to the principle of keeping it simple."
		],
	},
	{
		name: "Bootstrap",
		icon: "bootstrap",
		tag: "Bootstrap",
		image: "/images/tech/bootstrap.png",
		description: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
		link: "https://getbootstrap.com/",
		since: "2011",
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
		name: "LESS",
		icon: "less",
		tag: "LESS",
		image: "/images/tech/less.png",
		description: "A backwards-compatible language extension for CSS.",
		link: "http://lesscss.org/",
		since: "2009",
		intro: [
			"LESS extends CSS with dynamic behavior such as variables, mixins, operations, and functions.",
			"It allows for more maintainable and extendable stylesheets."
		],
		experience: [
			"Used LESS in projects like ARINC Microfids for advanced styling and maintainable CSS, focusing on simplicity and maintainability.",
			"Implemented LESS to enhance the styling process, aligning with the principle of keeping it simple."
		],
	},
	{
		name: "Lodash",
		icon: "lodash",
		tag: "Lodash",
		image: "/images/tech/lodash.png",
		description: "A modern JavaScript utility library delivering modularity, performance, & extras.",
		link: "https://lodash.com/",
		since: "2012",
		intro: [
			"Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.",
			"It provides utility functions for common programming tasks using the functional programming paradigm."
		],
		experience: [
			"Implemented Lodash in projects like Jockey Hollow Bar and Kitchen for efficient data manipulation and utility functions, focusing on simplicity and performance.",
			"Utilized Lodash to enhance web applications, aligning with the principle of keeping it simple."
		],
	},
	{
		name: "Grunt",
		icon: "grunt",
		tag: "Grunt",
		image: "/images/tech/grunt.png",
		description: "A JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.",
		link: "https://gruntjs.com/",
		since: "2012",
		intro: [
			"Grunt is a task runner that automates repetitive tasks like minification, compilation, and testing.",
			"It is widely used for its ease of use and ability to streamline development workflows."
		],
		experience: [
			"Used Grunt in projects like Jockey Hollow Bar and Kitchen for automating build processes and task management, focusing on simplicity and efficiency.",
			"Implemented Grunt to enhance development workflows, aligning with the principle of automating and securing everything."
		],
	},
	{
		name: "Divshot",
		icon: "divshot",
		tag: "Divshot",
		image: "/images/tech/divshot.png",
		description: "A static web hosting platform for developers.",
		link: "https://divshot.com/",
		since: "2013",
		intro: [
			"Divshot was a static web hosting platform that provided a simple and efficient way to deploy static websites.",
			"It was known for its ease of use and integration with modern development workflows."
		],
		experience: [
			"Deployed projects like Jockey Hollow Bar and Kitchen using Divshot for efficient static site hosting, focusing on simplicity and performance.",
			"Utilized Divshot to enhance web applications, aligning with the principle of open source and portability."
		],
	},
	{
		name: "JSP (Struts)",
		icon: "jsp-struts",
		tag: "JSP (Struts)",
		image: "/images/tech/jsp-struts.png",
		description: "A framework for building Java EE web applications.",
		link: "https://struts.apache.org/",
		since: "2000",
		intro: [
			"Struts is a framework for building Java EE web applications, providing a robust architecture for developing scalable applications.",
			"It is known for its use of the Model-View-Controller (MVC) design pattern."
		],
		experience: [
			"Developed web applications using JSP (Struts) in projects like American Express for enterprise-level solutions, focusing on simplicity and scalability.",
			"Utilized JSP (Struts) to create scalable and maintainable web applications, adhering to the principle of keeping it simple."
		],
	},
	{
		name: "Omniture",
		icon: "omniture",
		tag: "Omniture",
		image: "/images/tech/omniture.png",
		description: "A web analytics and online business optimization software.",
		link: "https://www.adobe.com/analytics/omniture.html",
		since: "1996",
		intro: [
			"Omniture provides web analytics and online business optimization software for businesses to measure and optimize their online presence.",
			"It is widely used for its comprehensive analytics and reporting capabilities."
		],
		experience: [
			"Implemented Omniture in projects like American Express for advanced web analytics and user behavior tracking, focusing on user experience and performance.",
			"Utilized Omniture to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Adobe mBox",
		icon: "adobe-mbox",
		tag: "Adobe mBox",
		image: "/images/tech/adobe-mbox.png",
		description: "A tool for A/B testing and personalization.",
		link: "https://business.adobe.com/products/target/adobe-target.html",
		since: "2008",
		intro: [
			"Adobe mBox is a tool for A/B testing and personalization, allowing businesses to deliver personalized experiences to their users.",
			"It is known for its ease of use and integration with other Adobe products."
		],
		experience: [
			"Used Adobe mBox in projects like American Express for A/B testing and personalized user experiences, focusing on user experience and performance.",
			"Implemented Adobe mBox to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Facebook API",
		icon: "facebook-api",
		tag: "Facebook API",
		image: "/images/tech/facebook-api.png",
		description: "A set of APIs provided by Facebook for developers to interact with Facebook's platform.",
		link: "https://developers.facebook.com/docs/apis-and-sdks/",
		since: "2006",
		intro: [
			"The Facebook API allows developers to access and interact with Facebook's platform, enabling features like social sharing and user authentication.",
			"It is widely used for integrating social media features into applications."
		],
		experience: [
			"Integrated Facebook API in projects like AMC Yeah TV Facebook App for social media features and user engagement, focusing on user experience and performance.",
			"Utilized Facebook API to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Dojo",
		icon: "dojo",
		tag: "Dojo",
		image: "/images/tech/dojo.png",
		description: "An open-source modular JavaScript library designed to ease the rapid development of cross-platform, JavaScript/Ajax-based applications and web sites.",
		link: "https://dojotoolkit.org/",
		since: "2004",
		intro: [
			"Dojo is a JavaScript toolkit that provides a rich set of features for building web applications, including widgets, data binding, and more.",
			"It is known for its modular architecture and ease of use."
		],
		experience: [
			"Used Dojo in projects like American Express for building interactive and dynamic web applications, focusing on user experience and performance.",
			"Utilized Dojo to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Mootools",
		icon: "mootools",
		tag: "Mootools",
		image: "/images/tech/mootools.png",
		description: "A compact, modular, Object-Oriented JavaScript framework designed for the intermediate to advanced JavaScript developer.",
		link: "https://mootools.net/",
		since: "2006",
		intro: [
			"Mootools is a JavaScript framework that provides a rich set of features for building web applications, including DOM manipulation, event handling, and more.",
			"It is known for its lightweight and modular architecture."
		],
		experience: [
			"Implemented Mootools in projects like Staples for building interactive and dynamic web features, focusing on user experience and performance.",
			"Utilized Mootools to enhance web applications, aligning with the principle of user experience first."
		],
	},
	{
		name: "Custom CMS",
		icon: "custom-cms",
		tag: "Custom CMS",
		image: "/images/tech/custom-cms.png",
		description: "A content management system tailored to specific needs and requirements.",
		link: "https://en.wikipedia.org/wiki/Content_management_system",
		since: "2000",
		intro: [
			"A custom CMS is a content management system that is built to meet specific needs and requirements, offering flexibility and control over content management.",
			"It is often used for projects that require unique features and functionality."
		],
		experience: [
			"Developed custom CMS solutions in projects like ITS InfoCom for tailored content management and control, focusing on simplicity and flexibility.",
			"Utilized custom CMS to create scalable and maintainable web applications, adhering to the principle of keeping it simple."
		],
	},
	{
		name: "Data Charts",
		icon: "data-charts",
		tag: "Data Charts",
		image: "/images/tech/data-charts.png",
		description: "Tools and libraries for creating interactive and dynamic data visualizations.",
		link: "https://www.chartjs.org/",
		since: "2013",
		intro: [
			"Data charts provide a way to visualize data in a clear and interactive manner, making it easier to understand and analyze.",
			"They are widely used in applications that require data visualization and analysis."
		],
		experience: [
			"Implemented data charts in projects like Gridium for interactive and dynamic data visualization, focusing on user experience and performance.",
			"Utilized data charts to enhance web applications, aligning with the principle of user experience first."
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
];
