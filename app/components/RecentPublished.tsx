import Link from "next/link";
import { getMediumPosts, formatDate } from "@/lib/posts";

export default async function RecentPublished() {
    const mediumPosts = await getMediumPosts();
    // Display only the latest 3 posts on homepage
    const recentPosts = mediumPosts.slice(0, 3);

    return (
        <div className="py-6 px-4">
            <div className="mb-6">
                <h1 className="text-2xl font-playfair font-medium tracking-tight mb-1 text-foreground">
                    Recent Published
                </h1>
                <p className="text-xs text-muted-foreground">
                    thoughts on solana, distributed systems, and blockchain infrastructure
                </p>
            </div>
            <div className="space-y-0">
                <div className="grid grid-cols-[50px_1fr_80px] gap-3 py-2 border-b border-border text-xs text-muted-foreground">
                    <div>year</div>
                    <div>title</div>
                    <div className="text-right">date</div>
                </div>
                {recentPosts.map((post) => {
                    const { year, date } = formatDate(post.pubDate);
                    return (
                        <a
                            key={post.guid}
                            className="grid grid-cols-[50px_1fr_80px] gap-3 py-3 border-b border-border last:border-b-0 group"
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="text-xs text-muted-foreground">
                                {year}
                            </div>
                            <div className="text-sm text-gray-900 dark:text-gray-100 group-hover:underline truncate">
                                {post.title}
                            </div>
                            <div className="text-xs text-gray-400 dark:text-stone-500 text-right">
                                {date}
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
