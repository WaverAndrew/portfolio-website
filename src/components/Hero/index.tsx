import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import SocialLinks from "@/components/SocialLinks";
import MicroBanners from "@/components/MicroBanners";

export const Hero: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <TypewriterEffect
          words={[
            { text: "Hey," },
            { text: "I'm" },
            { text: "Andrea", className: "text-purple-800" },
            { text: ":)" },
          ]}
          className="text-3xl font-bold sm:text-3xl text-left"
          cursorClassName="bg-gray-900 ml-0"
        />
      </div>

      <MicroBanners />

      <div className="space-y-4 max-w-2xl">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-purple-500 pl-4 py-1">
          I'm a <span className="font-medium">20-year-old student</span> based
          in Milan, Italy,{" "}
          <span className="font-bold">deeply in love with startups, tech</span>,
          and the excitement of turning ideas into reality.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          <span className="font-bold">
            I first discovered coding when I was 11
          </span>
          , and since then, I've been hooked: not just by programming itself,
          but by the{" "}
          <span className="italic font-bold">
            thrill of creating something from scratch
          </span>{" "}
          and watching it come to life.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Outside of tech, you'll find me playing{" "}
          <span className="font-medium">tennis</span>, chasing fresh powder on
          my <span className="font-medium">snowboard</span>, or diving into a
          good <span className="font-medium">book</span>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
