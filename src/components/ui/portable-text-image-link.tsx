import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { PortableTextBlock } from "sanity";

export default function PortableTextWithImageLink({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return (
    <PortableText
      value={value}
      components={{
        marks: {
          link: ({ text, value }) => {
            if (
              (value?.href as string).includes(".png") ||
              (value?.href as string).includes(".jpg") ||
              (value?.href as string).includes(".jpeg")
            ) {
              return (
                <Image
                  width={1200}
                  height={800}
                  src={value.href}
                  alt={text}
                  className="my-8 h-60 w-full rounded-xl object-cover shadow-lg md:h-96"
                />
              );
            }
            return (
              <a
                href={value.href}
                target="_blank"
                rel="noreferrer noopener"
                className="break-all text-blue-500 hover:underline"
              >
                {text}
              </a>
            );
          },
          h2: ({ children }) => (
            <h2 className="w-[200px] font-semibold">{children}</h2>
          ),
        },
        block: ({ children }) => (
          <p className="inline-block whitespace-break-spaces break-words">
            {children}
          </p>
        ),
      }}
    ></PortableText>
  );
}
