import type { Project } from '@/types'
import semearImg from '@/assets/projetos/semear.png'
import arrumaiImg from '@/assets/projetos/arrumai.png'

// Para ativar os botões de um projeto, preencha links.case, links.github ou links.site.
export const projects: Project[] = [
  {
    id: 'residuum', name: 'Residuum', categories: ['Front-end', 'Produto'], status: 'Em andamento', role: 'Front-end Lead',
    summary: 'App que incentiva a reciclagem de garrafas PET: o cidadão acumula pontos só depois que a cooperativa confirma o peso entregue, o que dá confiança ao sistema. Lidero o front-end e conduzo sprints e user stories.',
    details: ['Protótipos em HTML validados antes da implementação.', 'Cenários de teste em Gherkin.'],
    stack: ['React 18', 'Vite', 'Tailwind', 'TanStack Query'],
  },
  {
    id: 'semear', name: 'SemeAR', categories: ['Full-stack', 'Produto'], status: 'Em andamento', role: 'Full-stack · Projeto de extensão',
    summary: 'Sistema para as agricultoras da Amazon Carbon, em Rio Preto da Eva (AM), registrarem o plantio de forma simples. Projeto de extensão em que desenvolvo front-end e back-end e atuo como Product Owner.',
    details: ['Projeto de extensão, dividido em MVP e fase 2.', 'Sprints independentes para que ninguém fique bloqueado.'],
    stack: ['React', 'Vite', 'Node.js', 'Prisma', 'Docker'],
    links: { github: 'https://github.com/quely78/semear-backend' },
    image: { src: semearImg, alt: 'Tela inicial do SemeAR' },
  },
  {
    id: 'arrumai', name: 'arrumaí', categories: ['Produto', 'Full-stack'], status: 'Em planejamento', role: 'Product Owner · Full-stack · Requisitos e design',
    summary: 'Plataforma para contratar criação e revisão de documentos, com cada etapa do pedido visível ao cliente. Defini o tema, os objetivos e os requisitos e prototipei as telas.',
    details: ['Identidade visual em equipe, com a paleta Rio Negro, Papel, Pôr do sol, Solimões e Mata.'],
    stack: ['React', 'Vite', 'Node.js', 'MySQL'],
    links: { github: 'https://github.com/KarolayneDevs/Arrumai_Site' },
    image: { src: arrumaiImg, alt: 'Página inicial do arrumaí' },
  },
  {
    id: 'combraz', name: 'Combraz', categories: ['Design', 'Front-end'], status: 'Concluída', role: 'Redesign web',
    summary: 'Redesign da landing page e das páginas de produto de uma empresa de móveis corporativos, com análise comparativa de antes e depois.',
    details: ['Análise comparativa de antes e depois, com capturas de tela.'],
    stack: ['HTML', 'CSS', 'Playwright'],
  },
]
