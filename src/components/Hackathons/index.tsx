import React from "react";
import Image from "next/image";
import { marked } from "marked";
import { Badge } from "../ui/badge";

interface Hackathon {
  event: string;
  organization?: string;
  logo?: string;
  role?: string;
  period: string;
  location?: string;
  highlights?: string[];
  award?: string;
  description?: string;
  tag?: string;
}

export const Hackathons: React.FC = () => {
  const hackathons: Hackathon[] = [
    {
      event: "AI in Blockchain Hackathon",
      organization: "University of Pennsylvania",
      logo: "/images/upenn.jpeg",
      role: "Multiple Awards",
      period: "Feb 2024 – Feb 2025",
      location: "Philadelphia, PA, US",
      award: "Winner (multiple tracks)",
      tag: "2x Winner ",
      description:
        "<div class='relative before:absolute before:top-1.5 before:bottom-0 before:left-[0.1875rem] before:w-0.5 before:-translate-x-1/2 before:bg-slate-300 dark:before:bg-slate-700'>" +
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
      event: "Lovable Milan Hackathon",
      organization: "Lovable",
      logo: "/images/lovable.jpeg",
      // Add a logo at /public/images/lovable.png when available
      period: "2025",
      location: "Milan, Italy",
      award: "Winner",
      tag: "Winner",
    },
    {
      event: "European Defence Tech Hackathon",
      organization: "European Defence Tech Hackathon Series",
      logo: "/images/edth.jpeg",
      period: "2025",
      location: "Milan, Italy",
      highlights: [
        "Won the first Milan Edition, developing a vision-based drone detection system capable of triangulating a drone’s position, reconstructing its trajectory, and predicting its future path based on approach speed and angle to enable preemptive neutralisation.",
      ],
      award: "Winner — First Milan Edition",
      tag: "Winner",
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Hackathons</h2>
      <div className="space-y-2">
        {hackathons.map((h, i) => (
          <details
            key={i}
            className="group bg-gray-50/50 dark:bg-gray-900/50 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          >
            <summary className="flex items-center gap-4 p-3 cursor-pointer list-none">
              <div className="w-7 h-7 relative flex-shrink-0">
                {h.logo && (
                  <Image
                    src={h.logo}
                    alt={`${h.organization || h.event} logo`}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h3 className="font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {h.event}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {h.organization || ""}
                    {h.organization && h.role ? " · " : ""}
                    {h.role || ""}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {h.period}
                  </p>
                  {h.location && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {h.location}
                    </p>
                  )}
                  {h.tag && (
                    <div className="mt-1">
                      <Badge
                        variant="secondary"
                        className={`text-xs px-2 py-0.5 ${
                          h.tag.toLowerCase().includes("winner")
                            ? "bg-emerald-200 text-emerald-800 border-emerald-300 dark:bg-emerald-700 dark:text-emerald-100 dark:border-emerald-600"
                            : "bg-blue-200 text-blue-800 border-blue-300 dark:bg-blue-700 dark:text-blue-100 dark:border-blue-600"
                        }`}
                      >
                        {h.tag}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </summary>
            <div className="px-3 pb-3 text-sm text-gray-600 dark:text-gray-400">
              {h.award && <p className="mb-2 font-medium">{h.award}</p>}
              {h.description && (
                <div
                  className="prose-sm max-w-none prose-p:text-xs prose-p:md:text-sm prose-li:text-xs prose-li:md:text-sm prose-strong:font-medium"
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(h.description),
                  }}
                />
              )}
              {h.highlights && (
                <ul className="list-disc list-inside space-y-1">
                  {h.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
