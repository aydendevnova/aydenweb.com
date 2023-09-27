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
import { env } from "~/env.mjs";

export const metadata: Metadata = {
  title: "Ayden: Your Developer",
  description:
    "Realize your visions today. No more false promises - unlock your digital potential. Blending visionary thinking with technical expertise.",
  icons: ["/favicon.ico"],
};

export const revalidate = env.NODE_ENV === "production" ? 3200 : 0;

export default async function Home() {
  const hero = await getHero();
  const services = await getServices();
  const projects = await getProjects({ showcaseOnly: true });

  const skills = await getSkills();

  return (
    <>
      <div className="bg-light-gray">
        <div className="relative flex min-h-screen animate-fade flex-col justify-center">
          <Hero hero={hero.filter((hero) => hero.pathname === "/").at(0)}>
            <Button type="link" href="/about" className="mt-8">
              Get in touch
            </Button>
          </Hero>
        </div>
        <div className="md:h-36"></div>
        <div className="flex flex-col items-center">
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
        <div className="h-60"></div>
      </div>
      <div className="-mt-20 flex w-full justify-center">
        <div className="flex max-w-5xl flex-col gap-12 px-6">
          {projects.map((project, i) => (
            <div data-aos="fade-up">
              <ProjectCard project={project} key={`${project.name}${i}`} />
            </div>
          ))}
          <div data-aos="fade-up">
            <Button type="link" href="/projects" className="mx-auto mt-12">
              View more projects
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="h-40"></div> */}
      <Image
        src={wave3.src}
        width={wave3.width}
        height={wave3.height}
        alt="wave"
        className="pointer-events-none h-full w-screen rounded-none object-cover object-center md:rounded-xl lg:-mt-24 xl:-mt-72"
        style={{
          filter:
            "brightness(90%) opacity(60%) saturate(90%) contrast(80%) hue-rotate(-8deg)",
        }}
      />

      <div className="h-12"></div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col items-start gap-3 px-8">
          <h2 className="ml-6 pb-8 font-semibold md:ml-10" data-aos="fade-up">
            {skills.headerText}
          </h2>
          <div className="grid w-full grid-cols-3 justify-between md:grid-cols-6">
            {skills.skills.map((skill, i) => (
              <div
                key={`${skill.title}${i}`}
                className="my-3 flex w-20 flex-col items-center justify-center place-self-center"
                data-aos="fade-up"
                data-aos-delay={i * 50}
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
              data-aos-delay={skills?.skills?.length * 50}
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
      <ContactPage />
    </>
  );
}
