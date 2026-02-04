import Link from "next/link";
import { getSanityPosts } from "@/lib/sanity";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  };
}

export default async function RecentPublished() {
  const posts = await getSanityPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="py-6 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-playfair font-medium tracking-tight mb-1 text-foreground">
          Recent Published
        </h1>
        <p className="text-xs text-muted-foreground">
          thoughts on AI, web3 and tech
        </p>
      </div>
      <div className="space-y-0">
        <div className="grid grid-cols-[50px_1fr_80px] gap-3 py-2 border-b border-border text-xs text-muted-foreground">
          <div>year</div>
          <div>title</div>
          <div className="text-right">date</div>
        </div>
        {recentPosts.length === 0 ? (
          <Link
            href="/blog"
            className="grid grid-cols-[50px_1fr_80px] gap-3 py-3 border-b border-border last:border-b-0 group"
          >
            <div className="text-xs text-muted-foreground">—</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground">
              No posts yet. Visit blog →
            </div>
            <div className="text-xs text-muted-foreground text-right">—</div>
          </Link>
        ) : (
          recentPosts.map((post) => {
            const { year, date } = formatDate(post.publishedAt);
            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="grid grid-cols-[50px_1fr_80px] gap-3 py-3 border-b border-border last:border-b-0 group"
              >
                <div className="text-xs text-muted-foreground">{year}</div>
                <div className="text-sm text-gray-900 dark:text-gray-100 group-hover:underline truncate">
                  {post.title}
                </div>
                <div className="text-xs text-gray-400 dark:text-stone-500 text-right">
                  {date}
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
