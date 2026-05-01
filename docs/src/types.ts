export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  semester: number;
  image?: string;
}

export type Semester = 1 | 2 | 3 | 4;
