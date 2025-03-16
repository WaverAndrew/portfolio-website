import React from "react";

// Define the award type
interface Award {
  icon: string;
  title: string;
  event: string;
  tagline: string;
}

export const Awards: React.FC = () => {
  const awards: Award[] = [
    {
      icon: "🎯",
      title: "8th Place",
      event: "National Math Olympiad 2020",
      tagline:
        "Got 8th place in Italy in finals of Kangourou Math competition.",
    },
    {
      icon: "💼",
      title: "First revenue at 17 y/o",
      event: "Idemos",
      tagline:
        "Achieved over 30.000$/month in revenue from 20+ international clients at 17 y/o",
    },
    {
      icon: "🏅",
      title: "Startup Competition Winner",
      event: "Banca Intesa Startup Contest",
      tagline: "Won startup contest from Italy's biggest bank at 18 y/o",
    },
    {
      icon: "🏆",
      title: "Valedictorian",
      event: "High School Graduation",
      tagline:
        "Graduated with maximum cum laude (100/100), best graduating student (out of 500+) of my high school",
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Awards & Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, i) => (
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
  );
};

export default Awards;
