import React, { useState } from "react";
import { Badge } from "../ui/badge";

interface Award {
  title: string;
  organization: string;
  year: string;
  category: string;
  tagline: string;
}

const awardsData: Award[] = [
  {
    title: "8th Place, National Math Olympiad Final",
    organization: "Kangourou Italia",
    year: "2020",
    category: "competition",
    tagline:
      "Secured 8th place in the Italian finals of Kangourou Math competition.",
  },
  {
    title: "5 Figures Revenue at 17y/o",
    organization: "Idemos",
    year: "2021",
    category: "professional",
    tagline:
      "Topped $30,000/month in revenue from 20+ international clients at the age of 17.",
  },
  {
    title: "Hackathons & Contests Winner",
    organization: "Banca Intesa & UPenn Hackathons",
    year: "2023-2025",
    category: "competition",
    tagline:
      "Winner of Banca Intesa's startup contest (Italy's largest bank) and achieved two consecutive victories at UPenn's Blockchain & AI hackathons (2024 & 2025).",
  },
  {
    title: "High School Valedictorian",
    organization: "IIS Don Milani", // You might want to specify the actual high school name
    year: "2023",
    category: "academic",
    tagline:
      "Graduated Valedictorian with maximum cum laude (100/100 with honors), ranking as the top student among over 500 graduates.",
  },
];

const getCategoryStyle = (category: string) => {
  const styles: { [key: string]: string } = {
    professional:
      "bg-sky-200 text-sky-800 border-sky-300 dark:bg-sky-700 dark:text-sky-100 dark:border-sky-600",
    design:
      "bg-pink-200 text-pink-800 border-pink-300 dark:bg-pink-700 dark:text-pink-100 dark:border-pink-600",
    community:
      "bg-green-200 text-green-800 border-green-300 dark:bg-green-700 dark:text-green-100 dark:border-green-600",
    academic:
      "bg-green-200 text-green-800 border-green-300 dark:bg-green-700 dark:text-green-100 dark:border-green-600",
    competition:
      "bg-purple-200 text-purple-800 border-purple-300 dark:bg-purple-700 dark:text-purple-100 dark:border-purple-600",
  };
  return (
    styles[category] ||
    "bg-gray-200 text-gray-700 border-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500"
  );
};

const getCategoryLabel = (category: string) => {
  const labels: { [key: string]: string } = {
    professional: "Professional",
    design: "Design",
    community: "Community",
    academic: "Academic",
    competition: "Competition",
  };
  return labels[category] || "Other";
};

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.06l-3.71 3.71a.75.75 0 11-1.06-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-.02 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export const Awards: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>(
    {}
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my key achievements and milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge
                  variant="secondary"
                  className={`${getCategoryStyle(
                    award.category
                  )} text-xs font-medium px-2.5 py-1`}
                >
                  {getCategoryLabel(award.category)}
                </Badge>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-md">
                  {award.year}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 leading-tight min-h-12">
                {award.title}
              </h3>

              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {award.organization}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAccordion(index);
                  }}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={openAccordions[index] ? "Collapse" : "Expand"}
                >
                  {openAccordions[index] ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div
                style={{
                  maxHeight: openAccordions[index] ? "500px" : "0px",
                  transition:
                    "max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  overflow: "hidden",
                  paddingTop: openAccordions[index] ? "0.25rem" : "0rem",
                  opacity: openAccordions[index] ? 1 : 0,
                }}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {award.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
