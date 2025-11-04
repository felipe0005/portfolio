"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePortfolioData } from "../hooks/usePortfolioData";

export default function Skills() {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);
  const { skills, loading } = usePortfolioData();
  const [selectedSkill, setSelectedSkill] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        skillsRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [skills]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  if (loading) {
    return (
      <section
        id="skills"
        className="relative h-screen w-full flex justify-center items-center"
      >
        <div className="absolute inset-0 stars -z-10"></div>
        <p className="text-white text-xl">Cargando habilidades...</p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 py-12"
    >
      <div className="absolute inset-0 stars -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            ref={(el) => (skillsRef.current[index] = el)}
            className="flex flex-col items-center p-4 bg-slate-800 rounded-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group"
            onClick={() => handleSkillClick(skill)}
          >
            <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">
              {skill.icon}
            </div>
            <p className="text-white text-sm font-medium text-center">
              {skill.name}
            </p>
            {skill.level && (
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-rose-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal de skill seleccionado */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedSkill.name}
            </h3>
            {selectedSkill.description && (
              <p className="text-gray-300 mb-4">{selectedSkill.description}</p>
            )}
            {selectedSkill.level && (
              <div className="mb-4">
                <p className="text-gray-300 mb-2">
                  Nivel: {selectedSkill.level}%
                </p>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-purple-500 h-3 rounded-full"
                    style={{ width: `${selectedSkill.level}%` }}
                  ></div>
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedSkill(null)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
