import { PortableText } from "@portabletext/react";
import { type HeroSchema } from "~/sanity/schemas/hero-schema";
import { type ReactNode } from "react";
import ellipse13 from "~/assets/ellipse-13.png";
import ModelViewer from "./model/model";
export default function Hero({
  hero,
  children,
}: {
  hero: HeroSchema | undefined;
  children?: ReactNode;
}) {
  return !hero ? null : (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute -top-96 right-44 h-full w-[600px] scale-[200%] bg-contain bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${ellipse13.src})`,
            // darken it
            filter: " brightness(0.8)",
          }}
        ></div>
        <div className="z-10 flex h-full min-h-screen w-full animate-fade flex-col justify-center gap-3 px-8 pt-24 max-md:max-w-xl lg:flex-row">
          <div className="pt-24 lg:max-w-2xl lg:pb-24">
            <h2 className="hidden md:block">{hero.topText}</h2>

            <PortableText
              value={hero.header}
              components={{
                block: ({ children }) => (
                  <h1 className="max-w-3xl text-center md:text-start">
                    {children}
                  </h1>
                ),
              }}
            />

            <PortableText
              value={hero.description}
              components={{
                block: ({ children }) => (
                  <h2 className="max-w-lg text-center max-md:mx-auto max-md:max-w-sm md:text-start">
                    {children}
                  </h2>
                ),
              }}
            />

            {children}
          </div>
          <div className="mt-32 h-[390px] w-full max-lg:pb-12 lg:ml-10 lg:w-[380px] xl:ml-32">
            <ModelViewer />
          </div>
        </div>
      </div>
    </>
  );
}
