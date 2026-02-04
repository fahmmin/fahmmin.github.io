import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSanityPostBySlug, getSanityPostSlugs, urlFor } from "@/lib/sanity";
import { PortableText } from "@/app/components/PortableText";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await getSanityPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getSanityPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="containers">
      <article className="py-6 px-4">
        <Link
          href="/blog"
          className="text-xs text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← back to blog
        </Link>
        <header className="mb-6">
          <time
            dateTime={post.publishedAt}
            className="text-xs text-gray-500 dark:text-stone-500"
          >
            {formatDate(post.publishedAt)}
          </time>
          <h1 className="text-2xl font-playfair font-medium tracking-tight mt-1 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          {post.categories?.length ? (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          ) : null}
        </header>
        {post.coverImage?.asset?._ref ? (
          <div className="relative w-full aspect-video rounded overflow-hidden bg-secondary mb-6">
            <Image
              src={urlFor(post.coverImage).width(900).height(506).fit("max").url()}
              alt={post.coverImage.alt || post.title}
              width={900}
              height={506}
              className="object-cover"
              priority
            />
          </div>
        ) : null}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <PortableText value={post.body as ComponentProps<typeof PortableText>["value"]} />
        </div>
      </article>
    </div>
  );
}
