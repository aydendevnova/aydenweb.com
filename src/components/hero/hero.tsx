import { PortableText } from "@portabletext/react";
import { type HeroSchema } from "~/sanity/schemas/hero-schema";
import { type ReactNode } from "react";
import Illustration from "../svg/illustration";

export default function Hero({
  hero,
  children,
}: {
  hero: HeroSchema | undefined;
  children?: ReactNode;
}) {
  return !hero ? null : (
    <>
      <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-white to-purple-100">
        <div className="z-10 mx-auto flex h-fit w-full max-w-6xl animate-fade flex-col items-center justify-between gap-3 px-8 pt-24 max-md:max-w-xl lg:flex-row">
          <div className="pt-32 lg:max-w-2xl lg:pb-24">
            <h2 className="mb-8 hidden md:block">{hero.topText}</h2>

            <PortableText
              value={hero.header}
              components={{
                block: ({ children }) => (
                  <h1 className="text-center text-3xl font-semibold md:text-start md:text-5xl">
                    {children}
                  </h1>
                ),
              }}
            />

            <PortableText
              value={hero.description}
              components={{
                block: ({ children }) => (
                  <p className="mt-8 max-w-lg text-center text-xl max-md:mx-auto max-md:max-w-sm md:text-start md:text-3xl">
                    {children}
                  </p>
                ),
              }}
            />

            {children}
          </div>
          <div className="mt-8">
            <Illustration />
          </div>
        </div>
      </div>
    </>
  );
}
