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
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
      role: "Incoming - Project Manager Intern",
      type: "Incoming - Project Manager Intern",
      period: "Jun 2025 - Sept 2025",
      location: "Luxembourg, Luxembourg",
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
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQE5QJ9kzLEvmQ/company-logo_400_400/company-logo_400_400/0/1737487185134?e=1749686400&v=beta&t=RS68EJvbg3y3IIsvgBUrZV6aAZ85aoVGBd1eYw_grVs",
      role: "Founder",
      type: "Founder",
      period: "Oct 2024 - Present",
      location: "Milan, Italy",
      description:
        "Founded the first peer-to-peer marketplace for university textbooks in Italy. Currently at **2.8k+ users**, **30k visits** and **1.5k books traded** in the first two weeks.",
    },
    {
      company: "Leger Labs",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHZpywtsLraYw/company-logo_200_200/company-logo_200_200/0/1719257305365?e=1749686400&v=beta&t=SEQq3JX8r6vrJ3TjULcdZPMJ1YF-S5_42ZVYl9_q0P4",
      type: "Software Engineer - Applied AI",
      period: "March 2025 - Present",
      location: "Remote",
      description:
        "Leger Labs is a NYC based **VC-backed startup** creating agentic AI solutions for the insurance industry. I'm developing an **AI-powered sales calls analysis tool** to optimize the sales process and collect data from the prospect automatically.",
    },
    {
      company: "University of Pennsylvania",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHnbnsnJlBiZg/company-logo_400_400/company-logo_400_400/0/1630601168515/university_of_pennsylvania_logo?e=1749686400&v=beta&t=LrjjKAxPCm-dxtz-PQ2LrVncSZ8tNsg1n7c6sSob_4M",
      role: "Blockchain Hackathon | Multiple Award Winner",
      type: "Blockchain Hackathon | Multiple Award Winner",
      period: "Feb 2024 - Feb 2025",
      location: "Philadelphia, PA, US",
      description:
        "<h3 class='font-bold text-sm md:text-base mt-2 mb-1'>2025 Hackathon</h3>" +
        "<ul class='list-disc pl-4 mb-3 text-xs md:text-sm'>" +
        "<li>Invited and sponsored for the <strong>second consecutive year</strong></li>" +
        "<li>Coded <strong>22 hours straight</strong> with minimal breaks</li>" +
        "<li>Developed <strong>4 working projects</strong> with my team</li>" +
        "<li><strong>Won our track</strong> and placed <strong>2nd in another category</strong></li>" +
        "<li>Created a <strong>natural language interface</strong> for complex blockchain operations</li>" +
        "</ul>" +
        "<h3 class='font-bold text-sm md:text-base mt-3 mb-1'>2024 Hackathon</h3>" +
        "<ul class='list-disc pl-4 text-xs md:text-sm'>" +
        "<li>Invited and sponsored to travel to UPenn as a <strong>freshman</strong></li>" +
        "<li>Developed an <strong>NFT-based platform</strong> for simplifying scholarship eligibility certification</li>" +
        "<li><strong>Won the award</strong> for our track</li>" +
        "</ul>",
    },
    {
      company: "Lead The Future Mentorship",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH-xHKaD_VO5g/company-logo_400_400/company-logo_400_400/0/1673133565781?e=1749686400&v=beta&t=mO3ReB42rDcrtet7y9JU9T5aW1wUC67gT_KXwB38NTQ",
      role: "Mentee",
      type: "Mentee",
      period: "Sept 2024 - Present",
      location: "Milan, Italy",
      description:
        "Among the few Italian students selected to be mentees for LeadTheFuture, a leading mentorship non-profit organization for students in STEM, with acceptance rate **below 15%**. LeadTheFuture empowers top-performing students to achieve their goals and contribute to their communities by giving them one-on-one guidance from high-impact mentors coming from the world's leading STEM innovation hubs such as Silicon Valley and CERN.",
    },
    {
      company: "Idemos",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHl1hu-bNuqpg/company-logo_400_400/company-logo_400_400/0/1692711668598?e=1749686400&v=beta&t=mm5ZnDZPPltUGcvk7Q3i9qVlnsuM6-8tyvVKFoNkDOU",
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
