"use client";

import {
    SiRust,
    SiSolana,
    SiGo,
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiTypescript,
    SiVim,
    SiGit,
    SiGithub
} from "react-icons/si";

export default function TechStack() {
    const stack = [
        { name: "Rust", icon: SiRust },
        { name: "Solana", icon: SiSolana },
        { name: "Go", icon: SiGo },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Vim", icon: SiVim },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
    ];

    return (
        <div className="pt-1">
            <div className="pt-1">
                <p className="text-sm text-muted-foreground mb-3 flex gap-1 items-center">weapons of mass creation</p>
                <div className="flex items-center gap-4">
                    {stack.map((item) => (
                        <div key={item.name} className="relative group">
                            <item.icon
                                className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            />
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="w-2 h-2 bg-popover/80 backdrop-blur-md border-l border-t border-border rotate-45 -mb-1 mx-auto"></div>
                                <span className="block px-2 py-1 text-xs bg-popover/80 backdrop-blur-md text-popover-foreground rounded-lg shadow-lg border border-border whitespace-nowrap">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
