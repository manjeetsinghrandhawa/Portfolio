import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 35; // Adjust rotation intensity
    const y = -(e.clientY - top - height / 2) / 35;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.2), transparent 150px)`,
        transform: `rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`,
        boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.6)", // Light blue glow
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col w-screen sm:w-[400px] md:flex-row md:w-[700px] justify-between items-center h-auto md:h-[700px] bg-black lg:w-[1400px] rounded-2xl shadow-lg border-2 border-blue-400 transition-transform duration-300 p-6 md:p-12"
    >
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-serif text-blue-400 pb-3">
          Hi,
        </h1>
        <h2 className="text-5xl md:text-6xl font-serif text-blue-400 pb-3">
          I am <span className="italic font-serif text-orange-500">M</span>
          anjeet,
        </h2>
        <h2 className="font-serif text-orange-400 text-4xl md:text-6xl">
          Software Developer
        </h2>
        {/* Resume Download Button */}
        <a
          href="/Manjeet-CV.pdf"
          download="Manjeet-CV.pdf"
          className="mt-6 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src="/assets/manjeetphotoedited.jpg"
          alt="Manjeet Singh"
          width={180}
          height={180}
          className="rounded-full border-2 border-blue-400"
        />
      </div>
    </div>
  );
};

export default HeroSection;
