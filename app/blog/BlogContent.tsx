"use client";

import Link from "next/link";
import { useState } from "react";
import type { SanityPost } from "@/lib/sanity";
import type { MediumPost } from "@/lib/posts";

type BlogFilter = "all" | "medium";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  };
}

function FilterButton({
  label,
  value,
  current,
  setFilter,
}: {
  label: string;
  value: BlogFilter;
  current: BlogFilter;
  setFilter: (val: BlogFilter) => void;
}) {
  const isActive = current === value;
  return (
    <button
      type="button"
      onClick={() => setFilter(value)}
      className={`text-[11px] px-3 py-1 rounded-full transition-all font-medium ${
        isActive
          ? "bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 shadow-sm"
          : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
      }`}
    >
      {label}
    </button>
  );
}

interface BlogContentProps {
  sanityPosts: SanityPost[];
  mediumPosts: MediumPost[];
}

export default function BlogContent({ sanityPosts, mediumPosts }: BlogContentProps) {
  const [filter, setFilter] = useState<BlogFilter>("all");

  const showSanity = filter === "all";
  const showMedium = filter === "medium";
  const postsToShow = showSanity ? sanityPosts : mediumPosts;

  return (
    <div className="py-6 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-playfair font-medium tracking-tight mb-1 text-gray-900 dark:text-gray-100">
          Recent Published
        </h1>
        <p className="text-xs text-gray-500 dark:text-stone-500">
          thoughts on AI, web3 and tech
        </p>
      </div>
      <div className="inline-flex gap-0.5 mb-6 p-0.5 bg-stone-200 dark:bg-stone-800 rounded-full w-fit">
        <FilterButton label="all" current={filter} setFilter={setFilter} value="all" />
        <FilterButton label="medium" current={filter} setFilter={setFilter} value="medium" />
      </div>
      <div className="space-y-0">
        <div className="grid grid-cols-[50px_1fr_80px] gap-3 py-2 border-b border-gray-200 dark:border-stone-800 text-xs text-gray-400 dark:text-stone-500">
          <div>year</div>
          <div>title</div>
          <div className="text-right">date</div>
        </div>

        {showSanity && sanityPosts.length === 0 ? (
          <div className="py-8 text-center text-sm text-muted-foreground border-b border-gray-200 dark:border-stone-800">
            No posts yet. Add content in Sanity Studio.
          </div>
        ) : showMedium && mediumPosts.length === 0 ? (
          <div className="py-8 text-center text-sm text-muted-foreground border-b border-gray-200 dark:border-stone-800">
            No Medium posts.
          </div>
        ) : (
          postsToShow.map((post) => {
            if (showSanity) {
              const p = post as SanityPost;
              const { year, date } = formatDate(p.publishedAt);
              return (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug}`}
                  className="grid grid-cols-[50px_1fr_80px] gap-3 py-3 border-b border-gray-200 dark:border-stone-800 last:border-b-0 group"
                >
                  <div className="text-xs text-gray-400 dark:text-stone-500">{year}</div>
                  <div className="text-sm text-gray-900 dark:text-gray-100 group-hover:underline truncate">
                    {p.title}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-stone-500 text-right">
                    {date}
                  </div>
                </Link>
              );
            }
            const m = post as MediumPost;
            const { year, date } = formatDate(m.pubDate);
            return (
              <a
                key={m.guid}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[50px_1fr_80px] gap-3 py-3 border-b border-gray-200 dark:border-stone-800 last:border-b-0 group"
              >
                <div className="text-xs text-gray-400 dark:text-stone-500">{year}</div>
                <div className="text-sm text-gray-900 dark:text-gray-100 group-hover:underline truncate">
                  {m.title}
                </div>
                <div className="text-xs text-gray-400 dark:text-stone-500 text-right">
                  {date}
                </div>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}
