"use client";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <div className="relative w-[1400px]   flex flex-col items-center justify-center bg-black pl-48 ">
      <div className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-32 pl-12  ">
        <HeroSection />
      </div>
      <div className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-52 pl-12   ">
        <AboutSection />
      </div>
      <div className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-52  pl-12   ">
        <ProjectSection />
      </div>
      <div className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-5 pl-12   ">
        <SkillSection />
      </div>
      <div className="w-[1400px] h-[700px] flex flex-row items-center justify-center mt-5 pl-12   ">
        <ContactSection />
      </div>
    </div>
  );
}
