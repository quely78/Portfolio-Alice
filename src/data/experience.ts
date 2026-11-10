import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'residuum', group: 'experience', period: '2026', title: 'Front-end Lead', organization: 'Residuum',
    description: 'Liderança do time de front-end The Reds em um app de gamificação para coleta de resíduos.',
    highlights: [
      'Front-end em React 18 e Vite, com Tailwind e TanStack Query.',
      'Sprints, user stories, arquitetura e convenções do time.',
      'Protótipos HTML por perfil e cenários de teste em Gherkin.',
    ],
  },
  {
    id: 'cetam', group: 'experience', period: '05/2024 a 01/2026', title: 'Estagiária', organization: 'CETAM', location: 'Manaus, AM',
    description: 'Estágio em um centro de ensino técnico, com contato direto com os processos de ensino e capacitação em tecnologia.',
  },
  {
    id: 'uninorte', group: 'education', period: 'Em andamento', title: 'Ciência da Computação', organization: 'UNINORTE', location: 'Manaus, AM',
    description: 'Graduação no 8º período, com Estágio Supervisionado II e projetos de extensão ligados à Amazônia.',
    highlights: [
      'Projeto de extensão SemeAR, com foco em mulheres agricultoras.',
      'Projetos de feira e disciplina, como Rede Rosa e ARRUMAÍ.',
      'Atividades de Python com testes em pytest, entregues no GitHub.',
    ],
  },
  {
    id: 'manas', group: 'education', period: 'Em andamento', title: 'Voluntária de Design', organization: 'Manas Tech',
    description: 'Design e conteúdo para a comunidade de mulheres na tecnologia.',
    highlights: ['Posts, banners e templates de stories.', 'Card do Webinar das Manas e post de 1 mil seguidores.'],
  },
  {
    id: 'palestra', group: 'education', period: '30/03/2026', title: 'Seu Primeiro Portfólio de Design: o passo que falta para começar',
    organization: 'Manas Tech Talks: O futuro é delas', location: 'Ao vivo no YouTube',
    description: 'Palestra gratuita para estudantes iniciantes, dentro da programação do mês da mulher da Manas Tech.',
  },
]
