import { ChevronDown, CodeXml } from "lucide-react";
import { MY_EXPERIENCE } from "@/lib/data";

export default function Experience() {
    return (
        <section className="py-6 pt-10 screen-line-before screen-line-after">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-playfair font-medium tracking-tight mb-1">
                        Experience
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-stone-500">
                        my professional journey and key experiences
                    </p>
                </div>
                <div className="space-y-0">
                    {MY_EXPERIENCE.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            company={exp.company}
                            role={exp.title}
                            period={exp.duration}
                            type="full-time" // Defaulting since data.ts doesn't specify type
                            // Using a generic icon because data.ts doesn't provide icons.
                            icon={<span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>}
                            isCurrent={exp.duration.toLowerCase().includes("present")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({
    company,
    role,
    period,
    type,
    icon,
    isCurrent,
}: {
    company: string;
    role: string;
    period: string;
    type: string;
    icon: React.ReactNode;
    isCurrent?: boolean;
}) {
    return (
        <div className="space-y-4 py-4 border-b border-border last:border-b-0 lowercase">
            <div className="flex items-center gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                    {icon}
                </div>
                <h3 className="text-sm leading-snug font-medium">{company}</h3>
                {isCurrent && (
                    <span className="relative flex items-center justify-center">
                        <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                        <span className="sr-only">Current Employer</span>
                    </span>
                )}
            </div>
            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
                <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
                    <div className="block w-full text-left select-none relative" tabIndex={0}>
                        <div className="relative z-1 mb-1 flex items-center gap-3">
                            <div
                                className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground border border-muted-foreground/15 ring-1 ring-border ring-offset-1 ring-offset-background"
                                aria-hidden="true"
                            >
                                <CodeXml className="size-4" />
                            </div>
                            <h4 className="flex-1 text-sm font-medium text-balance">{role}</h4>
                            <div
                                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                                aria-hidden="true"
                            >
                                <ChevronDown />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 pl-9 pb-2 text-xs text-muted-foreground">
                            <dl>
                                <dt className="sr-only">Employment Type</dt>
                                <dd>{type}</dd>
                            </dl>
                            <div className="h-4 w-px bg-border"></div>
                            <dl>
                                <dt className="sr-only">Employment Period</dt>
                                <dd className="flex items-center gap-0.5">{period}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
