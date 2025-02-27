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
          className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-32 pl-12"
        >
          <HeroSection />
        </div>
        <div
          id="AboutSection"
          className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-52 pl-12"
        >
          <AboutSection />
        </div>
        <div
          id="ProjectSection"
          className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-52 pl-12"
        >
          <ProjectSection />
        </div>
        <div
          id="SkillSection"
          className="w-[1400px] h-[700px] flex flex-row items-center justify-center -mt-5 pl-12"
        >
          <SkillSection />
        </div>
        <div
          id="ContactSection"
          className="w-[1400px] h-[700px] flex flex-row items-center justify-center -mt-28 pl-12"
        >
          <ContactSection />
        </div>
      </div>

      {/* Footer outside wrapper to be full width */}
      <Footer />
    </>
  );
}
