export type ProjectCategory = 'Front-end' | 'Produto' | 'Design'

export interface Project {
  id: string
  name: string
  categories: ProjectCategory[]
  status: 'Em andamento' | 'Concluída' | 'Em análise'
  role: string
  summary: string
  details: string[]
  stack: string[]
  links?: { case?: string; github?: string; site?: string }
  image?: { src: string; alt: string }
}

export interface ExperienceItem {
  id: string
  group: 'experience' | 'education'
  period: string
  title: string
  organization: string
  location?: string
  description: string
  highlights?: string[]
}

export interface TechGroup {
  title: string
  items: string[]
}
