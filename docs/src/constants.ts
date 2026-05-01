import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "iot-med-dispenser",
    title: "Dispensador de Remédios Automático",
    description: "Solução IoT ponta a ponta composta por um dispositivo físico embarcado e dashboard web para gestão automatizada de medicamentos, visando a segurança e o monitoramento remoto para idosos.",
    technologies: ["C++", "ESP32", "Node.js", "MQTT"],
    repoUrl: "https://github.com/octacodeteam/ABP4",
    semester: 4
  },
  {
    id: "app-scholar",
    title: "App Scholar",
    description: "Aplicação mobile voltada para a experiência acadêmica, centralizando o gerenciamento de cronogramas, notas e comunicações institucionais de forma intuitiva.",
    technologies: ["Typescript", "React Native", "PostgreSQL"],
    repoUrl: "https://github.com/brn-lc/PDM-I---Projeto-App-Scholar",
    semester: 4
  },
  {
    id: "lab-wind",
    title: "Lab Wind",
    description: "Plataforma interativa para coleta, processamento e visualização de dados meteorológicos, facilitando o acesso a informações climáticas críticas através de uma interface moderna.",
    technologies: ["Typescript", "React", "Tailwind", "MongoDB"],
    repoUrl: "https://github.com/Steel-Hard/LabWind",
    semester: 3
  },
  {
    id: "vitalu",
    title: "VitalU",
    description: "Ecossistema de saúde e bem-estar para monitoramento nutricional, oferecendo ferramentas de registro biométrico, cálculos calóricos precisos e relatórios de progresso personalizados.",
    technologies: ["Typescript", "React", "CSS", "PostgreSQL"],
    repoUrl: "https://github.com/Steel-Hard/VitalU",
    semester: 2
  },
  {
    id: "scrum-plataform",
    title: "Plataforma Educacional Scrum",
    description: "Recurso web interativo desenvolvido para introduzir os fundamentos, papéis e cerimônias do framework ágil Scrum para novos estudantes e profissionais.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/frevisto/hardstop",
    semester: 1
  }
];
