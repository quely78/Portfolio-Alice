import type { LucideIcon } from 'lucide-react'

export type ProjectCategory = 'Front-end' | 'Full-stack' | 'Produto' | 'Design'

export interface Project {
  id: string
  name: string
  categories: ProjectCategory[]
  status: 'Em andamento' | 'Concluída' | 'Em planejamento'
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

export interface TechItem {
  name: string
  /** URL da logo oficial da tecnologia */
  logo?: string
  /** Ícone usado quando não existe logo (práticas, conceitos) */
  icon?: LucideIcon
  /** Logo preta que precisa clarear no tema escuro */
  invertDark?: boolean
  /** Logo escura que ganha contorno claro no tema escuro */
  outlineDark?: boolean
}

export interface TechGroup {
  title: string
  icon: LucideIcon
  items: TechItem[]
}
