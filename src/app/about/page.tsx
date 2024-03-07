import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="rounded-full mx-auto"
        src="https://picsum.photos/id/237/100/100"
        width="100"
        height="100"
        alt="프로필"
      />
      <strong>{"Hi, I'm Anko"}</strong>
      <p>Front-end Developer</p>
      <p>의미있는 시간을 보내자!</p>
      <Link href="/contact">Contact Me!</Link>
    </div>
  );
}
