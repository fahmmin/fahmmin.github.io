"use client";

import { SOCIAL_LINKS } from "@/lib/data";
import { FaGithub, FaMedium, FaSun, FaMoon, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const getIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'github': return <FaGithub size={14} />;
            case 'linkedin': return <FaLinkedin size={14} />;
            case 'x': return <FaXTwitter size={14} />;
            case 'email': return <MdEmail size={14} />;
            default: return null;
        }
    };

    return (
        <div className="px-4 flex items-center justify-between">
            <div className="flex flex-col my-8">
                <Link
                    className="text-3xl font-playfair font-semibold pt-1 text-foreground hover:text-foreground/80 transition-colors"
                    href="/"
                >
                    Fahmin.
                </Link>
                <div className="flex items-center gap-3 mt-1">
                    <p className="text-muted-foreground text-xs">
                        software developer
                    </p>
                    <div className="flex items-center gap-2">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target={link.name === 'email' ? undefined : "_blank"}
                                rel={link.name === 'email' ? undefined : "noopener noreferrer"}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {getIcon(link.name)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            >
                <div style={{ position: "relative" }}>
                    <ul
                        data-orientation="horizontal"
                        className="group flex-1 list-none justify-center space-x-1 flex items-center gap-3"
                        dir="ltr"
                    >
                        <Link
                            className="text-sm font-playfair text-muted-foreground hover:text-foreground transition-colors"
                            href="/pow"
                        >
                            proof-of-work
                        </Link>
                        <Link
                            className="text-sm font-playfair text-muted-foreground hover:text-foreground transition-colors"
                            href="/blog"
                        >
                            blog
                        </Link>
                        <a
                            className="text-sm font-playfair text-muted-foreground hover:text-foreground transition-colors"
                            href="/Fahmin_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            resume
                        </a>
                        <div className="w-9 h-9 flex items-center justify-center">
                            {mounted && (
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <FaMoon size={18} className="text-foreground" />
                                    ) : (
                                        <FaSun size={18} className="text-foreground" />
                                    )}
                                </button>
                            )}
                        </div>
                    </ul>
                </div>
                <div className="absolute left-0 top-full flex justify-center"></div>
            </nav>
        </div>
    );
}
