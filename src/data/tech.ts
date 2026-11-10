import {
  BookOpen, Boxes, CodeXml, Component, Gamepad2, ListTodo, MonitorSmartphone, Palette, Server, Timer, Lightbulb,
} from 'lucide-react'
import type { TechGroup } from '@/types'

// Logos coloridas: Devicon (versão fixa) e Simple Icons (cor oficial da marca).
const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}.svg`
const simple = (slug: string) => `https://cdn.simpleicons.org/${slug}`

export const tech: TechGroup[] = [
  {
    title: 'Front-end e mobile',
    icon: MonitorSmartphone,
    items: [
      { name: 'React', logo: devicon('react/react-original') },
      { name: 'React Native', logo: devicon('react/react-original') },
      { name: 'Expo', logo: simple('expo'), invertDark: true },
      { name: 'Vite', logo: devicon('vitejs/vitejs-original') },
      { name: 'Tailwind', logo: devicon('tailwindcss/tailwindcss-original') },
      { name: 'TanStack Query', logo: simple('reactquery') },
      { name: 'Zustand', icon: Boxes },
      { name: 'React Hook Form', logo: simple('reacthookform') },
      { name: 'Zod', logo: simple('zod') },
      { name: 'HTML', logo: devicon('html5/html5-original') },
      { name: 'CSS', logo: devicon('css3/css3-original') },
    ],
  },
  {
    title: 'Back-end e dados',
    icon: Server,
    items: [
      { name: 'Firebase', logo: devicon('firebase/firebase-original') },
      { name: 'Python', logo: devicon('python/python-original') },
      { name: 'pytest', logo: devicon('pytest/pytest-original') },
      { name: 'Google Maps API', logo: simple('googlemaps') },
      { name: 'Git', logo: devicon('git/git-original') },
      { name: 'GitHub', logo: devicon('github/github-original'), invertDark: true },
      { name: 'Vercel', logo: devicon('vercel/vercel-original'), invertDark: true },
    ],
  },
  {
    title: 'Produto e design',
    icon: Lightbulb,
    items: [
      { name: 'Backlog', icon: ListTodo },
      { name: 'Sprints', icon: Timer },
      { name: 'User stories', icon: BookOpen },
      { name: 'Gherkin', logo: simple('cucumber') },
      { name: 'Design system', icon: Component },
      { name: 'Identidade visual', icon: Palette },
      { name: 'Protótipos em HTML', icon: CodeXml },
    ],
  },
  {
    title: 'Arte e jogos',
    icon: Gamepad2,
    items: [
      { name: 'Illustrator', logo: devicon('illustrator/illustrator-plain') },
      { name: 'Photoshop', logo: devicon('photoshop/photoshop-plain'), outlineDark: true },
      { name: 'Krita', logo: simple('krita') },
      { name: 'Construct 3', logo: simple('construct3') },
      { name: 'GameMaker', logo: simple('gamemaker'), invertDark: true },
    ],
  },
]
