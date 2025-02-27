import React, { useState, useEffect } from "react";

const AboutSection = () => {
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
        boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.6)", // Orange glow
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl lg:w-[1400px] md:w-[700px]  sm:w-[400px] shadow-lg border-2  border-orange-500 transition-transform duration-300 p-6  max-w-[1400px] mx-auto sm:mt-20"
    >
      <h1 className="text-4xl md:text-6xl text-orange-500 text-center md:text-left font-bold mb-6">
        About Me
      </h1>

      <div className="text-lg md:text-2xl leading-relaxed text-justify space-y-6">
        <p className="text-white">
          👋 Hi, I&apos;m <span className="text-orange-400">Manjeet</span>, a
          passionate <span className="text-blue-400">Software Developer</span>{" "}
          who loves turning ideas into reality through code. With expertise in{" "}
          <span className="text-blue-400">Next.js, React, JavaScript</span>, and
          backend technologies, I specialize in building dynamic and responsive
          web applications.
        </p>
        <p className="text-white">
          🚀 I thrive on problem-solving and enjoy crafting elegant, scalable
          solutions. My goal is to create seamless digital experiences that make
          an impact.
        </p>
        <p className="text-white">
          💡 When I&apos;m not coding, I explore the latest tech trends,
          contribute to open-source projects, and work on innovative side
          projects.
        </p>
        <p className="text-white">
          🎨 I also have a keen eye for design and enjoy creating visually
          appealing and user-friendly interfaces, ensuring that functionality
          meets aesthetics seamlessly.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
