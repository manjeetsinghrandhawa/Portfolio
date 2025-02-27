import Image from "next/image";
import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Dev Overflow",
    description: "Developer community for coding Q&A and collaboration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/assets/devoverflowimage.jpg",
    link: "https://github.com/manjeetsinghrandhawa/devflow",
  },
  {
    title: "Edu Spark",
    description:
      "An interactive e-learning platform that leverages AI to enhance personalized education and engagement. 🚀",
    tech: ["Reactjs", "Tailwind CSS", "ExpressJs", "MongoDB"],
    image: "/assets/edusparkLogo.png",
    link: "https://github.com/manjeetsinghrandhawa/eduspark-host",
  },
  {
    title: "Ecomzy",
    description:
      "🛍️ Ecomzy is a modern e-commerce website built with React, featuring a sleek and responsive UI, but currently designed as a frontend-only application.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    image: "/assets/Screenshot (123).png",
    link: "#",
  },
];

const ProjectSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      style={{
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.2), transparent 150px)`,
        boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.6)", // Light blue glow
      }}
      className="flex flex-row justify-between items-center h-[700px] bg-black perspective-1000 w-full  rounded-2xl shadow-lg border-2 border-blue-400  transition-transform duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-serif text-blue-400 text-center pb-8">
          Projects
        </h2>

        {/* Projects Grid */}
        <div
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.2), transparent 150px)`,
            boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.6)", // Light blue glow
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between h-[550px] bg-gray-900 border-2 border-blue-400 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.6)", // Glowing effect
              }}
            >
              {/* Project Image */}
              <div className="w-full h-[250px] flex justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg border-2 border-blue-400"
                />
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-serif text-blue-300 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-400 text-center mt-2">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600 px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <a
                href={project.link}
                className="mt-4 px-6 py-2 flex gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
              >
                View Project{"  "}
                <img
                  src="/assets/portfolio.png"
                  alt="github image"
                  height={10}
                  width={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
