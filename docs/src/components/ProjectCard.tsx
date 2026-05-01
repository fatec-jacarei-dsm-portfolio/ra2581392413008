import { Github } from "lucide-react";
import { Project } from "../types";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col group h-full"
      id={`project-${project.id}`}
    >
      <div className="p-6 md:p-8 flex-grow flex flex-col bg-gradient-to-br from-white to-slate-50/30">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-semibold uppercase tracking-wider rounded-md border border-slate-200/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-center">
        {project.repoUrl && (
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        )}
      </div>
    </motion.div>
  );
}
