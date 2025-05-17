import React from "react";

interface QuoteProps {
  text: string;
  author: string;
  role: string;
}

export const Quote: React.FC<QuoteProps> = ({ text, author, role }) => {
  return (
    <section className="space-y-6">
      <div className="relative p-8 rounded-lg max-w-3xl mx-auto">
        <svg
          className="absolute text-gray-300 dark:text-gray-700 h-16 w-16 -top-4 -left-4 transform -rotate-12"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <blockquote className="relative text-center">
          <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
            {text}
          </p>
          <footer className="mt-4">
            <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
              {author}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
