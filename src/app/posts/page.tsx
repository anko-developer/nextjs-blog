import type { Metadata } from 'next'
import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export const metadata: Metadata = {
  title: 'Anko Blog | Posts ',
  description: '프론트엔드 관련 블로그 글',
}

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
}
