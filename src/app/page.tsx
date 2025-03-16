"use client";

import React from "react";
import Hero from "@/components/Hero";
import PhotoCollage from "@/components/PhotoCollage";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <Hero />

      {/* Photo Collage Grid */}
      <PhotoCollage />

      {/* Work Experience */}
      <WorkExperience />

      {/* Education */}
      <Education />

      {/* Awards */}
      <Awards />

      {/* Projects */}
      <Projects />

      {/* Quote */}
      <Quote
        text="The best way to predict the future is to invent it."
        author="Alan Kay"
        role="Computer Scientist"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
