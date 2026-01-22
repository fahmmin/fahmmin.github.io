export interface IProject {
    title: string;
    slug: string;
    liveUrl?: string;
    repoUrl?: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
}

export interface IAchievement {
    title: string;
    event: string;
    organization: string;
    year: number;
    description: string;
    category: "hackathon" | "other" | "project"; // Inferred from data
    highlight: boolean;
}

export interface IExperience {
    title: string;
    company: string;
    duration: string;
    description: string[];
}
