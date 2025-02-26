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
        boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.6)", // Light blue glow
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl shadow-lg border-2 border-orange-500 transition-transform duration-300"
    >
      <h1 className="text-6xl p-10 text-orange-500">About Me</h1>
      <div className="text-4xl">
        <p className="text-white mb-2 p-5 justify-start">
          👋 Hi, I&apos;m Manjeet, a passionate Software Developer who loves
          turning ideas into reality through code. With expertise in Next.js,
          React, JavaScript, and backend technologies, I specialize in building
          dynamic and responsive web applications
        </p>
        <p className="text-white mb-2 p-5 justify-start">
          🚀 I thrive on problem-solving and enjoy crafting elegant, scalable
          solutions. My goal is to create seamless digital experiences that make
          an impact.
        </p>
        <p className="text-white mb-2 p-5 justify-start pb-10">
          💡 When I&apos;m not coding, I explore the latest tech trends,
          contribute to open-source projects, and work on innovative side
          projects.
        </p>
        <p className="text-white mb-2 p-5 justify-start pb-10">
          🎨 I also have a keen eye for design and enjoy creating visually
          appealing and user-friendly interfaces, ensuring that functionality
          meets aesthetics seamlessly.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
