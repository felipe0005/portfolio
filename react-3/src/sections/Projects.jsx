import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Configuración de Supabase
const supabase = createClient(
  "https://ypngmgqblcpuqchrjftc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbmdtZ3FibGNwdXFjaHJqZnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjQ3NDksImV4cCI6MjA3MjI0MDc0OX0.vAwEicvnHW4ZL8nrm90GuB50Qp3i0JEfQeC90btWLlk"
);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [setHoveredProject] = useState(null);

  // Hook para cargar proyectos desde Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Datos por defecto si hay error
        setProjects([
          {
            id: 1,
            titulo: "Calculadora",
            descripcion:
              "Aplicación web para realizar operaciones matemáticas básicas.",
            link: "https://github.com/felipe0005/PDelSC/tree/main/JavaScript/JS6",
            img: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Calculadora",
            tecnologias: ["JavaScript", "HTML", "CSS"],
          },
          {
            id: 2,
            titulo: "Ahorcado",
            descripcion:
              "Juego interactivo con conexión a base de datos MySQL.",
            link: "https://github.com/felipe0005/PDelSC/tree/main/Proyectos/ahorcado",
            img: "https://placehold.co/600x400/EC4899/FFFFFF?text=Ahorcado",
            tecnologias: ["JavaScript", "MySQL", "PHP"],
          },
          {
            id: 3,
            titulo: "Portfolio",
            descripcion:
              "Mi portfolio personal desarrollado con React y Tailwind.",
            link: "https://github.com/felipe0005/PDelSC/tree/main/React/react-3",
            img: "https://placehold.co/600x400/06B6D4/FFFFFF?text=Portfolio",
            tecnologias: ["React", "Tailwind", "GSAP"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="relative h-screen w-full flex justify-center items-center"
      >
        <div className="absolute inset-0 stars -z-10"></div>
        <p className="text-white text-xl">Cargando proyectos...</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 py-12"
    >
      <div className="absolute inset-0 stars -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 w-80 relative group"
            onMouseEnter={() => handleProjectHover(proyecto.id)}
            onMouseLeave={handleProjectLeave}
          >
            <div className="relative overflow-hidden">
              <img
                src={proyecto.img}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  Ver Detalles
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>

              {proyecto.tecnologias && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2 transition-colors"
              >
                Ver proyecto
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
