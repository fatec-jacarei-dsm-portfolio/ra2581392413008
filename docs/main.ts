interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  semester: number;
}

const PROJECTS: Project[] = [
  {
    id: "iot-med-dispenser",
    title: "Dispensador de Remédios Automático",
    description:
      "Solução IoT ponta a ponta composta por um dispositivo físico embarcado e dashboard web para gestão automatizada de medicamentos, visando a segurança e o monitoramento remoto para idosos.",
    technologies: ["C++", "ESP32", "Node.js", "MQTT"],
    repoUrl: "https://github.com/octacodeteam/ABP4",
    semester: 4,
  },
  {
    id: "app-scholar",
    title: "App Scholar",
    description:
      "Aplicação mobile voltada para a experiência acadêmica, centralizando o gerenciamento de cronogramas, notas e comunicações institucionais de forma intuitiva.",
    technologies: ["Typescript", "React Native", "PostgreSQL"],
    repoUrl: "https://github.com/brn-lc/PDM-I---Projeto-App-Scholar",
    semester: 4,
  },
  {
    id: "lab-wind",
    title: "Lab Wind",
    description:
      "Plataforma interativa para coleta, processamento e visualização de dados meteorológicos, facilitando o acesso a informações climáticas críticas através de uma interface moderna.",
    technologies: ["Typescript", "React", "Tailwind", "MongoDB"],
    repoUrl: "https://github.com/Steel-Hard/LabWind",
    semester: 3,
  },
  {
    id: "vitalu",
    title: "VitalU",
    description:
      "Ecossistema de saúde e bem-estar para monitoramento nutricional, oferecendo ferramentas de registro biométrico, cálculos calóricos precisos e relatórios de progresso personalizados.",
    technologies: ["Typescript", "React", "CSS", "PostgreSQL"],
    repoUrl: "https://github.com/Steel-Hard/VitalU",
    semester: 2,
  },
  {
    id: "scrum-plataform",
    title: "Plataforma Educacional Scrum",
    description:
      "Recurso web interativo desenvolvido para introduzir os fundamentos, papéis e cerimônias do framework ágil Scrum para novos estudantes e profissionais.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/frevisto/hardstop",
    semester: 1,
  },
];

function renderProjects(semester: number) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = PROJECTS.filter((p) => p.semester === semester);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="w-full flex flex-col items-center justify-center py-20 text-slate-400">
        <p class="text-lg font-medium">Nenhum projeto cadastrado para este período.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered
    .map(
      (project) => `
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col group h-full w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm shrink-0">
      <div class="p-6 md:p-8 flex-grow flex flex-col bg-gradient-to-br from-white to-slate-50/30">
        <h3 class="text-xl font-bold font-display text-slate-900 group-hover:text-indigo-600 transition-colors mb-4">${project.title}</h3>
        <p class="text-slate-600 text-sm leading-relaxed mb-6">${project.description}</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          ${project.technologies.map((tech) => `<span class="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-semibold uppercase tracking-wider rounded-md border border-slate-200/50">${tech}</span>`).join("")}
        </div>
      </div>
      ${
        project.repoUrl
          ? `
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-center">
        <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">
          <i data-lucide="github" class="w-4 h-4"></i> Código
        </a>
      </div>`
          : ""
      }
    </div>
  `,
    )
    .join("");

  // Re-renderiza os ícones do Lucide após injetar novo HTML
  // @ts-ignore
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".semester-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      // Remove o estado "Ativo" de todos
      tabs.forEach((t) => {
        t.classList.remove("text-indigo-600", "bg-white", "shadow-sm");
        t.classList.add("text-slate-500", "hover:text-slate-700");
      });

      // Adiciona estado "Ativo" ao clicado
      const target = e.currentTarget as HTMLElement;
      target.classList.remove("text-slate-500", "hover:text-slate-700");
      target.classList.add("text-indigo-600", "bg-white", "shadow-sm");

      const semester = parseInt(target.dataset.semester || "4", 10);
      renderProjects(semester);
    });
  });

  // Render inicial para o 4º Semestre
  renderProjects(4);
});
