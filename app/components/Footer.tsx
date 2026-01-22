import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
    const githubLink = SOCIAL_LINKS.find((link) => link.name === 'github');

    return (
        <footer className="py-8 pt-2 screen-line-before lowercase px-4">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-2">
                    <p className="text-gray-600 text-sm dark:text-gray-400">
                        Built by{" "}
                        {githubLink && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 dark:text-gray-100 italic relative group inline-block"
                                href={githubLink.url}
                            >
                                <span className="relative z-10">{githubLink.url.split('/').pop()}</span>
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-out group-hover:w-full"></span>
                            </a>
                        )}
                        . The source code is not available on{" "}
                        <span className="text-gray-500 dark:text-gray-500">GitHub</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
