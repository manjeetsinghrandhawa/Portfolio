"use client";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center bg-black ">
        {/* Sections */}
        <div
          id="HeroSection"
          className=" flex flex-row items-center justify-center mt-32 "
        >
          <HeroSection />
        </div>
        <div
          id="AboutSection"
          className=" flex flex-row items-center justify-center  "
        >
          <AboutSection />
        </div>
        <div
          id="ProjectSection"
          className=" flex flex-row items-center justify-center"
        >
          <ProjectSection />
        </div>
        <div
          id="SkillSection"
          className=" flex flex-row items-center justify-center"
        >
          <SkillSection />
        </div>
        <div
          id="ContactSection"
          className=" flex flex-row items-center justify-center"
        >
          <ContactSection />
        </div>
      </div>

      {/* Footer outside wrapper to be full width */}
      <Footer />
    </>
  );
}
