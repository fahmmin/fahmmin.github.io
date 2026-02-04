import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

const isConfigured = projectId !== "your-project-id";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  publishedAt: string;
  categories?: { title: string; slug: string }[];
  body?: unknown;
}

const postListFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  "categories": categories[]->{ title, "slug": slug.current }
`;

const postDetailFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  "categories": categories[]->{ title, "slug": slug.current },
  body
`;

export const postsListQuery = `*[_type == "post"] | order(publishedAt desc) {
  ${postListFields}
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  ${postDetailFields}
}`;

export const postsSlugsQuery = `*[_type == "post"]{ "slug": slug.current }`;

export async function getSanityPosts(): Promise<SanityPost[]> {
  if (!isConfigured) return [];
  try {
    return await client.fetch(postsListQuery);
  } catch {
    return [];
  }
}

export async function getSanityPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!isConfigured) return null;
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    return post || null;
  } catch {
    return null;
  }
}

export async function getSanityPostSlugs(): Promise<{ slug: string }[]> {
  if (!isConfigured) return [];
  try {
    return await client.fetch(postsSlugsQuery);
  } catch {
    return [];
  }
}
