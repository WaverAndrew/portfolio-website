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
    </div>
  );
};

export default MicroBanners;
