import { type Metadata } from "next";
import Button from "~/components/ui/styled/Button";

import { PortableText } from "@portabletext/react";
import {
  getHero,
  getProjects,
  getServices,
  getSkills,
} from "~/sanity/sanity-utils";

import Image from "next/image";
import ContactPage from "~/components/contact-page";
import Hero from "~/components/hero";
import ProjectCard from "~/components/ui/project-card";
import wave3 from "~/assets/blue-wave-3.png";

export const metadata: Metadata = {
  title: "Ayden: Your Developer",
  description:
    "Realize your visions today. No more false promises - unlock your digital potential. Blending visionary thinking with technical expertise.",
  icons: ["/favicon.ico"],
};

export default async function Home() {
  const [hero, services, projects, skills] = await Promise.all([
    getHero(),
    getServices(),
    getProjects({ showcaseOnly: true }),
    getSkills(),
  ]);

  return (
    <>
      <div className="bg-light-gray">
        <div className="relative flex min-h-screen animate-fade flex-col justify-center">
          <Hero hero={hero.filter((hero) => hero.pathname === "/").at(0)}>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-4">
              <Button type="link" href="/about" className="mt-8">
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

        <div className="relative z-0 bg-white">
          {/* <div className="md:h-36"></div> */}
          <div className="flex flex-col items-center bg-light-gray pb-[440px] pt-28">
            <div className="flex flex-col items-start gap-3 px-8">
              <h2 className="pb-8 font-semibold" data-aos="fade-up">
                {services.headerText}
              </h2>
              <div className="flex flex-col flex-wrap gap-16 lg:flex-row">
                {services.services.map((service, i) => (
                  <div
                    key={`${service.serviceName}${i}`}
                    className="max-w-96 w-full lg:w-72"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <p className=" font-semibold text-label">
                      {i < 10 ? "0" : ""}
                      {i + 1}
                    </p>
                    <hr className="" />
                    <p className=" pb-4 font-bold">{service.serviceName}</p>
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
            className="relative -mt-80 flex w-full flex-col items-center justify-center"
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
                  className="z-20 mx-auto mt-4"
                >
                  View more projects
                </Button>
              </div>
            </div>
            <div className="h-40"></div>
            <div className="absolute bottom-0">
              <div>
                <Image
                  src={wave3.src}
                  width={wave3.width}
                  height={wave3.height}
                  alt="wave"
                  className="pointer-events-none -mt-[300px] w-screen rounded-none object-cover object-center md:-mt-[380px] md:rounded-xl lg:-mt-[440px] xl:-mt-[540px]"
                  style={{
                    filter:
                      "brightness(90%) opacity(60%) saturate(90%) contrast(80%) hue-rotate(-8deg)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="h-12"></div>
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-5xl flex-col items-start gap-3 px-8">
              <h2
                className="ml-6 pb-8 font-semibold md:ml-10"
                data-aos="fade-up"
              >
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
          <div className="h-60"></div>
        </div>
      </div>

      <ContactPage />
    </>
  );
}
