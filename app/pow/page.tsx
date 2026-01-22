"use client";

import Link from "next/link";
import { useState } from "react";
import { PROJECTS, ACHIEVEMENTS } from "@/lib/data";

type FilterType = "all" | "project" | "hackathon" | "other";

export default function ProofOfWork() {
    const [filter, setFilter] = useState<FilterType>("all");

    // Combine PROJECTS and ACHIEVEMENTS for listing, or just show PROJECTS?
    // The original pow.html showed a mix including surfpool (opensource), staking (project).
    // data.ts PROJECTS has year, achievements has year.
    // I'll merge them for display to match the "projects and open source contributions" subtitle.

    const allItems = [
        ...PROJECTS.map(p => ({ ...p, type: "project", date: p.year })),
        ...ACHIEVEMENTS.map(a => ({ ...a, type: a.category, date: a.year, liveUrl: "" }))
    ].sort((a, b) => Number(b.date) - Number(a.date));

    const filteredItems = allItems.filter(
        (item) => filter === "all" || item.type === filter
    );

    return (
        <div className="containers mt-6 mb-6 px-4">
            <div className="mb-6">
                <h1 className="text-xl font-playfair font-medium text-gray-900 dark:text-gray-100">
                    Proof of Work
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    projects i&#x27;ve built and open source contributions
                </p>
            </div>
            <div>
                <div className="inline-flex gap-0.5 mb-6 p-0.5 bg-stone-200 dark:bg-stone-800 rounded-full w-fit">
                    <FilterButton label="all" current={filter} setFilter={setFilter} value="all" />
                    <FilterButton label="projects" current={filter} setFilter={setFilter} value="project" />
                    <FilterButton label="hackathons" current={filter} setFilter={setFilter} value="hackathon" />
                </div>
                <div className="space-y-0">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[50px_1fr] gap-3 py-3 border-b border-gray-200 dark:border-stone-800 last:border-b-0 group"
                        >
                            <div className="text-xs text-gray-400 dark:text-stone-500">
                                {item.date}
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                                        {item.title}
                                    </span>
                                    <span className="text-[10px] text-gray-400 dark:text-stone-500">
                                        · {item.type}
                                    </span>
                                    {/* Using 'liveUrl' as a proxy for link if available */}
                                    {item.liveUrl && (
                                        <a
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[10px] px-2 py-0.5 border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                                        >
                                            live
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-stone-500 mt-0.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description.split("<br/>")[0] }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function FilterButton({
    label,
    value,
    current,
    setFilter,
}: {
    label: string;
    value: FilterType;
    current: FilterType;
    setFilter: (val: FilterType) => void;
}) {
    const isActive = current === value;
    return (
        <button
            onClick={() => setFilter(value)}
            className={`text-[11px] px-3 py-1 rounded-full transition-all font-medium ${isActive
                    ? "bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 shadow-sm"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
        >
            {label}
        </button>
    );
}
