import Link from "next/link";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="space-y-6">
        <TypewriterEffect
          words={[
            { text: "Hey," },
            { text: "I'm" },
            { text: "Andrea", className: "gradient-text" },
            { text: ":)" },
          ]}
          className="text-4xl font-bold sm:text-5xl text-left"
          cursorClassName="bg-gray-900 ml-0"
        />
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          I'm a software engineer passionate about building products that make a
          difference. Currently, I'm focused on [your current focus/role].
          Previously, I worked at [previous experience].
        </p>
      </section>

      {/* Photo Collage Grid */}
      <section className="relative overflow-hidden max-w-2xl">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/95 via-white/50 to-transparent lg:hidden z-10"></div>
        <div className="grid grid-cols-2 gap-2 auto-rows-[100px] sm:auto-rows-[120px]">
          <div className="row-span-2 relative rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG1%20copy%202.png"
              alt="Photo w/ Dan"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/image.webp"
              alt="Photo 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="row-span-2 relative rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG_8669-2.webp"
              alt="Marocco"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://pub-4515151b6c424acfad425474e1717a02.r2.dev/IMG_5826-2.webp"
              alt="Apple Park"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Work</h2>
        <div className="space-y-4">
          {[
            {
              company: "Company One",
              logo: "/company1-logo.png",
              role: "Software Engineer",
              type: "Engineering, AI",
              period: "2024",
              location: "San Francisco, CA",
            },
            {
              company: "Company Two",
              logo: "/company2-logo.png",
              role: "Product Engineer",
              type: "Product",
              period: "2023",
              location: "New York, NY",
            },
          ].map((job, i) => (
            <div key={i} className="group flex items-center gap-4 py-2">
              <div className="w-8 h-8 relative flex-shrink-0">
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
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Project One",
              description:
                "A brief description of your first project and its impact.",
              image: "/project1.jpg",
              link: "#",
            },
            {
              title: "Project Two",
              description:
                "A brief description of your second project and its impact.",
              image: "/project2.jpg",
              link: "#",
            },
          ].map((project, i) => (
            <Link
              key={i}
              href={project.link}
              className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
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
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <div className="flex gap-6">
          {[
            { name: "GitHub", url: "https://github.com/yourusername" },
            { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
            { name: "Twitter", url: "https://twitter.com/yourusername" },
            { name: "Email", url: "mailto:your.email@example.com" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.url}
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
