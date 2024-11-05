import worldDot from "~/assets/world-dot.png";
import Button from "./ui/styled/Button";
import Image from "next/image";
import Footer from "./ui/footer";
import { getContact } from "~/sanity/sanity-utils";

export default async function ContactPage() {
  const contact = await getContact();
  return (
    <div className="relative">
      <div className="relative flex flex-col justify-between bg-slate-900 px-6 pb-2 pt-12">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-center bg-no-repeat object-cover py-20">
          <Image
            src={worldDot.src}
            width={worldDot.width / 1.2}
            height={worldDot.height / 1.2}
            className="pointer-events-none absolute pt-48 opacity-50"
            alt=""
            data-aos=""
          />
          <div
            className="z-10 flex w-full max-w-2xl flex-col"
            data-aos="fade-up"
          >
            <h2 className="font-semibold text-white">
              {contact.contactHeader}
            </h2>
            <p className="pb-8 pt-2 text-white">{contact.description} </p>
            <form
              action="https://usebasin.com/f/5785003bca73"
              method="POST"
              className="text-gray-400 flex w-full flex-col gap-8"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-slate-200">
                  Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  required
                  className="border-2 border-gray-500 bg-slate-800/60 px-4 py-4 text-white outline-gray-400/70 backdrop-blur-md placeholder:text-slate-200 focus:border-gray-100"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-slate-200">
                  Email{" "}
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  required
                  className="border-2 border-gray-500 bg-slate-800/60 px-4 py-4 text-white outline-gray-400/70 backdrop-blur-md placeholder:text-slate-200 focus:border-gray-100"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-slate-200">
                  Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  cols={33}
                  required
                  className="resize-none rounded-md border-2 border-gray-500 bg-slate-800/60 px-4 py-4 text-white outline-gray-100 ring-0 backdrop-blur-md placeholder:text-slate-200 focus:border-gray-100"
                />
              </div>

              <Button className="mx-auto md:mx-0">Send message</Button>
            </form>
          </div>
        </div>
        <Footer contact={contact} />
      </div>
    </div>
  );
}
