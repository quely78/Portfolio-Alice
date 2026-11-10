import type { Project } from '@/types'
import semearImg from '@/assets/projetos/semear.png'
import arrumaiImg from '@/assets/projetos/arrumai.png'

// Para ativar os botões de um projeto, preencha links.case, links.github ou links.site.
export const projects: Project[] = [
  {
    id: 'residuum', name: 'Residuum', categories: ['Front-end', 'Produto'], status: 'Em andamento', role: 'Front End Manager, time The Reds',
    summary: 'Gamifica a coleta de garrafas PET: o cidadão ganha pontos só depois que a cooperativa confirma o peso. Lidero o front-end em React.',
    details: ['Pontos só depois da confirmação do peso pela cooperativa.', 'Sprints, user stories, protótipos HTML e cenários de teste em Gherkin.'],
    stack: ['React 18', 'Vite', 'Tailwind', 'TanStack Query'],
  },
  {
    id: 'semear', name: 'SemeAR', categories: ['Front-end', 'Produto'], status: 'Em andamento', role: 'Front-end e back-end',
    summary: 'Sistema para as agricultoras da Amazon Carbon, em Rio Preto da Eva (AM), registrarem o plantio. Projeto de extensão em que desenvolvo front-end e back-end.',
    details: ['Projeto de extensão, dividido em MVP e fase 2.', 'Sprints independentes para que ninguém fique bloqueado.'],
    stack: ['React', 'Vite', 'Node.js', 'Prisma', 'Docker'],
    links: { github: 'https://github.com/quely78/semear-backend' },
    image: { src: semearImg, alt: 'Tela inicial do SemeAR' },
  },
  {
    id: 'arrumai', name: 'arrumaí', categories: ['Produto', 'Design'], status: 'Em análise', role: 'Tema, objetivos e requisitos',
    summary: 'Plataforma para contratar criação e revisão de documentos, com cada etapa do pedido visível ao cliente. Defini o tema, os objetivos e os requisitos.',
    details: ['Identidade visual em equipe, com a paleta Rio Negro, Papel, Pôr do sol, Solimões e Mata.'],
    stack: ['React', 'Vite', 'Node.js', 'MySQL', 'Requisitos'],
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
