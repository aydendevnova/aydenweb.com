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
            console.log(value);
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
                  className="my-8 h-96 w-full rounded-xl object-cover shadow-lg"
                />
              );
            }
            return (
              <a
                href={value.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-500 hover:underline"
              >
                {text}
              </a>
            );
          },
        },
      }}
    ></PortableText>
  );
}
