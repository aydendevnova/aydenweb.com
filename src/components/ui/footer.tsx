import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useId } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ContactSchema } from "~/sanity/schemas/contact-schema";

const Socials = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ayden-springer-03a61824a/",
  },
  {
    icon: FaGithub,
    link: "https://github.com/WraithWinterly",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/WraithWinterly",
  },
];

export default function Footer({ contact }: { contact: ContactSchema }) {
  const id = useId();

  return (
    <footer className="text-gray-300 relative w-full text-white">
      <div className="bg-bgPurple flex justify-center bg-opacity-70 p-7">
        <div className="flex flex-col items-center gap-2">
          <PortableText
            value={contact.footerText}
            components={{
              block: ({ children }) => <p className="text-white">{children}</p>,
            }}
          />

          <div className="my-2 flex items-center gap-10">
            {contact.socials.map((social, i) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                key={`${id}-${i}`}
              >
                <Image
                  src={social.icon}
                  width={64}
                  height={64}
                  alt={social.link}
                  className="h-[24px] w-[24px] object-contain object-center"
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <a href={`https://${process.env.NEXT_PUBLIC_URL}`}>
              <span className="">{process.env.NEXT_PUBLIC_URL}</span>
            </a>
            <p className="hidden md:inline-block">&bull;</p>
            <p>&copy;2022-{new Date().getFullYear()}</p>
            <p className="hidden md:inline-block">&bull;</p>
            <a
              href="https://github.com/WraithWinterly/aydens.net"
              className="hover:text-accent"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
