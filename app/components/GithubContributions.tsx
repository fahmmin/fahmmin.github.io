"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GithubContributions() {
    const { theme } = useTheme();

    return (
        <div className="w-full overflow-hidden flex justify-center">
            <div className="w-fit">
                {/* @ts-ignore */}
                <GitHubCalendar
                    username="fahmmin"
                    colorScheme={theme === "dark" ? "dark" : "light"}
                    fontSize={12}
                    blockSize={10}
                    blockMargin={4}
                />
            </div>
        </div>
    );
}
