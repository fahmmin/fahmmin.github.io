import Link from "next/link";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
    return (
        <section className="py-6 screen-line-before screen-line-after">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-3">
                    <h2 className="text-2xl font-playfair font-medium tracking-tight mb-1">
                        Projects
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-stone-500">
                        a couple of things i&#x27;ve built
                    </p>
                </div>
                <div className="space-y-0">
                    {PROJECTS.map((project, index) => (
                        <ProjectItem
                            key={index}
                            title={project.title}
                            year={project.year.toString()}
                            description={project.description.split("<br/>")[0].trim()} // Taking the first part of description for summary
                            links={[
                                // liveUrl mapped to 'live'. Github isn't in IProject explicitly in data.ts but most have it. 
                                // Wait, data.ts PROJECTS doesn't have a specific github field, only liveUrl.
                                // I'll check if liveUrl is what we want.
                                // The original mock data had github and live. 
                                // I will just use liveUrl for now if present.
                                ...(project.liveUrl ? [{ label: "live", url: project.liveUrl }] : []),
                                ...(project.repoUrl ? [{ label: "code", url: project.repoUrl }] : [])
                            ]}
                            tags={project.techStack.slice(0, 4)} // Showing first 4 tags
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectItem({
    title,
    year,
    description,
    links,
    tags,
}: {
    title: string;
    year: string;
    description: string;
    links: { label: string; url: string }[];
    tags: string[];
}) {
    return (
        <div className="space-y-2 py-4 border-b border-border last:border-b-0">
            <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg leading-snug font-medium">{title}</h3>
                <span className="text-sm text-muted-foreground">{year}</span>
            </div>
            <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: description }} />
            <div className="text-sm text-muted-foreground flex items-center gap-2">
                {links.map((link, i) => (

                    <div key={link.label} className="flex items-center gap-2">
                        {i > 0 && <span className="text-border">•</span>}
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-gray-100 relative group inline-block hover:scale-110 transition-transform"
                            aria-label={link.label}
                        >
                            {link.label === "live" ? <FaGlobe size={16} /> : <FaGithub size={16} />}
                        </a>
                    </div>
                ))}
            </div>
            <ul className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag) => (
                    <li key={tag} className="flex">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            {tag}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
