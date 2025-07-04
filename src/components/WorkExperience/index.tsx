import React from "react";
import Image from "next/image";
import { marked } from "marked";

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Define the job type
interface Job {
  company: string;
  logo: string;
  role?: string;
  type: string;
  period: string;
  location: string;
  description?: string;
}

export const WorkExperience: React.FC = () => {
  const jobs: Job[] = [
    {
      company: "Amazon",
      logo: "/images/amazon.png",
      role: "Project Manager Intern",
      type: "Project Manager Intern",
      period: "Jun 2025 - Sept 2025",
      location: "Luxembourg, Luxembourg",
      description:
        "I'm working on the Supply Chain Optimization Technology (SCOT) team.",
    },
    {
      company: "Y Combinator",
      logo: "/images/yc.png",
      role: "AI Startup School",
      type: "AI Startup School",
      period: "Jun 2025 - Jun 2025",
      location: "San Francisco, CA, US",
      description:
        "Invited to attend the highly selective AI Startup School, a conference where the world best tech students get to listen and learn from top AI leaders and founders such as Sam Altman, Andrew Ng, Elon Musk, and many more.",
    },
    {
      company: "Università Bocconi",
      logo: "/images/bocconi.png",
      role: "Undergraduate Student Researcher",
      type: "Undergraduate Student Researcher",
      period: "mar 2025 - Presente · 3 mesi",
      location: "Milan, Italy",
      description:
        "Department of Computing Sciences, AI Lab. Research project under supervision of prof. Zecchina, Saglietti and Biggio",
    },

    {
      company: "Susquehanna International Group",
      logo: "/images/susquehanna_international_group_llp_sig_logo.jpeg",
      role: "Quantitative Trading - Spring Days",
      type: "Quantitative Trading - Spring Days",
      period: "Apr 2025",
      location: "Dublin, Ireland",
    },
    {
      company: "UBooks",
      logo: "/images/ubooks.jpeg",
      role: "Founder",
      type: "Founder",
      period: "Oct 2024 - Present",
      location: "Milan, Italy",
      description:
        "Founded the first peer-to-peer marketplace for university textbooks in Italy. Currently at **2.8k+ users**, **30k visits** and **1.5k books traded** in the first two weeks.",
    },
    {
      company: "University of Pennsylvania",
      logo: "/images/upenn.jpeg",
      role: "AI in inBlockchain Hackathon | Multiple Award Winner",
      type: "AI in Blockchain Hackathon | Multiple Award Winner",
      period: "Feb 2024 - Feb 2025",
      location: "Philadelphia, PA, US",
      description:
        "<div class='relative before:absolute before:top-1.5 before:bottom-0 before:left-[0.1875rem] before:w-0.5 before:-translate-x-1/2 before:bg-slate-300 dark:before:bg-slate-700'>" +
        // 2025 Hackathon
        "<div class='relative mb-6'>" +
        "<div class='absolute left-0 top-1.5 w-3 h-3 bg-green-500 rounded-full -translate-x-[calc(50%-0.0625rem)]'></div>" +
        "<div class='pl-6'>" +
        "<h3 class='font-bold text-sm md:text-base mb-1 text-slate-700 dark:text-slate-200'>2025 Hackathon</h3>" +
        "<ul class='list-disc pl-4 space-y-1 text-xs md:text-sm text-slate-600 dark:text-slate-400'>" +
        "<li>Invited and sponsored for the <strong>second consecutive year</strong></li>" +
        "<li>Coded <strong>22 hours straight</strong> with minimal breaks</li>" +
        "<li>Developed <strong>4 working projects</strong> with my team</li>" +
        "<li><strong>Won our track</strong> and placed <strong>2nd in another category</strong></li>" +
        "<li>Created a <strong>natural language interface</strong> for complex blockchain operations</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        // 2024 Hackathon
        "<div class='relative'>" +
        "<div class='absolute left-0 top-1.5 w-3 h-3 bg-green-500 rounded-full -translate-x-[calc(50%-0.0625rem)]'></div>" +
        "<div class='pl-6'>" +
        "<h3 class='font-bold text-sm md:text-base mb-1 text-slate-700 dark:text-slate-200'>2024 Hackathon</h3>" +
        "<ul class='list-disc pl-4 space-y-1 text-xs md:text-sm text-slate-600 dark:text-slate-400'>" +
        "<li>Invited and sponsored to travel to UPenn as a <strong>freshman</strong></li>" +
        "<li>Developed an <strong>NFT-based platform</strong> for simplifying scholarship eligibility certification</li>" +
        "<li><strong>Won the award</strong> for our track</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>",
    },
    {
      company: "Lead The Future Mentorship",
      logo: "/images/ltf.jpeg",
      role: "Mentee",
      type: "Mentee",
      period: "Sept 2024 - Present",
      location: "Milan, Italy",
      description:
        "Among the few Italian students selected to be mentees for LeadTheFuture, a leading mentorship non-profit organization for students in STEM, with acceptance rate **below 15%**. LeadTheFuture empowers top-performing students to achieve their goals and contribute to their communities by giving them one-on-one guidance from high-impact mentors coming from the world's leading STEM innovation hubs such as Silicon Valley and CERN.",
    },
    {
      company: "Idemos",
      logo: "/images/idemos.jpeg",
      role: "Co-Founder & Developer",
      type: "Co-Founder & Developer",
      period: "Sept 2021 - June 2022",
      location: "Remote",
      description:
        "Led the development and launch of Idemos, where we built a scalable personalization platform for web 3.0 companies. Successfully collaborated with **20+ international clients** and achieved revenue in excess of **five figures per month** at **17 y/o**",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold">Work & Experiences</h2>
      <div className="space-y-2">
        {jobs.map((job, i) => (
          <details
            key={i}
            className="group bg-gray-50/50 dark:bg-gray-900/50 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            <summary className="flex items-center gap-3 p-2 md:p-3 cursor-pointer list-none">
              <div className="w-6 h-6 md:w-7 md:h-7 relative flex-shrink-0">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="min-w-0 max-w-[70%] sm:max-w-none">
                  <h3 className="text-sm md:text-base font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors truncate">
                    {job.company}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                    {job.type}
                  </p>
                </div>
                <div className="text-left sm:text-right whitespace-nowrap">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {job.period}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {job.location}
                  </p>
                </div>
              </div>
            </summary>
            <div className="px-2 md:px-3 pb-2 md:pb-3 text-xs md:text-sm text-gray-600 dark:text-gray-400">
              <div
                className="prose-sm max-w-none prose-p:text-xs prose-p:md:text-sm prose-li:text-xs prose-li:md:text-sm prose-strong:font-medium"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(job.description || ""),
                }}
              />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
