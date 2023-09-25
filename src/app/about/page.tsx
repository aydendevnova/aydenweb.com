import Image from "next/image";
import ContactPage from "~/components/contact-page";
import Hero from "~/components/hero";
import PortableTextWithImageLink from "~/components/ui/portable-text-image-link";
import Button from "~/components/ui/styled/Button";
import { getAbout, getHero, getQuotes } from "~/sanity/sanity-utils";

export default async function About() {
  const [hero, about, quotes] = await Promise.all([
    getHero(),
    getAbout(),
    getQuotes(),
  ]);

  return (
    <>
      <div className="bg-light-gray">
        <div className="relative flex h-full min-h-screen flex-col justify-center">
          <Hero hero={hero.filter((hero) => hero.pathname === "/about")[0]}>
            <Button
              type="link"
              href="/ayden-resume.pdf"
              className="mx-auto mt-6 md:mx-0"
            >
              View resume
            </Button>
          </Hero>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center">
        <div className="flex max-w-3xl flex-col gap-12">
          <div className="px-6">
            {!!about && about[0] && (
              <div key={`${about[0].header}`} className="font-semibold">
                <h2 className="mb-4 font-semibold">{about[0].header}</h2>
                <div className="">
                  <PortableTextWithImageLink value={about[0].description} />
                </div>
              </div>
            )}
          </div>

          <div className="px-6">
            <h2 className="pb-4 font-semibold">{quotes.header}</h2>

            <div className="flex flex-col gap-12">
              {quotes.quotes.map((quote, i) => (
                <div
                  key={`${quote.quoterTitle}${i}`}
                  className="flex flex-col gap-2 rounded-xl bg-light-gray p-3 shadow-lg"
                >
                  <i>{quote.content}</i>
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

          <div className="project-details flex max-w-3xl flex-col gap-6 px-6">
            {about
              .filter((about, i) => i != 0)
              .map((about, i) => (
                <div key={`${about.header}${i}`} className="font-semibold">
                  <h2 className="mb-4 font-semibold">{about.header}</h2>
                  <PortableTextWithImageLink value={about.description} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="h-60"></div>
      <ContactPage />
    </>
  );
}
