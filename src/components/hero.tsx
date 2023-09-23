import { PortableText } from "@portabletext/react";
import { HeroSchema } from "~/sanity/schemas/hero-schema";
import Button from "./ui/styled/Button";
import { ReactNode } from "react";

export default function Hero({
  hero,
  children,
}: {
  hero: HeroSchema | undefined;
  children?: ReactNode;
}) {
  return !hero ? null : (
    <>
      <div className="relative z-10 flex h-full min-h-screen max-w-5xl flex-col justify-center gap-3 px-4 py-16 md:pl-16 lg:pl-36">
        <h2>{hero.topText}</h2>
        <PortableText
          value={hero.header}
          components={{
            block: ({ children }) => <h1 className="">{children}</h1>,
          }}
        />

        <PortableText
          value={hero.description}
          components={{
            block: ({ children }) => <h2>{children}</h2>,
          }}
        />

        {children}
      </div>
    </>
  );
}
