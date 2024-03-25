'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";


type Form = {
  from: string;
  subject: string;
  message: string;
}

const DEFAULT_DATA = {
  from: '', 
  subject: '', 
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '', 
    subject: '', 
    message: ''
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
    .then(() => {
      setBanner({message: '메일 전송에 성공했습니다!', state: 'success'});
      setForm(DEFAULT_DATA);
    })
    .catch(() => {
      setBanner({message: '메일 전송에 실패하였습니다.!', state: 'error'});
    })
    .finally(() => {
      setTimeout(() => {
        setBanner(null);
      }, 3000);
    });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white">
        <label htmlFor="from" className="font-semibold">Your Email</label>
        <input type="email" name="from" id="from" required autoFocus value={form.from} onChange={handleChange} className="text-black" />
        <label htmlFor="subject" className="font-semibold">Your Subject</label>
        <input type="text" name="subject" id="subject" required value={form.subject} onChange={handleChange} className="text-black" />
        <label htmlFor="message" className="font-semibold">Your Message</label>
        <textarea rows={10} name="message" id="message" required value={form.message} onChange={handleChange} className="text-black" />
        <button className="bg-yellow-300 text-black hover:bg-yellow-400">Submit</button>
      </form>
    </section>
  );
}

