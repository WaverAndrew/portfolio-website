"use client";

import Link from "next/link";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of your first project and its impact. This can be a longer description that provides more detail about the project, its goals, and the problems it solves.",
      image: "/project1.jpg",
      link: "#",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    },
    {
      title: "Project Two",
      description:
        "A brief description of your second project and its impact. This can be a longer description that provides more detail about the project, its goals, and the problems it solves.",
      image: "/project2.jpg",
      link: "#",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <TypewriterEffect
            words={[
              { text: "Hey," },
              { text: "I'm" },
              { text: "Andrea", className: "text-purple-800" },
              { text: ":)" },
            ]}
            className="text-3xl font-bold sm:text-3xl text-left"
            cursorClassName="bg-gray-900 ml-0"
          />
          <div className="flex gap-3 items-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          I am a 20 y/o student living in Milan, Italy. I have a burning passion
          for startups and technology, started coding at 11 and quickly became
          passionate about bringing my ideas to life, and from that moment I
          never stopped building.
        </p>
      </section>
      {/* Photo Collage Grid */}
      <section className="relative overflow-hidden max-w-2xl">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/95 via-white/50 to-transparent lg:hidden z-10"></div>
        <div className="grid grid-cols-6 gap-1.5 auto-rows-[60px]">
          <div className="col-span-2 row-span-3 relative rounded-lg overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG1%20copy%202.png"
              alt="Photo w/ Dan"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="col-span-2 row-span-3 relative rounded-lg overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/image.webp"
              alt="Photo 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-2 row-span-3 relative rounded-lg overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG_8669-2.webp"
              alt="Marocco"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/image.webp"
              alt="Photo 7"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG_5826-2.webp"
              alt="Photo 8"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Work Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Work & Experiences</h2>
        <div className="space-y-2">
          {[
            {
              company: "Amazon",
              logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
              role: "Incoming - Project Manager Intern",
              type: "Incoming - Project Manager Intern",
              period: "Jun 2025 - Sept 2025",
              location: "Luxembourg, Luxembourg",
            },
            {
              company: "Leger Labs",
              logo: "https://media.licdn.com/dms/image/v2/D560BAQHZpywtsLraYw/company-logo_200_200/company-logo_200_200/0/1719257305365?e=1749686400&v=beta&t=SEQq3JX8r6vrJ3TjULcdZPMJ1YF-S5_42ZVYl9_q0P4",
              type: "Software Engineer - Applied AI",
              period: "March 2025 - Present",
              location: "Remote",
              description:
                "Leger Labs is a NYC based VC-backed startup creating agentic AI solutions for the insurance industry. I'm developing an AI-powered sales calls analysis tool to optimize the sales process and collect data from the prospect automatically. ",
            },
            {
              company: "Ubooks.it",
              logo: "/images/ubooks.png",
              role: "Founder & Product Lead",
              type: "Founder & Product Lead",
              period: "2025 - Present",
              location: "Milan, Italy",
              description:
                "Developed and shipped multiple features for the company's flagship product. Collaborated with design team to improve user experience.",
            },
            {
              company: "Idemos",
              logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHl1hu-bNuqpg/company-logo_100_100/company-logo_100_100/0/1692711668598?e=1749686400&v=beta&t=It8iYzEkgdMMznhDnt3thBQT8AqOg4fmMTNMIkbsHzs",
              role: "Co-Founder & Product Lead",
              type: "Co-Founder & Product Lead",
              period: "Sept 2021 - June 2022",
              location: "Remote",
              description:
                "Led the development and launch of Idemos, where we built a scalable personalization platform for web 3.0 companies. Successfully collaborated with 20+ international clients and achieved revenue in excess of five figures per month at 17 y/o",
            },
          ].map((job, i) => (
            <details
              key={i}
              className="group bg-gray-50/50 dark:bg-gray-900/50 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            >
              <summary className="flex items-center gap-4 p-3 cursor-pointer list-none">
                <div className="w-7 h-7 relative flex-shrink-0">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {job.company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {job.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {job.period}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {job.location}
                    </p>
                  </div>
                </div>
              </summary>
              <div className="px-3 pb-3 text-sm text-gray-600 dark:text-gray-400">
                {job.description}
              </div>
            </details>
          ))}
        </div>
      </section>
      {/* Awards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "🏆",
              title: "First Place",
              event: "University Hackathon 2024",
              tagline:
                "Built an AI-powered solution for sustainable energy management",
            },
            {
              icon: "🎓",
              title: "Dean's List",
              event: "Academic Excellence",
              tagline:
                "Maintained top academic performance for consecutive semesters",
            },
            {
              icon: "🌟",
              title: "Rising Star Award",
              event: "Tech Conference 2023",
              tagline:
                "Recognized for innovative contributions in software development",
            },
            {
              icon: "🔬",
              title: "Research Grant",
              event: "Innovation Fund",
              tagline:
                "Awarded funding for research in machine learning applications",
            },
          ].map((award, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            >
              <div className="text-4xl flex-shrink-0">{award.icon}</div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {award.event}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {award.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
              className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors text-left"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}

      {/* Quote */}
      <section className="space-y-6">
        <div className="relative p-8 bg-gray-50/50 dark:bg-gray-900/50 rounded-lg max-w-3xl mx-auto">
          <svg
            className="absolute text-gray-300 dark:text-gray-700 h-16 w-16 -top-4 -left-4 transform -rotate-12"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="relative text-center">
            <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
              The best way to predict the future is to invent it.
            </p>
            <footer className="mt-4">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
                Alan Kay
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Computer Scientist
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pb-4">
        © Made in Italy with &lt;3
      </div>
    </div>
  );
}
