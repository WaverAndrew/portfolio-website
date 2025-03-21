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
      icon: "🏆",
      title: "Multiple Competition Wins",
      event: "International Competitions",
      tagline:
        "Won Banca Intesa's startup contest (Italy's largest bank), secured back-to-back victories at UPenn's blockchain & AI hackathons",
    },
    {
      icon: "🏅",
      title: "Valedictorian",
      event: "High School Graduation",
      tagline:
        "Graduated with maximum cum laude (100/100), best graduating student (out of 500+) of my high school",
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Awards & Recognition</h2>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {awards.map((award, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-4 bg-gray-100/80 dark:bg-gray-800/40 rounded-lg transition-all hover:bg-gray-200/80 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700/50"
          >
            <div className="text-4xl mb-2">{award.icon}</div>
            <div>
              <h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-white">
                {award.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                {award.event}
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
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
