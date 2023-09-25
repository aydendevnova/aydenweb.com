import { getProject } from "~/sanity/sanity-utils";

import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "~/components/ui/styled/Button";
import ContactPage from "~/components/contact-page";
import Image from "next/image";
import { type ReactNode } from "react";
import { PortableText } from "@portabletext/react";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  return (
    <>
      <div className="flex flex-col items-center pb-32">
        {!project && <div>404 Project not found</div>}
        {!!project && (
          <div className="flex flex-col items-center">
            <Image
              src={project.image}
              width={720}
              height={720}
              alt="project banner"
              className="h-[500px] w-screen object-cover object-center"
            />
            <div className="w-full max-w-3xl">
              <div className="mb-28 flex flex-col items-center gap-2 pt-32 text-center">
                <h1>{project.name}</h1>
                <p className="max-w-xl">{project.description}</p>
                {!!project?.liveLink && (
                  <Button type="link" href={project.liveLink} className="mt-4">
                    View live site
                  </Button>
                )}
              </div>
              <div className="md:px-4 lg:px-0">
                <div className="flex flex-col items-center justify-between md:flex-row">
                  <p>{project.timeline}</p>
                  <i>
                    {project.tags.map(
                      (tag, i) =>
                        `${tag} ${i < project.tags.length - 1 ? "• " : ""}`,
                    )}
                  </i>
                </div>
                <hr className="mb-6 w-full" />
              </div>

              {/* About Section */}
              <div className="px-8 md:px-4">
                <h2 className="mb-4">
                  <b>About</b>
                </h2>
                <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
                  <div className="flex flex-col gap-8 md:gap-2">
                    <div>
                      <b>Role</b>
                      <PortableText value={project.role} />
                    </div>
                    <div>
                      <b>Team Members</b>
                      <PortableText value={project.teamMembers} />
                    </div>
                  </div>
                  <div>
                    <b>Tech Stack</b>
                    <PortableText value={project.techStack} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <MDXRemote
                source={project.content}
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-12 px-8 font-semibold md:px-4">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="mt-2 px-8 md:px-4">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  WidthContainer: ({ children }) => (
                    <WidthContainer>{children}</WidthContainer>
                  ),
                  BoxHighlight: ({ children }) => (
                    <BoxHighlight>{children}</BoxHighlight>
                  ),
                  BoxInImage: ({ imgURL, children }) => (
                    <BoxInImage imgURL={imgURL}>{children}</BoxInImage>
                  ),
                  ol: ({ children }) => <ol className="pt-1">{children}</ol>,
                  li: ({ children }) => <li className="ml-4">{children}</li>,
                }}
              />
            </div>
            <Button
              type="link"
              href={project.liveLink}
              className="z-10 mx-auto mt-24"
            >
              View live site
            </Button>
          </div>
        )}
      </div>
      <ContactPage />
    </>
  );
}

function WidthContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl">{children}</div>;
}

function BoxHighlight({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12 gap-2 bg-light-gray py-8 text-start shadow-lg md:rounded-xl md:px-6">
      <div className="-mt-12">{children}</div>
    </div>
  );
}

function BoxInImage({
  imgURL,
  children,
}: {
  imgURL: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative my-12 flex h-[600px] flex-col items-center gap-4 bg-cover bg-center lg:w-screen"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute bottom-0 right-0 top-0 max-w-[600px] p-4 md:right-10">
        <div className="flex h-full flex-col items-center justify-center align-middle">
          <div className="h-fit rounded-xl bg-white/80 p-8 pt-16 backdrop-blur-md">
            <div className="-mt-12">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
