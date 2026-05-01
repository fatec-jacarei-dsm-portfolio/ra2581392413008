import { useState } from "react";
import { PROJECTS } from "../constants";
import { Semester } from "../types";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "motion/react";

const semesters: { label: string; value: Semester }[] = [
  { label: "1º Semestre", value: 1 },
  { label: "2º Semestre", value: 2 },
  { label: "3º Semestre", value: 3 },
  { label: "4º Semestre", value: 4 },
];

export default function ProjectGallery() {
  const [activeSemester, setActiveSemester] = useState<Semester>(4);

  const filteredProjects = PROJECTS.filter(p => p.semester === activeSemester);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900">
            Jornada Acadêmica
          </h2>
          <p className="text-slate-500 text-center max-w-xl">
            Explore a evolução técnica através dos projetos desenvolvidos em cada etapa da minha graduação.
          </p>
        </div>

        {/* Tab Menu */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-slate-100 rounded-2xl w-fit mx-auto shadow-inner">
          {semesters.map((s) => (
            <button
              key={s.value}
              onClick={() => setActiveSemester(s.value)}
              className={`
                relative px-6 py-3 rounded-xl font-bold text-sm transition-all
                ${activeSemester === s.value ? 'text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}
              `}
              id={`tab-semester-${s.value}`}
            >
              {activeSemester === s.value && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm -z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Flex layout for centered items */}
        <div className="flex flex-wrap justify-center gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex shrink-0"
                >
                  <ProjectCard project={project} />
                </div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full flex flex-col items-center justify-center py-20 text-slate-400"
              >
                <p className="text-lg font-medium">Nenhum projeto cadastrado para este período.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
