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
    period: string;
    results: string[];
    problems: string[];
    learnings: string[];
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
                  className="text-2xl font-bold leading-6 mb-2"
                >
                  {project.title}
                </Dialog.Title>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.period}
                </p>

                <div className="mt-4 space-y-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Results
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {project.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50/50 dark:bg-red-900/10 rounded-lg p-4 border border-red-100 dark:border-red-900/20">
                        <h4 className="font-medium text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-current"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                          </svg>
                          Problems
                        </h4>
                        <ul className="space-y-2">
                          {project.problems.map((problem, index) => (
                            <li
                              key={index}
                              className="text-sm text-red-600 dark:text-red-400 flex items-start gap-2"
                            >
                              <span className="text-red-400 dark:text-red-500">
                                •
                              </span>
                              {problem}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50/50 dark:bg-green-900/10 rounded-lg p-4 border border-green-100 dark:border-green-900/20">
                        <h4 className="font-medium text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-current"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          Learnings
                        </h4>
                        <ul className="space-y-2">
                          {project.learnings.map((learning, index) => (
                            <li
                              key={index}
                              className="text-sm text-green-600 dark:text-green-400 flex items-start gap-2"
                            >
                              <span className="text-green-400 dark:text-green-500">
                                •
                              </span>
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
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
