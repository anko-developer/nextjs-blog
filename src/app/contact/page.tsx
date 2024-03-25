import type { Metadata } from 'next'
import ContactForm from "@/components/ContactForm";
import { AiFillGithub } from "react-icons/ai";

export const metadata: Metadata = {
  title: 'Anko Blog | Contact Me',
  description: 'Anko에게 메일 보내기',
}

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/anko-developer'
  }
]
export default function ContactPage() {
  return <section className="flex flex-col items-center">
    <h2 className="text-3xl font-bold my-2">Contact Me</h2>
    <p>mycarton@naver.com</p>
    <div className="flex gap-4 my-2">
      {LINKS.map((link, index) => <a key={index} href={link.url} target="_blank" className='text-5xl hover:text-yellow-500'>
        {link.icon}
      </a>)}
    </div>
    <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
    <ContactForm />
  </section>;
}
