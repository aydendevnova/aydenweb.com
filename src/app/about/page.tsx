import { type Metadata } from "next";
import ContactPage from "~/components/contact-page";
import Hero from "~/components/hero/hero";
import PortableTextWithImageLink from "~/components/ui/portable-text-image-link";
import Button from "~/components/ui/styled/Button";
import { getAbout, getHero } from "~/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "About Ayden: Not Just Coding",
  description:
    "Learn about me. Choose concrete results instead of promises with Ayden's Full Stack expertise. Unlock your project's potential with just one click",
  icons: ["/favicon.ico"],
};

export default async function About() {
  const [hero, about] = await Promise.all([getHero(), getAbout()]);

  return (
    <>
      <div className="bg-white">
        <div className="relative flex h-full min-h-screen animate-fade flex-col justify-center">
          <Hero hero={hero.filter((hero) => hero.pathname === "/about")[0]}>
            <div data-aos="fade-up">
              <Button
                type="link"
                href="/ayden-resume.pdf"
                className="mx-auto mt-12 md:mx-0"
                external
              >
                View resume
              </Button>
            </div>
          </Hero>
        </div>
      </div>
      <div className="relative flex flex-col items-center bg-light-gray">
        <div className="flex max-w-4xl flex-col gap-24 pt-36">
          <div className="px-6">
            {!!about && about[0] && (
              <div
                key={`${about[0].header}`}
                className="font-semibold"
                data-aos="fade-up"
              >
                <h2 className="mb-4 font-semibold">{about[0].header}</h2>
                <div className="mt-12">
                  <PortableTextWithImageLink value={about[0].description} />
                </div>
              </div>
            )}
          </div>

          <div className="project-details flex max-w-4xl flex-col gap-12 px-6">
            {about
              .filter((about, i) => i != 0)
              .map((about, i) => (
                <div
                  key={`${about.header}${i}`}
                  className="font-semibold"
                  data-aos="fade-up"
                >
                  <h2 className="mb-4 font-semibold">{about.header}</h2>
                  <PortableTextWithImageLink value={about.description} />
                </div>
              ))}
          </div>
        </div>
        <div className="h-60"></div>
      </div>

      <ContactPage />
    </>
  );
}
