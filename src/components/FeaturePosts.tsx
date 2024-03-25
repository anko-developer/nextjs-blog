import { getFeaturePosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturePosts() {
  const posts = await getFeaturePosts();

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
