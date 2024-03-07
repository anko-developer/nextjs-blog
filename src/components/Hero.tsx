import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center pt-10">
      {/* priority 는 중요한 이미지니까 가장 먼저 다운 받아달라는 값 */}
      <Image
        className="w-[250px] h-[250px] object-cover rounded-full mx-auto"
        src={profileImage}
        alt="프로필"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Anko"}</h2>
      <h3 className="text-xl font-semibold">Front-end Developer</h3>
      <p>의미있는 시간을 보내자!</p>
      <Link
        className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2"
        href="/contact"
      >
        Contact Me!
      </Link>
    </section>
  );
}
