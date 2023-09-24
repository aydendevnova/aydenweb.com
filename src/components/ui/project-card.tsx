"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxArrowRight } from "react-icons/rx";
import { ProjectSchema } from "~/sanity/schemas/projects-schema";

export default function ProjectCard({ project }: { project: ProjectSchema }) {
  const router = useRouter();
  const linkHref = `/projects/${project.slug}`;
  const liveLinkHref = project.liveLink;
  return (
    <button onClick={() => router.push(linkHref)}>
      <div className="flex max-w-6xl animate-fade cursor-pointer justify-center transition-transform duration-300 hover:scale-105">
        <div>
          <Image
            src={project.image}
            width={720}
            height={720}
            alt={project.name}
            className="h-[300px] w-[500px] rounded-l-[60px] object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col justify-center rounded-r-[60px] bg-white text-start shadow-lg">
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
            {/* <PortableText value={project.description} /> */}
            <p>{project.description}</p>
            <Link
              href={liveLinkHref}
              passHref
              className="flex cursor-pointer gap-4 hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="font-semibold">{project.liveLink}</span>
              <RxArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </button>
  );
}
