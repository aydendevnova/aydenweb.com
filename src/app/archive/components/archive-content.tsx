"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { type ArchiveSchema } from "~/sanity/schemas/archive-schema";
import { Fragment } from "react";

export default function ArchiveContent({
  props: props,
}: {
  props: ArchiveSchema[];
}) {
  const [selectedProject, setSelectedProject] = useState<ArchiveSchema | null>(
    null,
  );

  return (
    <>
      <div className="flex flex-col items-center px-6 pb-52 pt-32">
        <h1 className="text-gray-800  text-3xl font-bold tracking-tight">
          Project Archive
        </h1>
        <p className="mb-12">So you want to see what I have worked on?</p>
        <div
          className="grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          {props.map((project, i) => (
            <div
              key={`${project.text}${i}`}
              onClick={() => setSelectedProject(project)}
              className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-purple-100 bg-white p-8 shadow-md transition-all hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col gap-6">
                <div className="relative flex items-center gap-5">
                  {project.logo && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-purple-100 bg-white p-2 shadow-sm">
                      <Image
                        src={project.logo}
                        alt={project.text}
                        fill
                        className="bg-black object-contain p-1"
                      />
                    </div>
                  )}
                  <h2 className="text-gray-800 text-xl font-semibold tracking-tight">
                    {project.text}
                  </h2>
                </div>

                <div className="text-gray-600 line-clamp-3 text-sm">
                  <PortableText value={project.description} />
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Transition appear show={selectedProject !== null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setSelectedProject(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-h-[90vh] w-full max-w-3xl overflow-hidden overflow-y-auto rounded-2xl bg-white shadow-xl">
                {selectedProject && (
                  <>
                    <div className="border-b border-gray-100 p-6">
                      <div className="flex items-center gap-5">
                        {selectedProject.logo && (
                          <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                            <Image
                              src={selectedProject.logo}
                              alt={selectedProject.text}
                              fill
                              className="bg-black object-contain p-1"
                            />
                          </div>
                        )}
                        <Dialog.Title className="text-gray-800 text-2xl font-bold tracking-tight">
                          {selectedProject.text}
                        </Dialog.Title>
                      </div>
                    </div>
                    {selectedProject.image && (
                      <div className="relative max-h-[28rem] w-full overflow-hidden">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.text}
                          width={1000}
                          height={1000}
                          className="rounded-2xl object-contain px-2 shadow-sm"
                        />
                      </div>
                    )}
                    <div className="prose text-gray-600 max-w-none p-6">
                      <PortableText value={selectedProject.description} />
                    </div>
                    {/* cta */}
                    <div className="flex justify-end p-6">
                      {selectedProject?.liveLink && (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
