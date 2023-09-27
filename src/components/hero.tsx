import { PortableText } from "@portabletext/react";
import { type HeroSchema } from "~/sanity/schemas/hero-schema";
import { type ReactNode } from "react";
import blueWave from "~/assets/blue-wave-2.png";
export default function Hero({
  hero,
  children,
}: {
  hero: HeroSchema | undefined;
  children?: ReactNode;
}) {
  return !hero ? null : (
    <>
      <div
        className="absolute -left-24 h-full w-[120%] rotate-[-18deg] bg-contain bg-right-bottom bg-no-repeat opacity-40 md:top-36"
        style={{
          backgroundImage: `url(${blueWave.src})`,
          filter: "saturate(80%)",
        }}
      ></div>
      <div className="relative z-10 flex h-full min-h-screen max-w-5xl flex-col justify-center gap-3 px-4 py-16 pb-52 md:pb-24 md:pl-16 lg:pl-36">
        <h2 className="hidden md:block">{hero.topText}</h2>
        <PortableText
          value={hero.header}
          components={{
            block: ({ children }) => (
              <h1 className="text-center md:text-start">{children}</h1>
            ),
          }}
        />

        <PortableText
          value={hero.description}
          components={{
            block: ({ children }) => (
              <h2 className="text-center md:text-start">{children}</h2>
            ),
          }}
        />

        {children}
      </div>
    </>
  );
}
