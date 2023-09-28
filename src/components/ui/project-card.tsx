"use client";
import Image from "next/image";

import { type ProjectSchema } from "~/sanity/schemas/projects-schema";
import Button from "./styled/Button";

export default function ProjectCard({ project }: { project: ProjectSchema }) {
  const linkHref = `/projects/${project.slug}`;
  const liveLinkHref = project.liveLink;
  return (
    <div className="flex max-w-6xl animate-fade flex-col justify-center md:flex-row">
      {/* Image Section */}
      <div>
        <Image
          src={project.image}
          width={720}
          height={720}
          alt={project.name}
          className="h-full rounded-t-[30px] object-cover object-center md:w-[500px] md:rounded-l-[50px] md:rounded-tr-none"
        />
      </div>
      {/* Text Section */}
      <div className="flex w-full flex-col justify-center rounded-b-[30px] bg-white py-8 text-start shadow-lg md:rounded-r-[50px] md:rounded-bl-none">
        <div className="mx-8 flex max-w-xl flex-col gap-2">
          <h2 className="font-semibold">{project.name}</h2>
          <div className="-mt-1 flex gap-16">
            <label className="text-label">
              {project.tags.map((tag: string, i) => (
                <span key={`${tag}${i}`}>
                  {tag} {i < project.tags.length - 1 ? "• " : ""}
                </span>
              ))}
            </label>
          </div>

          <p>{project.description}</p>
          <div className="flex flex-col gap-4 pt-4 md:flex-row">
            <Button type="link" href={linkHref} styleType="normal2">
              View case study
            </Button>
            {!!liveLinkHref && (
              <Button
                type="link"
                color="secondary"
                href={liveLinkHref}
                external
                styleType="normal2"
              >
                View live
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
