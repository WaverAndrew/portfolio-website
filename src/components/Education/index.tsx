import React from "react";
import Image from "next/image";

// Define the education type
interface Education {
  school: string;
  logo?: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  activities?: string[];
  achievements?: string[];
}

export const Education: React.FC = () => {
  const educations: Education[] = [
    {
      school: "Bocconi University",
      logo: "/images/bocconi.png",
      degree: "Bachelor's in Economics and Management",
      period: "2023 - Present",
      location: "Milan, Italy",
      description: "Current GPA: 30/30 (as of 03/25)",
      activities: [
        "Bocconi Students for Machine Learning",
        "Hephaestus Applied Ai Bocconi",
        "theHacklab Bocconi",
        "Bocconi Entrepreneurship Club",
        "Blockchain Association",
      ],
    },
    {
      school: "I.I.S Don Milani Montichiari",
      degree: "Scientific Path",
      period: "2018 - 2023",
      location: "Montichiari, Italy",
      description: "Valedictorian with 100 cum laude / 100",
      achievements: [
        "Italian Olympiad (three times national semi-finals)",
        "Physics Olympiad (national semi-finals)",
        "Math Olympiad (8th in Italy in 2020)",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="space-y-2">
        {educations.map((edu, i) => (
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
                  <p className="font-medium mb-1">Clubs:</p>
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
  );
};

export default Education;
