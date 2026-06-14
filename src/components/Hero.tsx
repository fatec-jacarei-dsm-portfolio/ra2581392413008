import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-8 max-w-3xl"
      >
        {/* Profile Image */}
        <div className="relative mb-4 group">
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <img 
            src="https://github.com/brn-lc.png" 
            alt="Foto de Perfil" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 ring-4 ring-indigo-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-slate-900">
            Olá, eu sou o <span className="text-indigo-600">Breno</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium">
            Estudante de Desenvolvimento de Software Multiplataforma
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor em formação com vivência em suporte e gestão de configuração de sistemas (PLM). Motivado por criar soluções tecnológicas que facilitem o dia a dia.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a 
            href="https://linkedin.com/in/brenoluca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:-translate-y-1"
            id="cta-linkedin"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/brn-lc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-1"
            id="cta-github"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-1"
            id="cta-projects"
          >
            Ver Projetos
          </button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
