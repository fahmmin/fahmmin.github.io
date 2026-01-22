"use client";

import {
    SiRust,
    SiNextdotjs,
    SiTypescript,
    SiGit,
    SiSolidity,
    SiPython,
    SiLangchain,
    SiExpress,
    SiEthereum,SiDocker,SiCloudflare,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function TechStack() {
    const stack = [
        { name: "Solidity", icon: SiSolidity },
        { name: "Python", icon: SiPython },
        { name: "Ethereum", icon: SiEthereum },
        { name: "Rust", icon: SiRust },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "LangChain", icon: SiLangchain },
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: FaAws },
        { name: "Cloudflare", icon: SiCloudflare },
        { name: "Express.js", icon: SiExpress },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Git", icon: SiGit },
    ];

    return (
        <div className="pt-1">
            <div className="pt-1">
                <p className="text-sm text-muted-foreground mb-3 flex gap-1 items-center">weapons of mass creation</p>
                <div className="flex items-center gap-4">
                    {stack.map((item) => (
                        <div key={item.name} className="relative group">
                            <item.icon
                                className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
