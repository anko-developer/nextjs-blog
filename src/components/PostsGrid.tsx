import { Post } from "@/api/posts";
import Image from "next/image";
import PostCard from "./PostCard";

type Props = { posts: Post[] };

export default async function PostsGrid({ posts }: Props) {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </ul>
    </>
  );
}
