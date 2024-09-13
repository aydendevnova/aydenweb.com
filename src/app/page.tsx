import { type Metadata } from "next";
import Button from "~/components/ui/styled/Button";

import { PortableText } from "@portabletext/react";
import {
  getHero,
  getProjects,
  getQuotes,
  getServices,
  getSkills,
} from "~/sanity/sanity-utils";

import Image from "next/image";
import ContactPage from "~/components/contact-page";
import Hero from "~/components/hero/hero";
import ProjectCard from "~/components/ui/project-card";

import JoinSVG from "~/components/svg/join";
import { RxQuote } from "react-icons/rx";

export const metadata: Metadata = {
  title: "Ayden: Realizing Visions",
  description:
    "Realize your visions today. No more false promises - unlock your digital potential. Blending visionary thinking with technical expertise.",
  icons: ["/favicon.ico"],
};

export default async function Home() {
  const [hero, services, projects, skills, quotes] = await Promise.all([
    getHero(),
    getServices(),
    getProjects({ showcaseOnly: true }),
    getSkills(),
    getQuotes(),
  ]);

  return (
    <>
      <div className="">
        <div className="relative flex min-h-screen animate-fade flex-col justify-center">
          <Hero hero={hero.filter((hero) => hero.pathname === "/").at(0)}>
            <div className="mt-8 flex flex-col items-center md:flex-row md:items-start md:gap-4">
              <Button
                type="link"
                href="/about"
                className="mt-8 bg-[#6c63ff] text-white"
              >
                Get in touch
              </Button>
              <Button
                type="link"
                href="/ayden-resume.pdf"
                external
                className="mt-8 bg-gray-200"
              >
                View Resume
              </Button>
            </div>
          </Hero>
        </div>

        <div className="flex w-full flex-col items-center py-32">
          <div className="flex w-full max-w-5xl flex-col items-start gap-3 px-8">
            <h2 className="mb-20 ml-6 md:ml-10" data-aos="fade-up">
              {skills.headerText}
            </h2>
            <div className="grid w-full grid-cols-3 justify-between md:grid-cols-6">
              {skills.skills.map((skill, i) => (
                <div
                  key={`${skill.title}${i}`}
                  className="my-3 flex w-20 flex-col items-center justify-center place-self-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 24}
                >
                  <Image
                    src={skill.image}
                    width={72}
                    height={72}
                    alt={skill.title}
                    className="h-[72px] w-[72px] object-contain object-center"
                  />
                  <p className="whitespace-nowrap pt-4 font-semibold">
                    {skill.title}
                  </p>
                </div>
              ))}
            </div>
            {!!skills?.skills?.length && (
              <div
                data-aos="fade-up"
                data-aos-delay={skills?.skills?.length * 24}
              >
                <Button
                  type="link"
                  href="/about"
                  className="mx-auto mt-12 md:ml-10"
                >
                  Learn more about me
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto my-48 max-w-5xl px-6">
          <h2 className="mb-20" data-aos="fade-up">
            {quotes.header}
          </h2>

          <div className="mb-24 flex flex-col gap-12">
            {quotes.quotes.map((quote, i) => (
              <div
                key={`${quote.quoterTitle}${i}`}
                className="flex flex-col gap-2 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-lg"
                data-aos="fade-up"
              >
                <div className="flex items-start gap-3">
                  <RxQuote className="mt-1 shrink-0 text-accent2" />
                  <i>{quote.content}</i>
                </div>
                <div className="flex flex-row items-center gap-4 pt-4">
                  {!!quote.quoterImage && (
                    <Image
                      src={quote.quoterImage}
                      width={48}
                      height={48}
                      alt="quoter"
                      className="rounded-full"
                    />
                  )}
                  <div className="flex flex-col justify-center md:flex-row md:items-center md:gap-12">
                    <p className="flex-1 whitespace-nowrap font-semibold">
                      {quote.quoterName}
                    </p>

                    <i className="max-w-sm">{quote.quoterTitle}</i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-0 bg-white">
          {/* <div className="md:h-36"></div> */}
          <div className="flex flex-col items-center bg-light-gray py-44 pb-[440px]">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-8">
              <div className="mx-auto flex w-full flex-1 items-center justify-between">
                <h2 className="pb-8" data-aos="fade-up">
                  {services.headerText}
                </h2>
                <div className="-mt-14">
                  <JoinSVG />
                </div>
              </div>

              <div className="mx-auto mt-20 flex flex-col flex-wrap gap-16 lg:flex-row">
                {services.services.map((service, i) => (
                  <div
                    key={`${service.serviceName}${i}`}
                    className="w-full max-w-96"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <p className="pb-2 font-semibold text-label">
                      {i < 10 ? "0" : ""}
                      {i + 1}
                    </p>
                    <hr className="mb-8" />
                    <h3 className="pb-4">{service.serviceName}</h3>
                    <PortableText
                      value={service.serviceContent}
                      components={{
                        list: {
                          bullet: ({ children }) => (
                            <ul className="ml-4">{children}</ul>
                          ),
                        },
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative -mt-60 flex w-full flex-col items-center justify-center"
            data-aos="fade-up"
          >
            <h1 className="mb-24">Showcase</h1>
            <div className="z-20 flex max-w-5xl flex-col gap-12 px-6">
              {projects.map((project, i) => (
                <div data-aos="fade-up" key={`${project.name}${i}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
              <div data-aos="fade-up">
                <Button
                  type="link"
                  href="/projects"
                  className="z-20 mx-auto mt-24"
                >
                  View more projects
                </Button>
              </div>
            </div>
            <div className="h-40"></div>
          </div>

          <div className="h-60"></div>
        </div>
      </div>

      <ContactPage />
    </>
  );
}
