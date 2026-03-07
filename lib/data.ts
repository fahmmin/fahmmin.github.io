import { IProject, IAchievement, IExperience } from '@/types';


export const GENERAL_INFO = {
    email: 'kkfahmin@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fahmin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/fahmmin' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/fahminmohammed' },
    { name: 'X', url: 'https://x.com/fahmindot' },
    { name: 'medium', url: 'https://medium.com/@fahmin' },
    { name: 'email', url: 'mailto:kkfahmin@gmail.com' },
];

export const MY_STACK = {
    web3: [
        {
            name: 'Hardhat',
            icon: '/logo/hardhat.jpeg',
        },
        {
            name: 'Chainlink',
            icon: '/logo/chainlink.png',
        },
        {
            name: 'Ethers',
            icon: '/logo/ethers.jpg',
        },
        {
            name: 'Zksync',
            icon: '/logo/zksync.webp',
        },
        {
            name: 'Viem',
            icon: '/logo/viem.png',
        },
        {
            name: 'Rainbowkit',
            icon: '/logo/rainbowkit.avif',
        },
        {
            name: 'Wagmi',
            icon: '/logo/wagmi.png',
        },
    ],
    language: [
        {
            name: 'Solidity',
            icon: '/logo/solidity.png',
        },

        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'Rust',
            icon: '/logo/rust.png',
        },
        {
            name: 'C',
            icon: '/logo/c.jpeg',
        },
        {
            name: 'Clarity',
            icon: '/logo/clarity.png',
        },
    ],
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Lenis Protocol',
            icon: '/logo/lenis.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'IPFS',
            icon: '/logo/ipfs.png',
        },
        {
            name: 'Pinata',
            icon: '/logo/pinata.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.png',
        },
        {
            name: 'Hardhat',
            icon: '/logo/hardhat.jpeg',
        },

    ],
};

