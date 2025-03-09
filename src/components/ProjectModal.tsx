"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
  };
}

export function ProjectModal({
  isOpen,
  closeModal,
  project,
}: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 shadow-xl transition-all">
                <div className="relative h-64 w-full mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 mb-4"
                >
                  {project.title}
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center rounded-md bg-blue-600/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-blue-500/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      View Project
                    </a>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-300/80 dark:hover:bg-gray-700/80"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
