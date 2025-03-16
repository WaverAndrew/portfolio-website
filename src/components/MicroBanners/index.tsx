import React from "react";

export const MicroBanners: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
        <span className="text-xs font-medium text-purple-800 dark:text-purple-300">
          Currently @ UBooks
        </span>
      </div>

      <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
        <svg
          className="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="text-xs font-medium text-blue-800 dark:text-blue-300">
          Amazon Intern '25
        </span>
      </div>

      <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800">
        <svg
          className="w-3 h-3 text-amber-600 dark:text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <span className="text-xs font-medium text-amber-800 dark:text-amber-300">
          Exploring AI Products
        </span>
      </div>
    </div>
  );
};

export default MicroBanners;