export const PROJECTS: IProject[] = [
      {
        title: 'ObsiFlow',
        slug: 'obsiflow',
        liveUrl: 'https://obsiflow.vercel.app/',
        repoUrl: 'https://github.com/fahmmin/obsiflow-core',
        year: 2025,
        description: `
        DeFAI forensic infrastructure enabling TEE-secured cross-chain surveillance and AI-driven analysis. <br/> <br/>
        Key Features:<br/>
        <ul>
          <li>🔒 TEE-Secured: Utilizes Trusted Execution Environments for secure monitoring.</li>
          <li>👁️ Cross-Chain Surveillance: Flare Data Connector integration for multi-chain observability.</li>
          <li>🚀 Launchpad Incubation: Selected for Flare Network Launchpad.</li>
        </ul>
        `,
        role: `
        Founder & Lead Engineer <br/>
        - Architecting TEE-secured cross-chain surveillance systems.<br/>
        - Engineering x402 micropayment gateways for trustless data monetization.<br/>
        - Integrating AI intent parsing for forensic analysis.
        `,
        techStack: [
            'Flare',
            'TEE',
            'AI',
            'DeFAI',
        ],
        thumbnail: '/projects/thumbnail/obsiflow.webp',
        longThumbnail: '/projects/long/obsiflow.webp',
        images: [],
    },
    {
        title: 'CultureDrops',
        slug: 'culturedrops',
        liveUrl: 'https://culture-drop-lac.vercel.app/',
        repoUrl: 'https://github.com/fahmmin/CultureDrop',
        year: 2025,
        description: `
        CultureDrops is a decentralized platform for permanent cultural media storage using Walrus and Sui. It addresses the need for immutable preservation of cultural heritage. <br/> <br/>
        Key Features:<br/>
        <ul>
          <li>🏛️ Permanent Storage: Leverages Walrus for decentralized, long-term media preservation.</li>
          <li>⛓️ On-Chain Provenance: Implements verifiable creator ownership and history on the Sui blockchain.</li>
          <li>🏆 Award Winning: Winner of the ETHIndia x Walrus Foundation Hackathon.</li>
        </ul>
        `,
        role: `
        Full-Stack Web3 Developer <br/>
        - Built the decentralized storage layer using Walrus.<br/>
        - Implemented smart contracts on Sui for provenance and ownership verification.<br/>
        - Developed the frontend interface for uploading and viewing cultural assets.
        `,
        techStack: [
            'Sui',
            'Walrus',
            'React',
            'Move',
        ],
        thumbnail: '/projects/thumbnail/culturedrops.webp', // Placeholder
        longThumbnail: '/projects/long/culturedrops.webp',
        images: [],
    },
    {
        title: 'Project Lumen',
        slug: 'project-lumen',
        liveUrl: '',
        repoUrl: 'https://github.com/fahmmin/project-lumen-fi',
        year: 2025,
        description: `
        Project Lumen is an AI-native financial intelligence system designed for automated auditing and fraud detection. <br/> <br/>
        Key Features:<br/>
        <ul>
          <li>🤖 Multi-Agent System: 20+ agent RAG-based pipeline for financial audit and reasoning.</li>
          <li>📱 Mobile Extraction: Android app for SMS-based financial data extraction with Ethereum audit logging.</li>
          <li>🥇 Hackathon Winner: 1st Place in the Hack-a-Sol AI/ML Track.</li>
        </ul>
        `,
        role: `
        Lead AI Engineer <br/>
        - Architected the RAG-based multi-agent system using Python and Llama 3.1.<br/>
        - Integrating the Android extraction layer with blockchain logging for immutable audit trails.
        `,
        techStack: [
            'Python',
            'Llama 3.1',
            'RAG',
            'Android',
            'Ethereum',
        ],
        thumbnail: '/projects/thumbnail/lumen.webp',
        longThumbnail: '/projects/long/lumen.webp',
        images: [],
    },
    {
        title: 'E-Cell IIITNR',
        slug: 'e-cell-website',
        liveUrl: 'https://ecell.iiitnr.ac.in/',
        repoUrl: 'https://github.com/fahmmin/E-Cell-IIITNR',
        year: 2025,
        description: `
        A complete website for E-Cell IIIT-NR to showcase their events, projects, and achievements. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/images/e-cell-website.webp',
        longThumbnail: '/projects/images/e-cell-website.webp',
        images: [
            '/projects/images/e-cell-website-1.webp',
            '/projects/images/e-cell-website-2.webp',
        ],
    },
    {
        title: 'DigiWill',
        slug: 'digiwill',
        liveUrl: '',
        repoUrl: 'https://github.com/fahmmin/Digi_Will',
        year: 2025,
        description: `
        DigiWill is an NFT-based digital inheritance system reducing unclaimed assets through automated, inactivity-triggered transfers. <br/> <br/>
        Key Features:<br/>
        <ul>
          <li>💀 Dead Man's Switch: Automated asset transfer logic triggered by wallet inactivity.</li>
          <li>📂 IPFS Metadata: Secure, decentralized storage for inheritance instructions and metadata.</li>
          <li>✅ EVM Verification: Smart contract-based verification of heir claims.</li>
          <li>🏆 Winner: Web3 Track, IIIT NR Hackathon.</li>
        </ul>
        `,
        role: `
        Blockchain Developer <br/>
        - Developed the Solidity smart contracts for the inheritance logic and inactivity triggers.<br/>
        - Integrated IPFS for secure, persistent metadata storage.<br/>
        - Built the React frontend to interact with the EVM-based smart contracts.
        `,
        techStack: [
            'Solidity',
            'React',
            'IPFS',
            'EVM',
        ],
        thumbnail: '/projects/thumbnail/digiwill.webp',
        longThumbnail: '/projects/long/digiwill.webp',
        images: [],
    },
    {
        title: 'SAC Website',
        slug: 'sac-website',
        liveUrl: 'https://sac.iiitnr.ac.in/',
        repoUrl: 'https://github.com/fahmmin/sac-website',
        year: 2025,
        description: `A complete website for SAC IIIT-NR to showcase their events, projects, and achievements.`,
        role: `As the frontend developer, I: <br/>
        - Built the frontend from scratch using Next.js, Tailwind CSS, and shadcn.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface.`,
        techStack: [
            'Next.js',
            'CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/images/sac-website-1.png',
        longThumbnail: '/projects/images/sac-website-1.png',
        images: [
            '/projects/images/sac-website-1.png',
            '/projects/images/sac-website-2.png',
        ],
    },
    {
        title: 'RAG Reward Chatbot',
        slug: 'rag-reward',
        liveUrl: '',
        repoUrl: 'https://github.com/fahmmin/RepositoryRewards',
        year: 2025,
        description: `
        An incentivized learning system that rewards users for engaging with educational content via an AI chatbot. <br/> <br/>
        Key Features:<br/>
        <ul>
          <li>🧠 Multi-Stage RAG: Advanced retrieval-augmented generation pipeline for accurate educational responses.</li>
          <li>💰 Learn-to-Earn: On-chain incentive distribution system rewarding user progress.</li>
          <li>🏆 Winner: AI/ML Track at the AI/ML + Web3 Hackathon.</li>
        </ul>
        `,
        role: `
        AI & Web3 Engineer <br/>
        - Built the Python-based RAG pipeline using Gemini models.<br/>
        - Implemented the Ethereum smart contracts for token-based rewards.<br/>
        - Integrated the AI backend with the blockchain incentive layer.
        `,
        techStack: [
            'Python',
            'Gemini',
            'Ethereum',
            'RAG',
        ],
        thumbnail: '/projects/thumbnail/rag.webp',
        longThumbnail: '/projects/long/rag.webp',
        images: [],
    },
  
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Founder & Lead Engineer',
        company: 'ObsiFlow',
        duration: 'Nov 2025 - Present',
        description: [
            'Selected for Flare Network Launchpad incubation to build DeFAI forensic infrastructure.',
            'Architecting TEE-secured cross-chain surveillance using Flare Data Connector and AI intent parsing.',
            'Engineering x402 micropayment gateway for trustless machine-to-machine data monetization.'
        ]
    },
    {
        title: 'AI Engineer',
        company: 'Hastus Energy',
        duration: 'Nov 2025 - Present',
        type: 'part-time',
        description: [
            'Building AI-native systems for energy optimization and operational intelligence.',
            'Developing multi-agent AI pipelines, CRM automation, and predictive analytics.'
        ]
    }, {
        title: 'SDE Intern',
        company: 'RootVestors',
        duration: 'Jun 2025 - Present',
        type: 'part-time',
        description: [
            'Designing and scaling backend infrastructure for a gamified ed-tech platform.',
            'Worked on UI/UX and Product development for the gamified dashboard.'
        ]
    }, {
        title: 'Vice Head',
        company: 'Dev Club IIITNR',
        duration: 'Aug 2025 - Present',
        description: [
            'Leading technical initiatives and organizing workshops on Web3 and AI for 200+ students.',
            'Mentoring junior developers and overseeing multiple ongoing club projects.',
            'Coordinating hackathons and technical events to foster a coding culture on campus.'
        ]
    }, {
        title: 'E-Cell Website Head',
        company: 'E-Cell IIITNR',
        duration: 'Aug 2025 - Present',
        description: [
            'Spearheaded the complete redesign and development of the E-Cell official website.',
            'Managed a team of 5 developers, implementing CI/CD pipelines and code reviews.',
            'Ensured 99.9% uptime and optimized site performance for peak event traffic.'
        ]
    }, {
        title: 'SAC Website Head',
        company: 'SAC IIITNR',
        duration: 'Aug 2025 - Present',
        description: [
            'Directed the technical roadmap for the Student Alumni Committee digital presence.',
            'Architected scalable portal solutions for alumni networking and event management.',
            'Collaborated with stakeholders to gather requirements and deliver robust web solutions.'
        ]
    },

];

export const ACHIEVEMENTS: IAchievement[] = [
    {
        title: 'ETH India x Walrus Foundation Winner',
        event: 'ETHIndia',
        organization: 'ETHGlobal',
        year: 2025,
        description: 'Winner of the Walrus Track for building decentralized cultural storage.',
        category: 'hackathon',
        highlight: true,
    },
    {
        title: '1st Place AI/ML Track',
        event: 'Hack-a-Sol 2025',
        organization: 'Solana',
        year: 2025,
        description: 'Built Project Lumen, an AI-native financial intelligence system.',
        category: 'hackathon',
        highlight: true,
    },
    {
        title: 'Web3 Track Winner',
        event: 'IIIT NR Hackathon',
        organization: 'IIITNR',
        year: 2025,
        description: 'Winner for DigiWill, an NFT-based digital inheritance system.',
        category: 'hackathon',
        highlight: true,
    },
    {
        title: 'AI/ML Track Winner',
        event: 'AI/ML + Web3 Hackathon',
        organization: 'Community',
        year: 2025,
        description: 'Winner for RAG Reward Chatbot, an incentivized learning system.',
        category: 'hackathon',
        highlight: true,
    },
    {
        title: 'Top 5 Finalist',
        event: 'Pitch Perfect 2025',
        organization: 'IIM Raipur',
        year: 2025,
        description: 'Developed a mobile app for a startup with a novel DeFi solution',
        category: 'hackathon',
        highlight: false,
    },
];
