import React from "react";

interface ResearchPaper {
  title: string;
  publication: string;
  year: number;
  abstract: string;
  supervisors?: string[]; // Changed from authors to supervisors, and made optional
  link?: string; // Optional link to the paper
}

const researchData: ResearchPaper[] = [
  {
    title:
      "Grounded vs. Latent-Only World Models for RL in ARC-AGI: A Comparative Study of State Prediction and JEPA",
    publication: "Bocconi AI Lab",
    year: 2025, // Assuming current or upcoming year
    supervisors: ["Prof. Zecchina", "Prof. Saglietti", "Prof. Biggio"], // Changed from authors
    abstract:
      "Working with an amazing team as part of AI Lab in Bocconi; focusing on exploring world models architectures and capabilities", // Updated abstract
    link: "#", // Placeholder link, update when available
  },
];

const Research = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Research</h2>
      <div className="space-y-2">
        {researchData.map((paper, i) => (
          <details
            key={i}
            className="group bg-gray-50/50 dark:bg-gray-900/50 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            <summary className="flex items-center justify-between gap-4 p-3 cursor-pointer list-none">
              <div className="flex-1">
                <h3 className="font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {paper.publication} - {paper.year}
                </p>
              </div>
              {/* You can add an icon or image here if desired, similar to Education/WorkExperience logos */}
            </summary>
            <div className="px-3 pb-3 text-sm text-gray-600 dark:text-gray-400">
              {paper.supervisors && ( // Check if supervisors exist
                <p className="font-medium mb-1">
                  Supervisors: {paper.supervisors.join(", ")}
                </p>
              )}
              <p className="mb-2 leading-relaxed">{paper.abstract}</p>
              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Read Paper
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
      {researchData.length === 0 && (
        <p className="text-lg text-gray-700 text-center">
          Details about research will be added here.
        </p>
      )}
    </section>
  );
};

export default Research;
