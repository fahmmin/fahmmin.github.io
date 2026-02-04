import { getSanityPosts } from "@/lib/sanity";
import { getMediumPosts } from "@/lib/posts";
import BlogContent from "./BlogContent";

export default async function Blog() {
  const [sanityPosts, mediumPosts] = await Promise.all([
    getSanityPosts(),
    getMediumPosts(),
  ]);

  return (
    <div className="containers">
      <BlogContent sanityPosts={sanityPosts} mediumPosts={mediumPosts} />
    </div>
  );
}
