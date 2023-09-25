import ContactPage from "~/components/contact-page";
import ProjectCard from "~/components/ui/project-card";
import { getProjects } from "~/sanity/sanity-utils";

export default async function Projects() {
  const projects = await getProjects({ showcaseOnly: false });
  return (
    <>
      <div className="flex flex-col items-center px-6 py-32">
        <h1 className="mb-8 font-semibold">All Projects</h1>
        <div className="flex max-w-5xl flex-col gap-12 ">
          {projects.map((project, i) => (
            <ProjectCard key={`${project.slug}${i}`} project={project} />
          ))}
        </div>
      </div>
      <ContactPage />
    </>
  );
}
