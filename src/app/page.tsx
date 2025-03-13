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
      title: "Instascanner",
      description:
        "An automatic tool designed to easily find instagram pages and influencers meeting certain criteria for influencer marketing campaigns, without manual interaction.",
      image: "/project1.jpg",
      link: "#",
      tech: ["Python", "Web Scraping", "Instagram API"],
      period: "2017-2018",
      results: [
        "Successfully found instagram profiles with custom criteria",
        "Automatic calculation of engagement rate and viral potential",
        "Tested with e-commerce campaigns",
      ],
      problems: [
        "Extremely complex to operate at scale",
        "Problems with instagram bot limitations",
        "Extreme need of manual maintenance",
      ],
      learnings: [
        "Don't rely on other websites to exist (PAIN to maintain operational!)",
        "Work on something more scalable",
      ],
    },
    {
      title: "Eaglecam",
      description:
        "A tool that extracted the photos that look the best from short videos using a custom AI Neural Network trained to recognise good looking photos.",
      image: "/project2.jpg",
      link: "#",
      tech: ["Python", "TensorFlow", "AI/ML"],
      period: "2019",
      results: [
        "Managed to create a working demo",
        "Creating a custom working Neural net at 15 y/o for recognising good photos",
      ],
      problems: [
        "Creating a custom Neural Net with limited knowledge and basically pure guessing over the NN structure",
        "Complexities of server deployment of AI Models",
        "Basically impossible to get done by myself",
      ],
      learnings: [
        "Work on problems people HAVE",
        "Don't try to build a complex solution in the very beginning",
        "How AI & ML models works (it was a good 200+ hours of learning before i managed to do it)",
      ],
    },
    {
      title: "Idemos",
      description:
        "A platform that allowed web 3.0 projects working with NFTs to offer their customers an easy way to customise their own unique masterpieces, creating a private and personalised experience.",
      image: "/project3.jpg",
      link: "#",
      tech: ["Web3", "NFT", "Blockchain"],
      period: "2021-2022",
      results: [
        "Served successfully 20+ international clients",
        "Organized and managed a team",
        "Achieved up to 30.000$/month in revenue",
        "Won startup contest from Banca Intesa (Biggest italian bank)",
      ],
      problems: [
        "Built in a hype-driven, cyclical sector",
        "Impossible to sustain after market crash of mid 2022",
      ],
      learnings: [
        "How to pivot effectively (this wasn't the first concept)",
        "Focus on distribution from the start",
        "Validate the idea in the beginning",
        "In a gold rush, sell shovels",
      ],
    },
    {
      title: "Eurys",
      description:
        "An AI-powered search engine for people. You ask a question in a natural way (such as 'Who can help me with marketing?') and get all the relevant profiles in a second.",
      image: "/project4.jpg",
      link: "#",
      tech: ["Next.js", "AI", "Full Stack"],
      period: "2024",
      results: ["Launching beta in several themed-communities"],
      problems: [
        "Had to learn Next-JS from scratch",
        "Had to develop several custom ways to gather user data",
      ],
      learnings: [
        "Transitioned from only backend to full-stack dev",
        "How to work with 40°C outside",
      ],
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
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-purple-500 pl-4 py-1">
            I'm a <span className="font-medium">20-year-old student</span> based
            in Milan, Italy,{" "}
            <span className="font-bold">
              deeply in love with startups, tech
            </span>
            , and the excitement of turning ideas into reality.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <span className="font-bold">
              I first discovered coding when I was 11
            </span>
            , and since then, I've been hooked: not just by programming itself,
            but by the{" "}
            <span className="italic font-bold">
              thrill of creating something from scratch
            </span>{" "}
            and watching it come to life.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Through each project, I've grown more passionate about
            <span className="font-bold"> entrepreneurship and innovation</span>,
            and that's exactly the path I'm determined to follow.
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Outside of tech, you'll find me playing{" "}
            <span className="font-medium">tennis</span>, chasing fresh powder on
            my <span className="font-medium">snowboard</span>, or diving into a
            good <span className="font-medium">book</span>.
          </p>
        </div>
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
      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-2">
          {[
            {
              school: "Bocconi University",
              logo: "/images/bocconi.png",
              degree: "Bachelor's in Economics and Management",
              period: "2021 - Present",
              location: "Milan, Italy",
              description:
                "3rd in Europe, 7th in the world (QS Ranking). Current GPA: 30.1/30 (as of 08/24)",
              activities: [
                "Bocconi Entrepreneurship Club",
                "Blockchain Association",
                "Bocconi Students for Machine Learning",
              ],
            },
            {
              school: "I.I.S Don Milani Montichiari",
              degree: "Scientific Path",
              period: "2016 - 2021",
              location: "Montichiari, Italy",
              description: "Valedictorian with 100 cum laude / 100",
              achievements: [
                "Italian Olympiad (three times national semi-finals)",
                "Physics Olympiad (national semi-finals)",
                "Math Olympiad (8th in Italy in 2020)",
              ],
            },
          ].map((edu, i) => (
            <details
              key={i}
              className="group bg-gray-50/50 dark:bg-gray-900/50 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            >
              <summary className="flex items-center gap-4 p-3 cursor-pointer list-none">
                <div className="w-7 h-7 relative flex-shrink-0">
                  {edu.logo && (
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.period}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {edu.location}
                    </p>
                  </div>
                </div>
              </summary>
              <div className="px-3 pb-3 text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-2">{edu.description}</p>
                {edu.activities && (
                  <div className="mt-2">
                    <p className="font-medium mb-1">Activities:</p>
                    <ul className="list-disc list-inside">
                      {edu.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {edu.achievements && (
                  <div className="mt-2">
                    <p className="font-medium mb-1">Achievements:</p>
                    <ul className="list-disc list-inside">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
              title: "Valedictorian",
              event: "High School Graduation",
              tagline: "Graduated with maximum cum laude (100/100)",
            },
            {
              icon: "🎯",
              title: "8th Place",
              event: "National Math Olympiad 2020",
              tagline: "Achieved top 10 position in national competition",
            },
            {
              icon: "💼",
              title: "Startup Success",
              event: "Idemos",
              tagline:
                "Achieved over 30.000$/month in revenue from 20+ international clients at 17 y/o",
            },
            {
              icon: "🏅",
              title: "Bank Competition Winner",
              event: "Banca Intesa Startup Contest",
              tagline:
                "Won startup contest from Italy's biggest bank at 18 y/o",
            },
            {
              icon: "🌍",
              title: "Hackathon Award",
              event: "UPenn Hackathon",
              tagline:
                "Won Hackathon Award at UPenn, USA. Was invited and sponsored to travel and participate",
            },
            {
              icon: "🎓",
              title: "Academic Excellence",
              event: "Bocconi University",
              tagline:
                "Maintaining 30.1/30 GPA in one of Europe's top universities",
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
