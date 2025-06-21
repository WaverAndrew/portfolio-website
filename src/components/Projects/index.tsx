import React, { useState } from "react";
import Image from "next/image";
import { ProjectModal } from "@/components/ProjectModal";

// Define the project type
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  demoLink: string;
  liveLink?: string | null;
  tech: string[];
  period: string;
  results: string[];
  problems?: string[];
  learnings?: string[];
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "EVE | Multi-Agent Brain for Autonomous Drones",
      description:
        "Creating a multi-agent AI brain for autonomous drones. EVE can process real-time visual and satellite data, enabling human-like reasoning and decision-making. It allows drones to execute complex, abstract missions independently.",
      image: "/images/eve.png",
      link: "",
      demoLink: "",
      liveLink: "",
      tech: ["Python", "MLLMs", "3D Simulator"],
      period: "2025 - Present",
      results: [
        "Successuly created a fully autonomous alpha version",
        "Created a complete 3D simulation by reverse engineering google earth pro",
      ],
      problems: [
        "Coordinating multiple LLM-agents in an iterative process",
        "Latency in brain reaction",
      ],
      learnings: [
        "Exploring the limits of MLLM agents, and how to overcome them",
        "How to create a complete 3D simulation environment",
        "How to give spatial reasoning to an LLM",
      ],
    },
    {
      title: "UBooks",
      description:
        "Founded the first peer-to-peer marketplace for university textbooks in Italy. Currently at 2.8k+ users, 30k visits and 1.5k books traded in the first two weeks.",
      image: "/images/ubooks_screen.jpeg",
      link: "https://ubooks.it",
      demoLink: "",
      liveLink: "https://ubooks.it",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      period: "2024 - Present",
      results: [
        "Reached 2.8k+ users in first two weeks",
        "Achieved 30k visits",
        "Successfully traded 1.5k books",
        "First peer-to-peer marketplace for university textbooks in Italy",
      ],
      problems: [
        "Building trust in a new marketplace",
        "Managing inventory and logistics",
        "Creating a seamless user experience",
      ],
      learnings: [
        "Importance of user feedback in early stages",
        "Value of building a community-driven platform",
        "Need for efficient logistics in marketplace businesses",
      ],
    },
    {
      title: "Instascanner",
      description:
        "An automatic tool designed to easily find instagram pages and influencers meeting certain criteria for influencer marketing campaigns, without manual interaction.",
      image: "/images/instascanner_screen.png",
      link: "",
      demoLink: "",
      liveLink: null,
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
      title: "Idemos",
      description:
        "A platform that allowed web 3.0 projects working with NFTs to offer their customers an easy way to customise their own unique masterpieces, creating a private and personalised experience.",
      image: "/images/idemos.jpeg",
      link: "",
      demoLink: "",
      liveLink: "",
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
      image: "/images/eurys_screen.png",
      demoLink: "https://www.youtube.com/embed/gDFwjE8_178?si=m2TAsWmjeXTE5mBP",
      link: "https://eurys.vercel.app",
      tech: ["Next.js", "AI", "Full Stack", "Pinecone"],
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
    {
      title: "Eaglecam",
      description:
        "A tool that extracted the photos that look the best from short videos using a custom AI Neural Network trained to recognise good looking photos.",
      image: "/images/eaglecam.png",
      link: "",
      demoLink: "",
      liveLink: null,
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
  ];

  return (
    <section className="space-y-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of projects I've built to learn and explore new
          technologies.
        </p>
      </div>
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
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
