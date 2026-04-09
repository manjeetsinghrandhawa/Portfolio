"use client";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-x-hidden pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
