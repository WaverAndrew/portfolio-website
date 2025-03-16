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
    demoLink?: string;
    liveLink?: string | null;
    period: string;
    results: string[];
    problems?: string[];
    learnings?: string[];
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
          <div className="fixed inset-0 bg-black/50" />
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-6 shadow-xl transition-all border border-gray-200 dark:border-gray-800">
                <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                  {project.demoLink ? (
                    <div className="aspect-video w-full">
                      <iframe
                        src={project.demoLink}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative h-72 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  )}
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-3xl font-bold leading-6 mb-2 text-gray-900 dark:text-white"
                >
                  {project.title}
                </Dialog.Title>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.period}
                </p>

                <div className="mt-4 space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-blue-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Results
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {project.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50/50 dark:bg-red-900/10 rounded-lg p-4 border border-red-100 dark:border-red-900/20 shadow-sm">
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
                          {project.problems?.map((problem, index) => (
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

                      <div className="bg-green-50/50 dark:bg-green-900/10 rounded-lg p-4 border border-green-100 dark:border-green-900/20 shadow-sm">
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
                          {project.learnings?.map((learning, index) => (
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

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all shadow-md hover:shadow-lg"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Live Site
                        </a>
                      )}
                      {project.link &&
                        project.link !== "#" &&
                        !project.liveLink && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center rounded-md bg-blue-600/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-blue-500/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all shadow-md hover:shadow-lg"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 mr-2"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Project Link
                          </a>
                        )}
                    </div>
                    <button
                      type="button"
                      className="inline-flex justify-center items-center rounded-md bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-300/80 dark:hover:bg-gray-700/80 transition-all"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
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
