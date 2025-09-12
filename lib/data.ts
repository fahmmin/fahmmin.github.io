import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kkfahmin@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fahmin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/fahmmin' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/fahminmohammed' },
    { name: 'facebook', url: 'https://www.facebook.com/' },
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
        title: 'E-Cell IIITNR',
        slug: 'e-cell-website',
        liveUrl: 'https://ecell.iiitnr.ac.in/',
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
    }, {
        title: 'Hex Oracle',
        slug: 'hex-oracle',
        liveUrl: 'https://hex-oracle.vercel.app/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
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
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'DigiWill',
        slug: 'digiwill',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    }, {
        title: 'SAC Website',
        slug: 'sac-website',
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
        liveUrl: 'https://sac.iiitnr.ac.in/',
        year: 2025,
        description: `A complete website for SAC IIIT-NR to showcase their events, projects, and achievements.`,
        role: `As the frontend developer, I: <br/>
        - Built the frontend from scratch using Next.js, Tailwind CSS, and shadcn.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface.`,
    },
    {
        title: 'Repo Rewards',
        slug: 'repo-rewards',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://repo-rewards.vercel.app/',
        year: 2023,
        description:
            'Repo Rewards is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    }

];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'RootVestors',
        duration: 'Jun 2025 - Present',
    },
    {
        title: 'Vice Head',
        company: 'Dev Club IIITNR',
        duration: 'Aug 2025 - Present',
    },
    {
        title: 'E-Cell Website Head',
        company: 'E-Cell IIITNR',
        duration: 'Aug 2025 - Present',
    }, {
        title: 'SAC Website Head',
        company: 'SAC IIITNR',
        duration: 'Aug 2025 - Present',
    },

];
