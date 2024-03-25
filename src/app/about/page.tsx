import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/images/profile.jpg";
import Hero from "@/components/Hero";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>나는 누구?</h2>
        <p>의미있는 성장을 추구하는 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>GS ITM (-Now)<br /> 알바천국 (-2020)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Vue<br />Git, VS Code, Figma</p>
      </section>
    </>
    // <div className="flex flex-col justify-center items-center">
    //   <Image
    //     className="object-cover rounded-full mx-auto"
    //     src={profileImage}
    //     width="100"
    //     height="100"
    //     alt="프로필"
    //   />
    //   <strong>{"Hi, I'm Anko"}</strong>
    //   <p>Front-end Developer</p>
    //   <p>의미있는 시간을 보내자!</p>
    //   <Link href="/contact">Contact Me!</Link>
    // </div>
  );
}
