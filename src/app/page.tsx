"use client";

import React from "react";
import Hero from "@/components/Hero";
import PhotoCollage from "@/components/PhotoCollage";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <article className="space-y-10">
      {/* Hero Section */}
      <section aria-label="Introduction">
        <Hero />
      </section>

      {/* Photo Collage Grid */}
      <section aria-label="Photo Gallery">
        <PhotoCollage />
      </section>

      {/* Work Experience */}
      <section aria-label="Work Experience">
        <WorkExperience />
      </section>

      {/* Research */}
      <section aria-label="Research">
        <Research />
      </section>

      {/* Education */}
      <section aria-label="Education">
        <Education />
      </section>

      {/* Awards */}
      <section aria-label="Awards and Recognition">
        <Awards />
      </section>

      {/* Projects */}
      <section aria-label="Projects">
        <Projects />
      </section>

      {/* Quote */}
      <section aria-label="Inspirational Quote">
        <Quote
          text="The people who are crazy enough to think they can change the world are the ones who do."
          author="Steve Jobs"
          role=""
        />
      </section>

      {/* Footer */}
      <Footer />
    </article>
  );
}
