import Hero from "@/components/Hero";
import FeaturePosts from "@/components/FeaturePosts";
import Image from "next/image";
import CarouselPosts from "@/components/CarouselPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturePosts />
      <CarouselPosts />
    </>
  );
}
