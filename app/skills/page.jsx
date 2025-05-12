'use client';
import React from 'react';

const skills = [
  {
    name: "HTML 5",
    image: "/icons/html.svg",
    rating: 5,
    description: "Semantic structure, accessibility, SEO-friendly markup."
  },
  {
    name: "CSS 3",
    image: "/icons/css.svg",
    rating: 4,
    description: "Layouting, animations, responsive design with media queries."
  },
  {
    name: "JavaScript",
    image: "/icons/js.svg",
    rating: 4,
    description: "DOM manipulation, ES6+, asynchronous programming."
  },
  {
    name: "Tailwind CSS",
    image: "/icons/tailwind.svg",
    rating: 5,
    description: "Utility-first styling, responsive design, dark mode."
  },
  {
    name: "Bootstrap",
    image: "/icons/bootstrap.svg",
    rating: 3,
    description: "Component-based styling, grid system, responsive utilities."
  },
  {
    name: "React.js",
    image: "/icons/react.svg",
    rating: 4,
    description: "Component lifecycle, hooks, state management, SPA."
  },
  {
    name: "Next.js",
    image: "/images/nextjs.png",
    rating: 3,
    description: "Server-side rendering, App Router, API routes, SEO support."
  },
  {
    name: "Node.js",
    image: "/images/nodejs.png",
    rating: 4,
    description: "Backend development, REST APIs, server-side logic."
  },
  {
    name: "Git & GitHub",
    image: "/images/Git.png",
    rating: 4,
    description: "Version control, collaboration, branching, pull requests."
  },
  {
    name: "MySQL",
    image: "/icons/mysql.svg",
    rating: 4,
    description: "Database design, CRUD operations, query optimization."
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-14 bg-gradient-to-b from-blue-950 to-blue-800">
      <h1 className="text-4xl font-bold text-center text-blue-300 font-poppins">Skills</h1>
      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 transition-transform duration-200 rounded-lg shadow-md md:flex-row bg-white/20 backdrop-blur hover:scale-105"
          >
            <img src={skill.image} alt={skill.name} className="w-24 h-24 mb-4 md:w-28 md:h-28 md:mb-0 md:mr-6" />
            <div className="text-center text-white md:text-left">
              <h2 className="text-xl font-semibold font-poppins">{skill.name}</h2>
              <p className="mt-1 text-lg text-yellow-400">
                {'★'.repeat(skill.rating)}{'☆'.repeat(5 - skill.rating)}
              </p>
              <p className="mt-1 text-sm text-white/80">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
